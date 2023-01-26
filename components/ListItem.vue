<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <li class="flex items-center gap-2 text-purple-1000 py-2 px-3">
    <ChevronRightIcon class="h-6 w-6" />
    <span class="font-mono">
      <slot />
    </span>
  </li>
</template>
