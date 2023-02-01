<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid/esm";

const { data: projects } = await useFetch("/api/projects");
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <MotionFade
      as="div"
      class="relative group"
      v-for="(project, index) in projects"
      :key="index"
      :delay="(index + 1) * 200"
    >
      <div class="">
        <div class="relative rounded-xl overflow-hidden shadow-lg">
          <!-- <div
            class="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-backgroundPrimary"
          ></div> -->
          <!-- <div class="absolute bottom-0 inset-x-0">
            <div class="flex flex-wrap gap-1 p-2">
              <span
                class="badge rounded shadow-md"
                v-for="(tool, index) in project.tools"
                :key="index"
              >
                {{ tool }}
              </span>
            </div>
          </div> -->
          <NuxtImg
            provider="contentful"
            class="object-cover object-center w-full aspect-video"
            :src="project.cover.url"
            :alt="project.title"
            loading="lazy"
            format="webp"
            width="600"
            height="400"
          />
        </div>
      </div>
      <div class="mt-4 space-y-2 text-center">
        <h3 class="font-bold text-lg">
          {{ project.title }}
        </h3>
        <div class="">
          <p class="text-content2">{{ project.description }}</p>
        </div>
        <!-- <div v-if="project.url" class="flex justify-end">
          <a :href="project.url" target="_blank" class="btn btn-ghost gap-2">
            <span>Project Link</span>
            <ArrowTopRightOnSquareIcon class="h-6" />
          </a>
        </div> -->
      </div>
    </MotionFade>
  </div>
</template>
