<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid/esm";
</script>
<template>
  <li class="flex items-center gap-2 text-purple-1000 py-2 px-3">
    <ChevronRightIcon class="h-3 w-3" />
    <span class="font-mono text-sm">
      <slot />
    </span>
  </li>
</template>
