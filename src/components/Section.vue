<template>
    <section 
        class="section relative grid transition-all duration-200 border-2 gap-2" 
        :class="[
            gridClass(section.layout.cols), 
            selectedClass,
            stylesClasses
        ]"
        @click="pageBuilder.currentSection = section"
        :style="styles"
    >
    <pre>{{  pageBuilder.currentSection }}</pre>
        <div 
            class="absolute top-0 right-0 flex items-center gap-2 px-3 py-1 bg-white border shadow-sm transition-opacity z-10"
            :class="[
                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                pageBuilder.currentSection !== pageBuilder.sections[0] 
                    ? '-translate-y-full rounded-t-lg border-b-2 border-b-blue-400' 
                    : 'rounded-b-lg'
            ]"
        >
            <component :is="section.layout.icon" class="size-4 text-blue-500"></component>

            <span class="text-xs font-medium text-slate-700">{{ section.layout.name }}</span>

            <button 
                @click.stop="pageBuilder.removeSection(section.id)" 
                class="ml-2 p-1 hover:bg-red-50 rounded transition-colors group"
                title="Delete section"
            >
                <Trash class="size-3.5 text-slate-400 group-hover:text-red-500"></Trash>
            </button>
        </div>

        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import { Trash } from 'lucide-vue-next';
import type { Section } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
    section: Section
}>()

const pageBuilder = usePageBuilder()

const isSelected = computed(() => pageBuilder.currentSection == props.section)

const selectedClass = computed(() => {
    return { 
        'border-blue-400': isSelected.value,
        'hover:border-slate-200 border-transparent': !isSelected.value
    }
})

const gridClass = ((cols: number) => {
    const map = [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4'
    ]

    return map[cols - 1]
})

const extracted = computed(() => {
  const s = pageBuilder.currentSection?.styles ?? {}
  const classes: string[] = []
  const result: Record<string, string> = {}

  for (const [prop, data] of Object.entries(s) as [string, { value: string; unit: string }][]) {
    if (data.unit === 'tailwind' && data.value) {
      classes.push(data.value)
    } else if (data.value) {
      result[prop] = `${data.value}${data.unit}`
    }
  }

  return { classes, styles: result }
})

const stylesClasses = computed(() => extracted.value.classes.join(' '))
const styles = computed(() => extracted.value.styles)


</script>