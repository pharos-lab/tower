import { reactive } from 'vue'
import type { PageBuilder } from '../types'
import type { Layout, Section } from '../types'

const generateId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

export const pageBuilder: PageBuilder = reactive({
    title: '',
    sections: [] as Section[],
    currentSection: null,
    currentBlock: null,
    
    addSection(layout: Layout) {
        this.sections.push({
            id: generateId(),
            layout: layout,
        })

        console.log(this);
    },

    removeSection(sectionId: string) {
        const index = this.sections.findIndex(section => section.id === sectionId)
        if (index > -1) {
            this.sections.splice(index, 1)
        }
    },
})