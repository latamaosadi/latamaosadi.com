<script lang="ts" setup>
import { Bars3Icon } from "@heroicons/vue/24/solid/esm";
</script>
<template>
  <div class="dropdown navbar-item">
    <label tabindex="0">
      <button
        class="btn btn-outline rounded-md border-slate-500 p-2 h-auto"
        aria-label="Dropdown Nav Toggle"
      >
        <Bars3Icon class="h-6 w-6 text-purple-1000" />
      </button>
    </label>
    <div class="dropdown-menu">
      <slot />
    </div>
  </div>
</template>
