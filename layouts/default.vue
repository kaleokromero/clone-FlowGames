<template>
  <div class="flex flex-col h-screen">
    <AppHeader class="fixed w-full top-0 shadow-md z-10" />
    <div class="grow">
      <slot />
    </div>
    <AppTheme class="fixed bottom-2 right-2"/>
    <AppFooter />
  </div>
</template>
