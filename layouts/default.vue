<template>
    <div class="flex flex-col h-screen">
    <AppHeader class="fixed w-full top-0 shadow-md z-10"/>
    <div class="grow">
      <slot />
    </div>
    <AppFooter/>
  </div>
</template>