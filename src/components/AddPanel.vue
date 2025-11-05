<template>
    <div class="w-64 max-h-full overflow-y-auto shrink-0 p-2">
        <Tabs default-value="sections">
            <TabsList>
                <TabsTrigger value="sections">Sections</TabsTrigger>
                <TabsTrigger value="blocks">Blocks</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
            </TabsList>

            <TabsContent value="sections">
                <div class="grid grid-cols-2 gap-2 flex-wrap">
                    <Card 
                        class="justify-center aspect-square items-center gap-2 hover:bg-slate-100" 
                        v-for="layout in layouts" 
                        :key="layout.name"
                        @click="pageBuilder.addSection(layout)"
                    >
                        <component :is="layout.icon"></component>
                        <p class="text-sm font-semibold text-slate-900/70">{{ layout.name }}</p>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="blocks">
                blocks
            </TabsContent>

            <TabsContent value="components">
                components
            </TabsContent>
        </Tabs>
        
    </div>
</template>

<script setup lang="ts">
import { Card } from './ui/card';
import { layouts } from '@/utils/layouts';
import { pageBuilder } from '../stores/store.ts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

</script>
