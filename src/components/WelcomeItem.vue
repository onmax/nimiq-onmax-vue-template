<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-32 gap-y-16" px-32 class="prose">
    <i :class="icon" row-span-2 text-32 opacity-80 />
    <h3 leading-none>
      <slot name="heading" />
    </h3>
    <slot />
  </div>
</template>
