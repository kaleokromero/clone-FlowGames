<template>
    <div class="flex flex-col h-screen">
    <AppHeader class="sticky shadow-md z-10"/>
    <div class="grow">
      <slot />
    </div>
    <TheFooter/>
  </div>
</template>