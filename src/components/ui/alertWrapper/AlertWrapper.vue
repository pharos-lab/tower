<template>
    <Alert :variant="props.variant">
        <AlertTitle>{{  props.title }}</AlertTitle>
        <AlertDescription>{{ props.description }}</AlertDescription>
    </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '../alert';

const props = defineProps<{
    variant: 'default' | 'destructive' | null | undefined,
    title: string,
    description: string
}>()
</script>