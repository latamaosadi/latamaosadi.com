<script lang="ts" setup>
import { BriefcaseIcon } from "@heroicons/vue/24/solid/esm";
</script>

<template>
  <li class="ml-6">
    <span
      class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-backgroundPrimary bg-purple-300"
    >
      <BriefcaseIcon class="w-4 h-4 text-purple-1000" />
    </span>
    <h3
      v-if="$slots.title"
      class="flex items-center mb-1 text-lg font-semibold text-content1"
    >
      <slot name="title" />
    </h3>
    <time
      v-if="$slots.period"
      class="block mb-2 text-sm font-normal leading-none text-content3"
    >
      <slot name="period" />
    </time>
    <p class="mb-4 text-base font-normal text-content2">
      <slot />
    </p>
  </li>
</template>
