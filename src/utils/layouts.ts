import { Home } from "lucide-vue-next"
import type { Layout } from "../types"

export const layouts: Layout[] = [
    {
        cols: 1,
        icon: Home,
        name: 'One Column'
    },
    {
        cols: 2,
        icon: Home,
        name: 'two Column'
    }
]