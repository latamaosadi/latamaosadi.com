<script setup lang="ts">
withDefaults(
  defineProps<{
    fillScreen?: boolean;
  }>(),
  {
    fillScreen: false,
  }
);
</script>

<template>
  <section :class="['flex flex-col pt-20', { 'min-h-screen': fillScreen }]">
    <slot />
  </section>
</template>
