<script setup lang="ts">
import { pageBuilder } from '@/stores/store';

</script>

<template>
    <div class="grow bg-slate-100 max-h-full overflow-y-auto p-1">
        <section v-for="section in pageBuilder.sections" class="relative group hover:ring-2 ring-red-500">
            <button class="hidden absolute -top-3 left-1/2 -translate-x-1/2 group-hover:block" @click="pageBuilder.removeSection(section.id)">supprimer</button>
            <pre>{{ section }}</pre>
        </section>
    </div>
</template>