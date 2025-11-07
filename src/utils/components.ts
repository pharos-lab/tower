import { Button } from "@/components/ui/button"
import type { Component } from "@/types"
import { markRaw } from "vue"

export const components: Component[] = [
    {
        id: '',
        name: 'Button',
        label: 'Button',
        component: markRaw(Button),
        props: {
            variant: 'primary'
        },
    },
]