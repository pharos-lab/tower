<template>
    <div class="h-screen overflow-hidden flex">
        <AddPanel></AddPanel>
        <Page></Page>
        <Custom></Custom>
    </div>
</template>

<script setup lang="ts">
import AddPanel from './AddPanel.vue';
import Page from './Page.vue';
import Custom from './Custom.vue';
</script>