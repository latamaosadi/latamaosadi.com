<template>
  <div class="min-h-screen overflow-x-hidden">
    <TheNavbar />
    <div class="max-w-6xl w-full mx-auto px-6 md:px-12">
      <slot />
    </div>
    <TheFooter class="mt-20" />
    <svg
      width="0"
      height="0"
      viewBox="0 0 278 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="polygon">
          <path
            d="M117.212 7.15185C130.462 -1.45466 147.538 -1.45467 160.788 7.15184L259.352 71.1711C270.711 78.5485 277.564 91.1724 277.564 104.716V241.284C277.564 254.828 270.711 267.452 259.352 274.829L160.788 338.848C147.538 347.455 130.462 347.455 117.212 338.848L18.6477 274.829C7.28952 267.452 0.435928 254.828 0.435928 241.284V104.716C0.435928 91.1724 7.28951 78.5485 18.6477 71.1711L117.212 7.15185Z"
            fill="#D9D9D9"
          />
        </mask>
      </defs>
    </svg>
  </div>
</template>
