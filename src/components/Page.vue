<template>
    <div class="grow max-h-full overflow-y-auto p-1">

        <Section v-for="section in pageBuilder.sections" :section>
            <Block v-for="block in section.blocks" :block></Block>
        </Section>
    </div>
</template>

<script setup lang="ts">
import { pageBuilder } from '@/stores/store';
import Section from './Section.vue';
import Block from './Block.vue';
</script>