<script setup lang="ts">
const props = defineProps<{
  icon: String;
}>();

const IconComponent = defineAsyncComponent(
  () => import(`./Social/${props.icon}.vue`)
);
</script>

<template>
  <IconComponent class="icon" />
</template>

<style>
.icon {
  @apply h-6 w-6;
}
</style>
