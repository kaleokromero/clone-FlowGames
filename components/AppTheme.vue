<template>
  <button
    class="rounded-2xl bg-[#555] dark:bg-white"
    @click="setColorTheme($colorMode.preference == 'light' ? 'dark' : 'light')"
  >
    <font-awesome
      icon="moon"
      class="px-5 py-4 text-white dark:text-purple-500 font-extrabold text-3xl"
    />
  </button>
</template>

<script>
export default {
  methods: {
    setColorTheme(newTheme) {
        let colorMode = useColorMode()
        colorMode.preference = newTheme
    }
  }
}
</script>
