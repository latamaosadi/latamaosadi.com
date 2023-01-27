<script lang="ts" setup>
const isDark = computed(() => useDark());
</script>

<template>
  <div
    :class="[
      'mask mask-hexagon opacity-90 hover:opacity-100 transition-all duration-200',
      isDark ? 'bg-purple-700' : 'bg-purple-900',
    ]"
  >
    <NuxtImg
      class="mix-blend-luminosity hover:mix-blend-normal object-cover w-full object-top transition-all duration-150"
      src="/images/avatar.jpg"
      quality="80"
      alt=""
    />
  </div>
</template>
