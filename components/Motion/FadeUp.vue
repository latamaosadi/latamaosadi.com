<script setup lang="ts">
defineProps<{
  as: String;
}>();

const initialOption = {
  opacity: 0,
  y: 100,
};
const enterOption = {
  opacity: 1,
  y: 0,
  transition: { type: "spring", stiffness: 150, duration: 800 },
};
</script>

<template>
  <component :is="as" v-motion :initial="initialOption" :visible="enterOption">
    <slot />
  </component>
</template>
