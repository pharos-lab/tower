// utils/defaultStyles.ts
import { merge } from 'lodash-es'
import type { DeepPartial, SectionStyles } from '@/types'

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
    border: {
        value: '',
        unit: 'px'
    },

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

/**
 * Create section styles by merging defaults with custom styles
 * Uses lodash merge for deep merging
 */
export function createSectionStyles(customStyles: DeepPartial<SectionStyles> = {}): SectionStyles {
    return merge({}, defaultSectionStyles, customStyles)
}