<template>
  <el-button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center px-5 py-3 m-a text-base font-medium', 
      'text-center text-purpur rounded-lg hover:bg-purpur-light hover:text-purpur focus:bg-purpur-dark focus:text-white',
    ]"
  >
    <div class="">
      <slot name="icon" />
    </div>

    <slot />
  </el-button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
</script>
