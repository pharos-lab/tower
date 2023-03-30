<template>
  <teleport to="body">
    <div
      class="
        l-modal
        absolute
        inset-0
        flex
        justify-center
        items-start
        pt-64
        bg-slate-500/50
      "
      v-show="props.show"
      @click.self="$emit('closeModal')"
    >
      <div class="l-modal-content w-2/3 opacity-100 bg-white relative">
        <XMarkIcon
          v-if="props.dismissable"
          @click="$emit('closeModal')"
          class="
            right-2
            absolute
            top-2
            text-slate-600
            h-6
            w-6
            hover:text-slate-800
          "
        />

        <div class="l-modal-header p-4">
          <slot name="header"></slot>
        </div>
        <div class="l-modal-body p-4">
          <slot></slot>
        </div>
        <div class="l-modal-footer p-4">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const emits = defineEmits(['closeModal']);
const props = defineProps({
  dismissable: {
    type: Boolean,
    default: true,
  },
  show: Boolean,
});
</script>

<style scoped></style>
