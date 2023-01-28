<script lang="ts" setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="dropdown navbar-item">
    <label tabindex="0"><Bars3Icon class="h-12 w-12 text-purple-1000" /></label>
    <div class="dropdown-menu">
      <slot />
    </div>
  </div>
</template>
