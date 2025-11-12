<!-- Custom.vue -->
<template>
    <div class="w-84 bg-slate-50 max-h-full overflow-y-auto shrink-0">
        <Tabs v-model="pageBuilder.customTabs">
            <TabsList class="w-full rounded-none">
                <TabsTrigger value="section">Section</TabsTrigger>
                <TabsTrigger value="block">Block</TabsTrigger>
                <TabsTrigger value="component">Component</TabsTrigger>
            </TabsList>

            <!-- SECTION TAB -->
            <TabsContent value="section" class="p-4">
                <div v-if="!pageBuilder.currentSection" class="text-center py-12 text-slate-400">
                    <p>No section selected</p>
                </div>

                <div class="space-y-6" v-else>
                    <!-- Section Info -->
                    <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div class="flex items-center gap-2 mb-1">
                            <component :is="pageBuilder.currentSection.layout.icon" class="size-4 text-blue-600"></component>
                            <span class="text-sm font-semibold text-blue-900">{{ pageBuilder.currentSection.layout.name }}</span>
                        </div>
                        <p class="text-xs text-blue-600 font-mono">id: {{ pageBuilder.currentSection.id }}</p>
                    </div>

                    <!-- Spacing -->
                    <div>
                        <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Spacing</h3>
                        <div class="space-y-3">
                            <!-- Padding -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Padding</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.padding.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.padding.unit" />
                                </div>
                            </div>

                            <!-- Margin -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Margin</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.margin.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.margin.unit" />
                                </div>
                            </div>

                            <!-- Gap -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Gap</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.gap.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.gap.unit" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Background -->
                    <div>
                        <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Background</h3>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Background Color</label>
                                <input 
                                    type="color"
                                    v-model="pageBuilder.currentSection.styles.backgroundColor"
                                    class="w-full h-9 border border-slate-300 rounded-md cursor-pointer"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Background Image URL</label>
                                <input 
                                    type="text"
                                    v-model="pageBuilder.currentSection.styles.backgroundImage"
                                    placeholder="https://..."
                                    class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Borders -->
                    <div>
                        <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Borders</h3>
                        <div class="space-y-3">
                            <!-- Border Width -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Border</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.border.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.border.unit" />
                                </div>
                            </div>

                            <!-- Border Radius -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Border Radius</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.borderRadius.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.borderRadius.unit" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dimensions -->
                    <div>
                        <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Dimensions</h3>
                        <div class="space-y-3">
                            <!-- Min Height -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Min Height</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.minHeight.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.minHeight.unit" />
                                </div>
                            </div>

                            <!-- Max Height -->
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Max Height</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input 
                                        type="text"
                                        v-model="pageBuilder.currentSection.styles.maxHeight.value"
                                        placeholder="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <UnitInput v-model="pageBuilder.currentSection.styles.maxHeight.unit" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Custom -->
                    <div>
                        <h3 class="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Custom</h3>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium text-slate-600 mb-1">Custom Classes</label>
                                <input 
                                    type="text"
                                    v-model="pageBuilder.currentSection.styles.customClasses"
                                    placeholder="e.g. bg-slate-100 p-4"
                                    class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>

            <!-- BLOCK TAB -->
            <TabsContent value="block" class="p-4">
                <div class="text-slate-400 text-sm">Block customization coming soon...</div>
            </TabsContent>

            <!-- COMPONENT TAB -->
            <TabsContent value="component" class="p-4">
                <div class="text-slate-400 text-sm">Component customization coming soon...</div>
            </TabsContent>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsContent, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { usePageBuilder } from '@/stores/store';
import UnitInput from './UnitInput.vue';

const pageBuilder = usePageBuilder()
</script>