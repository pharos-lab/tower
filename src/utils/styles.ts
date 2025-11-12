// utils/defaultStyles.ts
import { merge } from 'lodash-es'
import type { BlockStyles, DeepPartial, SectionStyles } from '@/types'

export const defaultSectionStyles: SectionStyles = {
    // Spacing
    padding: {
        value: '',
        unit: 'rem'
    },
    margin: {
        value: '',
        unit: 'rem'
    },
    gap: {
        value: '',
        unit: 'rem'
    },

    // Background
    backgroundColor: '#ffffff',
    backgroundImage: '',

    // Borders
    borderRadius: {
        value: '',
        unit: 'px'
    },
    borderWidth: {
        value: '',
        unit: 'px'
    },
    borderStyle: 'solid',
    borderColor: '#000000',

    // Dimensions
    minHeight: {
        value: '',
        unit: 'px'
    },
    maxHeight: {
        value: '',
        unit: 'px'
    },

    // Custom
    customClasses: ''
}


export const defaultBlockStyles: BlockStyles = {
    // Spacing
    padding: {
        value: '',
        unit: 'rem'
    },
    margin: {
        value: '',
        unit: 'rem'
    },

    // Background
    backgroundColor: '#ffffff',

    // Borders
    borderRadius: {
        value: '',
        unit: 'px'
    },
    borderWidth: {
        value: '',
        unit: 'px'
    },
    borderStyle: 'solid',
    borderColor: '#000000',

    // Custom
    customClasses: '',
    alignItems: 'normal',
    justifyContent: 'start'
}
/**
 * Create section styles by merging defaults with custom styles
 * Uses lodash merge for deep merging
 */
export function createSectionStyles(customStyles: DeepPartial<SectionStyles> = {}): SectionStyles {
    return merge({}, defaultSectionStyles, customStyles)
}

export function createBlockStyles(customStyles: DeepPartial<BlockStyles> = {}): BlockStyles {
    return merge({}, defaultBlockStyles, customStyles)
}