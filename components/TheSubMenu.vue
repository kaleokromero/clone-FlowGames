<template>
  <div class="sticky">
    <ul v-for="(item, id) in list" :key="id">
      <slot>
        <li style="
            list-style-type: square;
            padding-top: 8px;
            font-weight: 800;
            font-size: 12px;
          ">
          <a href="item.name">{{ item.name }}</a>
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      requirered: true
    },
    links: {
      type: String,
      requirered: true
    }
  }
}
</script>

<style scoped>
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
