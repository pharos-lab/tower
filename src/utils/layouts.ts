import { Columns2, Columns3, Columns4, Square } from "lucide-vue-next"
import type { Layout } from "../types"

export const layouts: Layout[] = [
    {
        cols: 1,
        icon: Square,
        name: '1 Column'
    },
    {
        cols: 2,
        icon: Columns2,
        name: '2 Columns'
    },
    {
        cols: 3,
        icon: Columns3,
        name: '3 Columns'
    },
    {
        cols: 4,
        icon: Columns4,
        name: '4 Column'
    },
]