<template>
    <div v-if="!pageBuilder.currentBlock" class="text-center py-12 text-slate-400">
        <p>No block selected</p>
    </div>

    <div class="space-y-4" v-else>
        <!-- Section Info -->
        <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p class="text-sm font-semibold text-purple-900"> {{ pageBuilder.currentBlock.components.length }} components</p>
            <p class="text-xs font-mono text-purple-600">id: {{ pageBuilder.currentBlock.id }}</p>
        </div>

        <!-- Spacing -->
        <div>
            <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Spacing</h3>
            <div class="space-y-3">
                <div class="grid grid-cols-2 gap-2">
                    <!-- Padding -->
                    <div>
                        <label class="block text-sm font-medium text-slate-600 mb-1">Padding</label>
                        <div class="flex gap-1">
                            <input 
                                type="text"
                                v-model="pageBuilder.currentBlock.styles.padding.value"
                                placeholder="0"
                                class="w-full px-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <UnitInput v-model="pageBuilder.currentBlock.styles.padding.unit" />
                        </div>
                    </div>

                    <!-- Margin -->
                    <div>
                        <label class="block text-sm font-medium text-slate-600 mb-1">Margin</label>
                        <div class="flex gap-1">
                            <input 
                                type="text"
                                v-model="pageBuilder.currentBlock.styles.margin.value"
                                placeholder="0"
                                class="w-full px-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <UnitInput v-model="pageBuilder.currentBlock.styles.margin.unit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Alignment -->
        <div>
            <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Alignment</h3>
            <div class="grid grid-cols-2">

                <div class="">
                    <label class="block text-sm font-medium text-slate-600 mb-1">Horizontal</label>
                    <Select v-model="pageBuilder.currentBlock.styles.alignItems" v-if="pageBuilder.currentBlock">
                        <SelectTrigger size="sm" class="rounded">
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="start">Start</SelectItem>
                            <SelectItem value="center">Center</SelectItem>
                            <SelectItem value="end">End</SelectItem>
                            <SelectItem value="normal">normal</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Vertical</label>
                    <Select v-model="pageBuilder.currentBlock.styles.justifyContent" v-if="pageBuilder.currentBlock">
                        <SelectTrigger size="sm" class="rounded">
                            <SelectValue placeholder="Justify" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="start">Start</SelectItem>
                            <SelectItem value="center">Center</SelectItem>
                            <SelectItem value="end">End</SelectItem>
                            <SelectItem value="space-between">Between</SelectItem>
                            <SelectItem value="normal">normal</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>

        <!-- Background -->
        <div>
            <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Background</h3>
            <div class="space-y-2">
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Background Color</label>
                    <input 
                        type="color"
                        v-model="pageBuilder.currentBlock.styles.backgroundColor"
                        class="w-full h-8 border border-slate-300 rounded cursor-pointer"
                    />
                </div>
            </div>
        </div>

        <!-- Borders -->
        <div>
            <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Borders</h3>
            <div class="space-y-2">
                <!-- Border Width -->
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Border</label>
                    <div class="flex gap-2">
                        <input 
                            type="text"
                            v-model="pageBuilder.currentBlock.styles.borderWidth.value"
                            placeholder="0"
                            class="w-full px-3 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <UnitInput v-model="pageBuilder.currentBlock.styles.borderWidth.unit" />

                        <Select v-model="pageBuilder.currentBlock.styles.borderStyle">
                            <SelectTrigger size="sm" class="rounded">
                                <SelectValue placeholder="Select a unit"></SelectValue>
                            </SelectTrigger>
                            
                            <SelectContent>
                                <SelectItem value="solid">solid</SelectItem>
                                <SelectItem value="dashed">dashed</SelectItem>
                                <SelectItem value="dotted">dotted</SelectItem>
                                <SelectItem value="groove">groove</SelectItem>
                                <SelectItem value="double">double</SelectItem>
                                <SelectItem value="ridge">ridge</SelectItem>
                                <SelectItem value="inset">inset</SelectItem>
                                <SelectItem value="outset">outset</SelectItem>
                            </SelectContent>
                        </Select>

                        <input 
                            type="color"
                            v-model="pageBuilder.currentBlock.styles.borderColor"
                            class="w-full h-8 border border-slate-300 rounded cursor-pointer"
                        />
                    </div>
                </div>

                <!-- Border Radius -->
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Border Radius</label>
                    <div class="grid grid-cols-2 gap-2">
                        <input 
                            type="text"
                            v-model="pageBuilder.currentBlock.styles.borderRadius.value"
                            placeholder="0"
                            class="w-full px-3 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <UnitInput v-model="pageBuilder.currentBlock.styles.borderRadius.unit" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Custom -->
        <div>
            <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Custom</h3>
            <div class="space-y-2">
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Custom Classes</label>
                    <input 
                        type="text"
                        v-model="pageBuilder.currentBlock.styles.customClasses"
                        placeholder="e.g. my-custom-class"
                        class="w-full px-3 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import UnitInput from './UnitInput.vue';

const pageBuilder = usePageBuilder()
</script>