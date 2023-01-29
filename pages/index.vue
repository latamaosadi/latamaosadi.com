<template>
  <ClientOnly>
    <DelayHydration>
      <LazyTheParticle />
    </DelayHydration>
  </ClientOnly>
  <div class="relative flex flex-col gap-16">
    <TheSection id="cover" class="gap-9">
      <div>
        <h6 class="text-purple-1000 font-mono mb-3 text-sm lg:text-base">
          Hi there, I'm
        </h6>
        <h1 class="text-5xl lg:text-7xl font-bold">
          <p data-aos="fade-left" class="text-purple-1100 font-sans">
            Robert Latamaosadi.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            class="text-slate-1000 font-sans mt-4"
          >
            A designer and coder.
          </p>
        </h1>
      </div>
      <TheCard data-aos="fade-up" data-aos-delay="400" class="max-w-lg">
        <p class="text-content2">
          I'm a UX-oriented frontend developer specializing in building
          high-quality digital products. Currently a part of amazing people
          enabling exceptional digital financial experience at Brankas.
        </p>
      </TheCard>
    </TheSection>
    <TheSection id="about" class="gap-6">
      <SectionHeader>About Me</SectionHeader>
      <div class="lg:flex gap-3">
        <TheCard data-aos="fade-up" class="flex-1 max-w-none">
          <div class="text-content2 flex flex-col gap-4">
            <p>
              Hi! My name is Robert, I love tinkering and creating stuff that
              could be accessed publicly. I think the web is one of the best
              invention ever created, we can easily share information, a lot of
              digital solution emerges that increase our quality of life.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul class="grid lg:grid-cols-2 gap-2 text-sm">
              <ListItem>VueJS</ListItem>
              <ListItem>TailwindCSS</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>NuxtJS</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>NextJS</ListItem>
            </ul>
          </div>
        </TheCard>
        <div class="flex-1">
          <div class="group mx-auto relative max-w-sm lg:max-w-md">
            <div
              class="bg-slate-1000/40 absolute inset-0 mask mask-hexagon transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"
            ></div>
            <div class="drop-shadow-md">
              <TheAvatar />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
    <TheSection id="experience" class="lg:pl-24 gap-6">
      <SectionHeader>Experience</SectionHeader>
      <TheCard data-aos="fade-up" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <TimelineList class="mt-4">
          <TimelineItem>
            <template #title>Senior Front-end Developer at Brankas</template>
            <template #period>Januari 2021 - Present</template>
          </TimelineItem>
          <TimelineItem>
            <template #title>Senior Front-end Developer at Gotomalls</template>
            <template #period>June 2015 - December 2020</template>
          </TimelineItem>
        </TimelineList>
      </TheCard>
    </TheSection>
    <TheSection id="projects" class="gap-6">
      <SectionHeader>I Made These</SectionHeader>
      <!-- <TheCard data-aos="fade-up" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
        </div>
      </TheCard> -->
      <LazyPageSectionTheProjects />
    </TheSection>
    <TheSection id="contact" class="gap-6">
      <SectionHeader>Get In Touch</SectionHeader>
      <TheCard data-aos="fade-up" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p>Got any question or fun project to work on? Let's have a chat!</p>
        </div>
      </TheCard>
      <div class="text-center">
        <a
          href="mailto:robert.latamaosadi@gmail.com"
          class="mx-auto max-w-xs inline-flex items-center gap-2 py-4 px-10 rounded bg-backgroundPrimary/40 text-purple-1000 hover:bg-purple-200 transform active:scale-95 transition-all duration-200 group ring ring-purple-1000 shadow-lg hover:shadow-xl backdrop-blur-sm"
        >
          <span>Drop a Hello</span>
          <span>👋</span>
        </a>
      </div>
    </TheSection>
  </div>
</template>
