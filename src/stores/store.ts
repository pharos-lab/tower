import { reactive } from 'vue'
import type { PageBuilder } from '../types'

export const pageBuilder: PageBuilder = reactive({
    title: '',
    sections: []
})