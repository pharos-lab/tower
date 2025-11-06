<template>
    <div class="grow max-h-full overflow-y-auto">

        <Section v-for="section in pageBuilder.sections" :section>
            <Block v-for="block in section.blocks" :block></Block>
        </Section>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import Section from './Section.vue';
import Block from './Block.vue';

const pageBuilder = usePageBuilder()
</script>