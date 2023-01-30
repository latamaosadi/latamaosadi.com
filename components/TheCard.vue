<script lang="ts" setup>
const props = withDefaults(
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
  <MotionFadeUp
    as="div"
    :class="[
      'card',
      {
        'card-image-cover': !!props.image,
        'backdrop-blur-sm bg-backgroundPrimary/40 shadow-none': !!props.glass,
      },
    ]"
  >
    <img v-if="props.image" :src="props.image" alt="" />
    <div class="card-body">
      <h2 v-if="$slots.header" class="card-header">
        <slot name="header"></slot>
      </h2>

      <slot />

      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </MotionFadeUp>
</template>
