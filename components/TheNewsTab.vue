<template>
  <div>
    <div class="flex text-2xl font-extrabold" :style="{color: titleColor}">
      <font-awesome icon="bolt-lightning" class="py-1 px-3" />
      <h2 class="uppercase">{{ title }}</h2>
    </div>
    <!--  -->
    <div class="grid grid-cols-6 container pt-5">
      <div class="col-span-4">
        <div>
            <slot name="mainNews"></slot>
        </div>
        <slot name="learnMore"></slot>
      </div>
      <div class="col-span-2 border-l-2 border-[#8c8c8c]/30">
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
    titleColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style></style>
