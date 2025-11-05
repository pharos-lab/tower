import { reactive } from 'vue'
import type { PageBuilder } from '../types'
import type { Layout, Section, Block } from '../types'

const generateId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

export const pageBuilder: PageBuilder = reactive({
    title: '',
    sections: [] as Section[],
    currentSection: null as Section | null,
    currentBlock: null as Block | null,
    
    addSection(layout: Layout) {
        const section: Section = {
            id: generateId(),
            layout: layout,
        }

        this.sections.push(section)

        this.currentSection = section
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
})