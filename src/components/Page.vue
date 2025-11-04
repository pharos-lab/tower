<script setup lang="ts">
import { pageBuilder } from '@/stores/store';

</script>

<template>
    <div class="grow bg-slate-100 max-h-full overflow-y-auto">
        <section v-for="section in pageBuilder.sections">
            <pre>{{ section }}</pre>
        </section>
    </div>
</template>