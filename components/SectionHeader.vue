<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: 100 }"
    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    class="relative md:border-b md:border-gray-500 h-8"
  >
    <h2
      class="absolute top-4 font-pixel text-2xl text-purple-1100 md:bg-backgroundPrimary pr-6"
    >
      <slot />
    </h2>
  </div>
</template>
