<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="text-sm text-center py-8 max-w-sm mx-auto">
    <div class="flex gap-2 justify-center mb-6">
      <a
        class="text-content2 hover:text-content1 transition-colors duration-300"
        href="https://github.com/latamaosadi"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Profile"
      >
        <Icon icon="Github" />
      </a>
      <a
        class="text-content2 hover:text-content1 transition-colors duration-300"
        href="https://www.linkedin.com/in/latamaosadi"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <Icon icon="LinkedIn" />
      </a>
    </div>
    <p>Designed & Built by Robert Latamaosadi</p>
    <p>&copy; Copyright {{ year }}</p>
  </footer>
</template>
