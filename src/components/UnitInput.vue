<template>
    <Select v-model="model">
        <SelectTrigger>
            <SelectValue placeholder="Select a unit"></SelectValue>
        </SelectTrigger>
        
        <SelectContent>
            <SelectItem value="px">px</SelectItem>
            <SelectItem value="rem">rem</SelectItem>
            <SelectItem value="%">%</SelectItem>
            <SelectItem value="em">em</SelectItem>
        </SelectContent>
    </Select>
</template>

<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const model = defineModel<string>()
</script>