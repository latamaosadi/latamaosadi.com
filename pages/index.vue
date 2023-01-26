<script setup lang="ts">
import { loadFull } from "tsparticles";
import { ParticlesComponent } from "vue3-particles";
import { Engine } from "tsparticles-engine";

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

async function particlesInit(engine: Engine) {
  await loadFull(engine);
}
</script>

<template>
  <ParticlesComponent
    id="tsparticles"
    :options="options"
    :particles-init="particlesInit"
  />
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
          I'm a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Brankas.
        </p>
      </TheCard>
    </TheSection>
    <TheSection id="about" class="gap-6">
      <SectionHeader>About Me</SectionHeader>
      <div class="lg:flex gap-3">
        <TheCard data-aos="fade-up" class="flex-1 max-w-none">
          <div class="text-content2 flex flex-col gap-4">
            <p>
              Hello! My name is Robert and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at Brankas
              for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
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
          <p>
            Hello! My name is Robert and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at Brankas
            for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <TimelineList class="mt-4">
          <TimelineItem>
            <template #title>Senior Front-end Developer at Brankas</template>
            <template #period>Januari 2021 - Present</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            accusantium illum perferendis dolorem deserunt tempore suscipit amet
            nam, officia numquam, similique temporibus corporis ea, atque dolor
            autem. Similique, possimus magnam!
          </TimelineItem>
          <TimelineItem>
            <template #title>Senior Front-end Developer at Gotomalls</template>
            <template #period>June 2015 - December 2020</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            accusantium illum perferendis dolorem deserunt tempore suscipit amet
            nam, officia numquam, similique temporibus corporis ea, atque dolor
            autem. Similique, possimus magnam!
          </TimelineItem>
        </TimelineList>
      </TheCard>
    </TheSection>
    <TheSection id="projects" class="gap-6">
      <SectionHeader>I Made These</SectionHeader>
      <TheCard data-aos="fade-up" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p>
            Hello! My name is Robert and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at Brankas
            for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
      </TheCard>
      <PageSectionTheProjects />
    </TheSection>
    <TheSection id="contact" class="gap-6">
      <SectionHeader>Get In Touch</SectionHeader>
      <TheCard data-aos="fade-up" class="max-w-full">
        <div class="text-content2 flex flex-col gap-4">
          <p>
            Hello! My name is Robert and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
        </div>
      </TheCard>
      <div class="text-center">
        <a
          href="mailto:robert.latamaosadi@gmail.com"
          class="mx-auto max-w-xs inline-flex items-center gap-2 py-4 px-10 rounded bg-backgroundPrimary/40 text-brand-primary hover:bg-purple-200 transform active:scale-95 transition-all duration-200 group ring ring-brand-primary shadow-lg hover:shadow-xl backdrop-blur-sm"
        >
          <span>Drop a Hello</span>
          <span>👋</span>
        </a>
      </div>
    </TheSection>
  </div>
</template>
