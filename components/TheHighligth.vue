<template>
  <div
    :style="{
      background: backgroundImage ? `url(${backgroundImage})` : 'transparent',
      backgroundSize: 'cover',
      border: borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none' ,
      position: 'relative'
    }"
  >
    <div  class="absolute inset-10 flex flex-col justify-end">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String
    },
    borderColor: {
      type: String,
      default: null 
    },
    borderWidth: {
      type: Number,
      default: 1
    }
  }
}
</script>
