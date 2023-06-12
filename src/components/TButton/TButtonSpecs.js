export const data = {
  props: {
    color: {
      type: 'String',
      valid: ['gray', 'red', 'orange', 'yellow', 'blue'],
    },
    mode: {
      type: 'String',
      default: 'fill',
      valid: ['none', 'fill', 'light', 'outlined', 'text'],
    },
    rounded: {
      type: 'String',
      valid: ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'],
    },
    hover: {
      type: 'Boolean',
      default: true,
      valid: ['true', 'false'],
    },
    focus: {
      type: 'String',
      valid: ['gray', 'red', 'orange', 'yellow', 'blue', 'inherit'],
    },
    href: {
      type: 'text',
    },
  },
  slots: {
    base: {
      type: 'text',
      label: 'label',
    },
  },
};
