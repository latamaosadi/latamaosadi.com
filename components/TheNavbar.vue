<script setup lang="ts">
import {
  MoonIcon,
  SunIcon,
  UserCircleIcon,
  BookmarkIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";

const theme = useTheme();
const isScrolled = useState(() => false);
const isDark = useIsDark();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function toggleTheme() {
  theme.value = isDark.value ? "light" : "dark";
}
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
      'border-b bg-backgroundPrimary/70 navbar navbar-sticky navbar-glass shadow-none py-2 h-20',
      isScrolled ? 'border-slate-700' : 'border-transparent',
    ]"
  >
    <div class="mx-auto flex w-full max-w-7xl">
      <div class="navbar-start">
        <a
          class="navbar-item font-sans text-purple-1000 text-2xl p-1 border border-gray-900"
          @click.prevent="scrollToElement('cover')"
          href="#cover"
        >
          <Logo class="h-10 w-10" />
        </a>
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
          <NavItem
            class="dropdown-item flex flex-row gap-2"
            @click="toggleTheme"
          >
            <SunIcon v-if="isDark" class="h-6 text-slate-1000" />
            <MoonIcon v-else class="h-6 text-slate-1000" />
            <span>{{ isDark ? "Light" : "Dark" }} Mode</span>
          </NavItem>
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
          <button class="navbar-item" @click="toggleTheme">
            <SunIcon v-if="isDark" class="h-6 text-slate-1000" />
            <MoonIcon v-else class="h-6 text-slate-1000" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
