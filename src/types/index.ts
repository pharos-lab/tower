import type { LucideIcon } from "lucide-vue-next"

export interface PageBuilder {
    title?: string
    sections: Section[]
    currentSection: Section | null
    currentBlock: Block | null

    addSection: CallableFunction
    removeSection: CallableFunction
}

export interface Section {
    id: string
    layout: Layout
    blocks?: Block[]
}

export interface Layout {
    cols: number
    name: string
    icon: LucideIcon
}

export interface Block {
    id: string
    components: Component[]
}

export interface Component {
    id: string
    name: string
}