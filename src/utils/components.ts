import { Button } from "@/components/ui/button"
import type { Component } from "@/types"
import { markRaw } from "vue"
import { createComponentStyles } from "./styles"
import AlertWrapper from "@/components/ui/alertWrapper/AlertWrapper.vue"

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
    {
        id: '',
        name: 'Wrapper',
        label: 'Alert',
        component: markRaw(AlertWrapper),
        props: {
            variant: 'default',
            title: '',
            description: '',
            icon: ''
        },
        availableProps: {
            variant: {
                type: 'list',
                label: 'Variant',
                values: ['default', 'destructive'],
            },
            title: {
                type: 'text',
                label: 'Title',
            },
            description: {
                type: 'text',
                label: 'Description',
            },
            icon: {
                type: 'text',
                label: 'Icon'
            }
        },
        styles: createComponentStyles(),
    },
]