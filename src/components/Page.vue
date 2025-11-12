<template>
    <div class="grow max-h-full overflow-y-auto">

        <Section v-for="section in pageBuilder.sections" :section :key="section.id">
            <Block v-for="block in section.blocks" :block :key="block.id">
                <Component v-for="component in block.components" :component :key=" component.id"></Component>
            </Block>
        </Section>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import Section from './Section.vue';
import Block from './Block.vue';
import Component from './Component.vue';

const pageBuilder = usePageBuilder()
</script>