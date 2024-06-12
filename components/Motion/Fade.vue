<script setup lang="ts">
type FadeDirectionTypes = "up" | "down" | "left" | "right";

const prop = withDefaults(
  defineProps<{
    as: string;
    inView?: boolean;
    direction?: FadeDirectionTypes;
    delay?: number;
  }>(),
  {
    inView: true,
    direction: "up",
    delay: 0,
  }
);

const target = ref<HTMLElement>();
const directions: Record<FadeDirectionTypes, any> = {
  up: { initial: { y: 100 }, enter: { y: 0 } },
  down: { initial: { y: -100 }, enter: { y: 0 } },
  left: { initial: { x: 100 }, enter: { x: 0 } },
  right: { initial: { x: -100 }, enter: { x: 0 } },
};

const variants = computed(() => {
  return {
    initial: {
      opacity: 0,
      ...directions[prop.direction].initial,
    },
    [prop.inView ? "visibleOnce" : "enter"]: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: 800,
        delay: prop.delay,
      },
      ...directions[prop.direction].enter,
    },
  };
});

const motionInstance = useMotion(target, variants);
</script>

<template>
  <component :is="as" ref="target">
    <slot />
  </component>
</template>
