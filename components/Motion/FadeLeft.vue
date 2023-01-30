<script setup lang="ts">
defineProps<{
  as: String;
}>();

const initialOption = {
  opacity: 0,
  x: 100,
};
const enterOption = {
  opacity: 1,
  x: 0,
  transition: { type: "spring", stiffness: 100, duration: 800 },
};
</script>

<template>
  <component :is="as" v-motion :initial="initialOption" :visible="enterOption">
    <slot />
  </component>
</template>
