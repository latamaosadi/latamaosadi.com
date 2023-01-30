<template>
  <div :class="['mask mask-hexagon bg-white/40 relative group']">
    <EffectBlob />
    <NuxtImg
      class="relative object-cover w-full object-top transition-all duration-150"
      src="/images/avatar-transparent.png"
      quality="80"
      alt="Robert Latamaosadi"
      width="448"
      height="448"
      format="webp"
    />
  </div>
</template>
