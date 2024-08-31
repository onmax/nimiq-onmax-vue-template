<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center" mx-auto max-h-screen max-w-700 px-32 py-40>
    <!-- Change the color of the logo for dark mode! -->
    <div i-nimiq:logos-nimiq-vertical text-90 dark:i-nimiq:logos-nimiq-white-vertical />

    <div>
      <h1 text-32 font-bold>
        You did it!
      </h1>

      <p text-18>
        You've successfully created a project with
        <a href="https://vuejs.dev/" target="_blank" rel="noopener">Vue 3</a> +
        <a href="https://onmax.github.io/nimiq-developer-center/" target="_blank" rel="noopener">Nimiq</a>. What's next?
      </p>

      <nav flex="~ gap-32 wrap" mt-12>
        <RouterLink to="/" nq-arrow>
          Home
        </RouterLink>
        <RouterLink to="/about" nq-arrow>
          About
        </RouterLink>

        <button nq-pill-sm ml-auto nq-pill-blue @click="() => toggleDark()">
          Change theme
        </button>
      </nav>
    </div>
  </header>

  <main mx-auto max-w-700 pb-92 pt-64>
    <RouterView />
  </main>
</template>
