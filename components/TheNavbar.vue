<script setup lang="ts">
import {
  MoonIcon,
  SunIcon,
  UserCircleIcon,
  BookmarkIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid/esm";

const isScrolled = useState(() => false);
const isDark = useDark({
  selector: "body",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  isScrolled.value = window.scrollY > 96;
}
function scrollToElement(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}
</script>

<template>
  <div
    :class="[
      'bg-backgroundPrimary/50 navbar navbar-sticky navbar-glass shadow-none py-2 h-16',
    ]"
  >
    <div class="mx-auto flex w-full max-w-7xl">
      <div class="navbar-start">
        <div class="navbar-item">
          <a
            :class="[
              'block rounded-md p-1 border-2 border-slate-500 text-shadow font-bold',
              { 'bg-content2': !isDark },
            ]"
            @click.prevent="scrollToElement('cover')"
            href="#cover"
            aria-label="Website Logo"
          >
            <Logo class="h-8 w-8" />
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <SideNav class="md:hidden">
          <NavItem @click.prevent="scrollToElement('about')" href="#about">
            <UserCircleIcon class="h-6" />
            About
          </NavItem>
          <NavItem
            @click.prevent="scrollToElement('experience')"
            href="#experience"
          >
            <DocumentTextIcon class="h-6" />
            Experience
          </NavItem>
          <NavItem
            @click.prevent="scrollToElement('projects')"
            href="#projects"
          >
            <BookmarkIcon class="h-6" />
            Projects
          </NavItem>
          <NavItem @click.prevent="scrollToElement('contact')" href="#contact">
            <EnvelopeIcon class="h-6" />
            Contact
          </NavItem>
          <ClientOnly>
            <button
              class="dropdown-item flex flex-row gap-2"
              @click.prevent="toggleDark()"
              href="#"
            >
              <SunIcon v-if="isDark" class="h-6 text-slate-1000" />
              <MoonIcon v-else class="h-6 text-slate-1000" />
              <span>{{ isDark ? "Light" : "Dark" }} Mode</span>
            </button>
          </ClientOnly>
        </SideNav>

        <div class="hidden md:flex md:items-center">
          <a
            class="navbar-item text-sm"
            @click.prevent="scrollToElement('about')"
            href="#about"
          >
            About</a
          >
          <a
            class="navbar-item text-sm"
            @click.prevent="scrollToElement('experience')"
            href="#experience"
          >
            Experience
          </a>
          <a
            class="navbar-item text-sm"
            @click.prevent="scrollToElement('projects')"
            href="#projects"
          >
            Projects
          </a>
          <a
            class="navbar-item text-sm"
            @click.prevent="scrollToElement('contact')"
            href="#contact"
          >
            Contact
          </a>
          <ClientOnly>
            <div class="navbar-item">
              <button
                :class="[
                  'btn rounded-md p-2 h-auto',
                  {
                    'bg-amber-400 text-black': isDark,
                    'bg-indigo-400 text-white': !isDark,
                  },
                ]"
                @click="toggleDark()"
                aria-label="Toggle Color Scheme"
              >
                <SunIcon v-motion-roll-left v-if="isDark" class="h-5" />
                <MoonIcon v-motion-roll-left v-else class="h-5" />
              </button>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
