<template>
  <div class="relative flex flex-col gap-16">
    <TheSection id="cover" class="gap-9 justify-center" fill-screen>
      <div>
        <h6 class="text-purple-1000 font-mono mb-3 text-sm lg:text-base">
          Hi there, I&apos;m
        </h6>
        <MotionFade
          as="h1"
          direction="left"
          class="text-5xl lg:text-7xl font-bold text-purple-1100 font-sans"
        >
          Robert Latamaosadi.
        </MotionFade>
        <MotionFade
          as="h2"
          :delay="300"
          direction="left"
          class="text-5xl lg:text-7xl font-bold text-slate-1000 font-sans mt-4"
        >
          A designer and coder.
        </MotionFade>
      </div>
      <TheCard class="max-w-lg">
        <p class="text-content2">
          I'm a UX-oriented front-end developer specializing in building
          high-quality digital products. Currently a part of amazing people
          enabling exceptional digital financial experience at Brankas.
        </p>
      </TheCard>
    </TheSection>
    <TheSection id="about" class="gap-12">
      <SectionHeader>About Me</SectionHeader>
      <div class="lg:flex gap-3">
        <div class="mx-auto w-40 md:w-60 md:order-last">
          <div class="group relative w-full">
            <div class="drop-shadow-md">
              <TheAvatar />
            </div>
          </div>
        </div>
        <TheCard class="flex-1 max-w-none">
          <div class="text-content2 flex flex-col gap-4">
            <p>
              Hi! My name is Robert, I love tinkering and creating stuff that
              could be accessed publicly. I think the web is one of the best
              invention ever created, we can easily share information, a lot of
              digital solution emerges that increase our quality of life.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul class="grid lg:grid-cols-2 gap-2">
              <ListItem>VueJS</ListItem>
              <ListItem>TailwindCSS</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>NuxtJS</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>NextJS</ListItem>
            </ul>
          </div>
        </TheCard>
      </div>
    </TheSection>
    <TheSection id="experience" class="gap-6">
      <SectionHeader>Experience</SectionHeader>
      <TheCard class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p></p>
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
      <!-- <TheCard v-motion :initial="{opacity: 0, y: 100}" :enter="{opacity: 1, y: 0}" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
        </div>
      </TheCard> -->
      <LazyPageSectionTheProjects class="mt-6" />
    </TheSection>
    <TheSection id="contact" class="gap-6" fill-screen>
      <SectionHeader>Get In Touch</SectionHeader>
      <TheCard class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p>Got any question or fun project to work on? Let's have a chat!</p>
        </div>
      </TheCard>
      <div class="mx-auto max-w-xs relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-700 to-purple-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        ></div>
        <a
          href="mailto:robert.latamaosadi@gmail.com"
          class="inline-flex items-center gap-2 py-4 px-10 rounded-lg bg-backgroundPrimary text-purple-1000 transform active:scale-95 transition-all duration-200 group-hover:text-slate-1100"
        >
          <span>👋</span>
          <span>Drop a Hello</span>
        </a>
      </div>
    </TheSection>
  </div>
</template>
