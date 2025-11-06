import { reactive } from 'vue'
import type { Layout, Section, Block, Component, PageBuilder } from '../types'

const generateId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

export const pageBuilder: PageBuilder = reactive({
    title: '',
    sections: [] as Section[],
    currentSection: null as Section | null,
    currentBlock: null as Block | null,
    currentComponent: null as Component | null,
    
    addSection(layout: Layout) {
        const section: Section = {
            id: generateId(),
            layout: layout,
            blocks: this.generateBlocks(layout.cols)
        }

        this.sections.push(section)

        this.currentSection = section
    },

    generateBlocks(cols: number = 1) {
        const blocks: Block[] = []

        for (let index = 0; index < cols; index++) {
            blocks.push({
                id: generateId(),
                components: []
            })
        }

        this.currentBlock = blocks[0] || null

        return blocks
    },

    removeSection(sectionId: string) {
        const index = this.sections.findIndex(section => section.id === sectionId)

        
        if (this.currentSection?.id === sectionId) {
            this.currentSection = null
        }

        if (index > -1) {
            this.sections.splice(index, 1)
        }
    },

    addComponent(componentName: string) {
        const component: Component = {
            id: generateId(),
            name: componentName,
        }

        this.currentBlock?.components.push(component)

        this.currentComponent = component
    },

    removeComponent(componentId: string) {
        const index = this.currentBlock?.components.findIndex(component => component.id === componentId)

        if (this.currentComponent?.id === componentId) {
            this.currentComponent = null
        }

        if (index != null && index > -1) {
            this.currentBlock?.components.splice(index, 1)
        }
    }
    
})