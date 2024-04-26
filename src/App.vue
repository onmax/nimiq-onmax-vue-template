<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center" max-h-screen px-32 py-40 max-w-700 mx-auto>
    <!-- Change the color of the logo for dark mode! -->
    <div i-nimiq:logos-nimiq-vertical dark:i-nimiq:logos-nimiq-white-vertical text-90 />

    <div>
      <h1 font-bold text-32>
        You did it!
      </h1>

      <p text-18>
        You've successfully created a project with
        <a href="https://vuejs.dev/" target="_blank" rel="noopener">Vue 3</a> +
        <a href="https://onmax.github.io/nimiq-developer-center/" target="_blank" rel="noopener">Nimiq</a>. What's next?
      </p>

      <nav flex="~ gap-32 wrap" mt-12>
        <RouterLink to="/" arrow>
          Home
        </RouterLink>
        <RouterLink to="/about" arrow>
          About
        </RouterLink>

        <button pill-blue pill-sm ml-auto @click="() => toggleDark()">
          Change theme
        </button>
      </nav>
    </div>
  </header>

  <main max-w-700 mx-auto pt-64 pb-92>
    <RouterView />
  </main>
</template>
