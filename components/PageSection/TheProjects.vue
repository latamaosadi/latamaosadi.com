<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";

const { data } = await useAsyncData("project", async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp as any;

  const projects = await $contentfulClient.getEntries({
    content_type: "project",
    "metadata.tags.sys.id[in]": "featured",
  });
  return projects;
});
const projects = computed(
  () => data.value?.items.map((item: any) => item.fields) || []
);
</script>

<template>
  <div class="flex flex-col gap-20">
    <div
      class="md:grid md:grid-cols-12 relative group"
      v-for="(project, index) in projects"
      :key="index"
    >
      <div
        class="row-span-full md:col-span-8 md:group-even:col-end-13 md:group-odd:col-start-1 rounded-lg overflow-hidden"
      >
        <NuxtImg
          provider="contentful"
          class="object-cover object-center"
          :src="project.cover.fields.file.url"
          :alt="project.title"
          loading="lazy"
          format="webp"
          width="600"
          height="400"
        />
      </div>
      <div
        class="mt-4 md:mt-0 row-span-full md:col-span-5 md:group-even:col-start-1 md:group-odd:col-end-13 md:group-even:order-first self-center z-10 space-y-2"
      >
        <h3 class="font-bold uppercase md:group-odd:text-right text-xl">
          {{ project.title }}
        </h3>
        <div class="bg-gray-200/70 backdrop-blur-sm p-4 rounded-lg shadow">
          <p class="text-content2">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1 mt-4">
            <span
              class="badge badge-square"
              v-for="(tool, index) in project.tools"
              :key="index"
            >
              {{ tool }}
            </span>
          </div>
        </div>
        <div
          v-if="project.url"
          class="flex justify-end md:group-even:justify-start"
        >
          <a :href="project.url" target="_blank" class="btn btn-ghost gap-2">
            <span>Project Link</span>
            <ArrowTopRightOnSquareIcon class="h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
