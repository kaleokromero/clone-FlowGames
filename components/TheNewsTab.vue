<template>
  <div>
    <div class="flex text-black text-2xl font-extrabold">
      <font-awesome icon="bolt-lightning" class="py-1 px-3" />
      <h2 class="uppercase">{{ title }}</h2>
    </div>
    <!--  -->
    <div class="grid grid-cols-6 container pt-5">
      <div class="col-span-4">
        <div>
            <slot name="mainNews"></slot>
        </div>
        <div class="flex py-5 border-t-2 border-b-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="p-3">
            <span class="text-black text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </div>
      <div class="col-span-2 border-l-2 border-b-2 border-[#8c8c8c]/30">
        <slot name="sideNews"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style></style>
