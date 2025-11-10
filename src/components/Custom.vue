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
                        <p class="text-xs text-blue-600 font-mono">id: {{ pageBuilder.currentSection.id.slice(0, 12) }}</p>
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
                                    placeholder="e.g., 2rem or 32px"
                                    class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    
                                    <Select default-value="tailwind" v-model="pageBuilder.currentSection.styles.padding.unit">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a unit" ></SelectValue>
                                        </SelectTrigger>
                                        
                                        <SelectContent>
                                            <SelectItem value="tailwind">Tailwind</SelectItem>
                                            <SelectItem value="px">Px</SelectItem>
                                            <SelectItem value="rem">Rem</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
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

const pageBuilder = usePageBuilder()
</script>