<script setup lang="ts">
import PageBuilder from './components/PageBuilder.vue';
import { Alert, AlertDescription } from './components/ui/alert';
import AlertTitle from './components/ui/alert/AlertTitle.vue';
</script>

<template>

    <Alert variant="destructive">
        <AlertTitle>test ok</AlertTitle>
        <AlertDescription>ok description</AlertDescription>
    </Alert>
    <PageBuilder></PageBuilder>
</template>

<style scoped>

</style>
