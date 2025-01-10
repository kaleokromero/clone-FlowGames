<template>
    <div class="flex flex-col h-screen">
    <AppHeader class="sticky"/>
    <div class="grow">
      <slot />
    </div>
    <TheFooter/>
  </div>
</template>