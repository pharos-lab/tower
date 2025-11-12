import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Layout, Section, Block, Component } from '@/types'
import { createBlockStyles, createSectionStyles } from '@/utils/styles'

const generateId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

export const usePageBuilder = defineStore('pageBuilder', () => {
    // --- state ---
    const title = ref('')
    const sections = ref<Section[]>([])
    const currentSection = ref<Section | null>(null)
    const currentBlock = ref<Block | null>({
        
    })
    const currentComponent = ref<Component | null>(null)
    const panelTabs = ref<'sections' | 'components'>('sections')
    const customTabs = ref<'section' | 'block' | 'component'>('section')

    // --- actions ---
    function addSection(layout: Layout) {
        const section: Section = {
            id: generateId(),
            layout,
            blocks: generateBlocks(layout.cols),
            styles: createSectionStyles({
                padding: {
                    value: '1',
                },
            })
        }

        sections.value.push(section)
        currentSection.value = section
        customTabs.value = 'section'
    }

    function generateBlocks(cols: number = 1) {
        const blocks: Block[] = []

        for (let i = 0; i < cols; i++) {
        blocks.push({
            id: generateId(),
            components: [],
            styles: createBlockStyles()
        })
        }

        currentBlock.value = blocks[0] || null
        return blocks
    }

    function removeSection(sectionId: string) {
        const index = sections.value.findIndex((s) => s.id === sectionId)
        if (currentSection.value?.id === sectionId) currentSection.value = null
        if (index > -1) sections.value.splice(index, 1)
    }

    function addComponent(component: Component) {
        const newComponent = {
            ...component,
            id: generateId(),
            props: structuredClone(component.props || {}),
        }
        component.id = generateId()
        currentBlock.value?.components.push(newComponent)
        currentComponent.value = newComponent
        customTabs.value = "component"
    }

    function removeComponent(componentId: string) {
        const index = currentBlock.value?.components.findIndex(
        (c) => c.id === componentId
        )

        if (currentComponent.value?.id === componentId) {
        currentComponent.value = null
        }

        if (index != null && index > -1) {
        currentBlock.value?.components.splice(index, 1)
        }
    }

    return {
        title,
        sections,
        currentSection,
        currentBlock,
        currentComponent,
        panelTabs,
        customTabs,
        addSection,
        generateBlocks,
        removeSection,
        addComponent,
        removeComponent,
    }
})