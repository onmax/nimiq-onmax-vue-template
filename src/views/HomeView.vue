<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue'
</script>

<template>
  <WelcomeItem icon="i-nimiq:icons-lg-browsermesh">
    <template #heading>
      Documentation
    </template>

    <p class="text-neutral-800">
      Nimiq's
      <a href="https://onmax.github.io/nimiq-developer-center/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:nodes" mt-40>
    <template #heading>
      Web Client
    </template>

    <p class="text-neutral-800">
      Ready to connect to the network. You can check the <a href="https://onmax.github.io/nimiq-developer-center/build/web-client/index" target="_blank" rel="noopener">web client</a> to see the network in action.
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:tools" mt-40>
    <template #heading>
      Tooling
    </template>

    <p class="text-neutral-800">
      Nimiq's
      <a href="https://onmax.github.io/nimiq-developer-center/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:icons-lg-palette" mt-40>
    <template #heading>
      UI
    </template>

    <p class="text-neutral-800">
      Preinstalled with <a href="https://onmax.github.io/nimiq-ui/" target="_blank" rel="noopener">Nimiq CSS</a> and Nimiq Icons. For example using <code>
        &lt;div class="i-nimiq:spinner"&gt;&lt;/div&gt;
      </code>  will render <span class="i-nimiq:spinner" inline-block />
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:icons-lg-high-five" mt-40>
    <template #heading>
      You are ready to go!
    </template>

    <p class="text-neutral-800">
      If you have any questions, feel free to ask in GitHub, Telegram group or Nimiq Discord.
    </p>
  </WelcomeItem>
</template>
