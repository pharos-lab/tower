<script setup lang="ts">
import { pageBuilder } from '@/stores/store';

</script>

<template>
    <div class="grow bg-slate-100 max-h-full overflow-y-auto p-1">
        <section 
            v-for="section in pageBuilder.sections" 
            class="relative group hover:ring-2 hover:ring-red-500" 
            :class="{'ring-2 ring-emerald-500': pageBuilder.currentSection == section }"
            @click="pageBuilder.currentSection = section"
        >
            <button class="hidden absolute -top-3 left-1/2 -translate-x-1/2 group-hover:block" @click="pageBuilder.removeSection(section.id)">supprimer</button>
            <pre>{{ section }}</pre>
        </section>
    </div>
</template>