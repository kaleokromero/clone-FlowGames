<template>
  <div class="sticky">
    <ul v-for="(item, id) in list" :key="id">
      <slot>
        <li style="list-style-type:square; padding-top: 8px; font-weight: 800; font-size: 12px;">
          {{ item.name }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped>
/* .teste {
  font-family: 'Gill Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
  line-height: 50%;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  padding: 10px 0 25px 10px;
  position: relative;
  vertical-align: sub;
} */
.submenu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background: #a200ff;
  padding: 21px 26px 28px 26px;
  box-shadow: 0 8px 17px 7px rgba(0, 0, 0, 0.24);
  transition: opacity 0.2s;
}

.submenu:hover,
.submenu[v-show='true'] {
  opacity: 1;
}
li::marker {
  color: yellow;
}
</style>
