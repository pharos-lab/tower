import { reactive } from 'vue'
import type { PageBuilder } from '../types'
import type { Layout, Section } from '../types'

export const pageBuilder: PageBuilder = reactive({
    title: '',
    sections: [] as Section[],
    
    addSection(layout: Layout) {
        this.sections.push({
            id: '0001',
            layout: layout,
        })

        console.log(this);
        
    }
})