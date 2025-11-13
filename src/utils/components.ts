import { Button } from "@/components/ui/button"
import type { Component } from "@/types"
import { markRaw } from "vue"
import { createComponentStyles } from "./styles"

export const components: Component[] = [
    {
        id: '',
        name: 'Button',
        label: 'Button',
        component: markRaw(Button),
        props: {
            variant: 'default',
            size: 'default'
        },
        availableProps: {
            variant: {
                type: 'list',
                label: 'Variant',
                values: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
            },
            size: {
                type: 'list',
                label: 'Size',
                values: ['default', 'sm', 'lg'],
            },
        },
        styles: createComponentStyles()
    },
]