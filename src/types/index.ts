import type { LucideIcon } from "lucide-vue-next"
import type { Ref, Component as VueComponent } from "vue"

export interface PageBuilder {
    title?: string
    sections: Section[]
    currentSection: Section | null
    currentBlock: Block | null
    currentComponent: Component | null
    tabs: string

    addSection: CallableFunction
    removeSection: CallableFunction
    addComponent: CallableFunction
    removeComponent: CallableFunction
    generateBlocks: CallableFunction
}

export interface Section {
    id: string
    layout: Layout
    blocks?: Block[]
    styles: SectionStyles
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
    label?: string
    component: VueComponent
    props: Record<string, unknown>
    children?: Component[]
    icon?: LucideIcon
}

export interface UnitValue {
  value: string
  unit: string
}

export interface SectionStyles {
  // Spacing
  padding: UnitValue
  margin: UnitValue
  gap: UnitValue

  // Background
  backgroundColor: string
  backgroundImage: string

  // Borders
  borderRadius: UnitValue
  borderWidth: UnitValue
  borderStyle: string
  borderColor: string

  // Dimensions
  minHeight: UnitValue
  maxHeight: UnitValue

  // Custom
  customClasses: string
}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

