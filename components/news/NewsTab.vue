<template>
    <div>
      <div class="flex text-2xl font-extrabold">
        <font-awesome icon="bolt-lightning" class="py-1 pr-3" />
        <h2 class="uppercase">{{ title }}</h2>
      </div>
      <!-- conteúdo  -->
      <div class="grid grid-cols-6 container pt-5" :class="bottomBorder ? 'border-b-2 border-[#8c8c8c];' : ''">
        <div class="col-span-4">
          <div>
            <slot name="mainNews"></slot>
          </div>
          <slot name="learnMore"></slot>
        </div>
        <div class="col-span-2" >
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
      bottomBorder: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style></style>
  