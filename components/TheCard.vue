<script lang="ts" setup>
const prop = withDefaults(
  defineProps<{
    image?: string;
    glass?: boolean;
  }>(),
  {
    glass: true,
  }
);
</script>

<template>
  <MotionFade
    as="div"
    :class="[
      'card',
      {
        'card-image-cover': !!prop.image,
        'backdrop-blur-sm bg-backgroundPrimary/40 shadow-none': !!prop.glass,
      },
    ]"
  >
    <img v-if="prop.image" :src="prop.image" alt="" />
    <div class="card-body p-2">
      <h2 v-if="$slots.header" class="card-header">
        <slot name="header"></slot>
      </h2>

      <slot />

      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </MotionFade>
</template>
