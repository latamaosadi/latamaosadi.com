<template>
  <div
    :class="[
      'mask mask-hexagon opacity-90 hover:opacity-100 transition-all duration-200 bg-purple-700',
    ]"
  >
    <NuxtImg
      class="mix-blend-luminosity hover:mix-blend-normal object-cover w-full object-top transition-all duration-150"
      src="/images/avatar.jpg"
      quality="80"
      alt="Robert Latamaosadi"
      width="448"
      height="448"
      format="webp"
    />
  </div>
</template>
