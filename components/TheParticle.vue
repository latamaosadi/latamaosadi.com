<script setup lang="ts">
import { loadFull } from "tsparticles";
import { ParticlesComponent } from "vue3-particles";
import { Engine } from "tsparticles-engine";

async function particlesInit(engine: Engine) {
  await loadFull(engine);
}

const options = computed(() => ({
  retina_detect: true,
  fullScreen: {
    enable: true,
  },
  particles: {
    number: {
      density: {
        enable: false,
      },
      value: 80,
    },
    shape: {
      type: "triangle",
    },
    color: {
      value: "#8892B0",
    },
    links: {
      color: "#8892B0",
      enable: true,
    },
    line_linked: {
      opacity: 0.3,
    },
    move: {
      enable: true,
      speed: 1,
    },
    opacity: {
      value: 0.3,
    },
  },
}));
</script>
<template>
  <ParticlesComponent
    id="tsparticles"
    :options="options"
    :particles-init="particlesInit"
  />
</template>
