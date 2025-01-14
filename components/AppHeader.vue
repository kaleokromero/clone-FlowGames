<template>
  <header class="bg-[#131313D9]">
    <div class="container mx-auto w-7/12 flex items-center justify-between gap-5">
      <img
        src="../assets/img/header-image.jpg"
        alt="header-image"
        class="hover:scale-110 duration-300 w-24"
      />
      <div class="grow">
        <div class="flex justify-between border-b border-[#8c8c8c] py-3 mb-5">
          <div>
            <a
              v-for="(icon, id) in social_medias"
              :key="id"
              :href="icon.link"
              class="p-2 text-yellow-300 hover:text-yellow-400"
            >
              <font-awesome
                :icon="[icon.prefix, icon.picture]"
                class="h-5 w-7"
              />
            </a>
          </div>
          <div class="flex items-center">
            <input
              v-if="searchBar"
              type="text"
              class="bg-transparent border text-lg font-normal text-[#8c8c8c]"
              placeholder="O que você procura?"
            />
            <button @click="searchBar = !searchBar" class="px-5 pt-1">
              <font-awesome
                icon="magnifying-glass"
                class="text-yellow-300 h-4 w-4"
              />
            </button>
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <span v-for="(item, id) in menu" :key="id" class="teste">
            <a href="menu"> {{ item.route }}
            <button
              v-if="item.children_routes != null"
              class="ml-2"
              @mouseenter="submenu = !submenu"
            >
            <div v-if="submenu === true">
              <TheSubMenu
                :list="item.children_routes"
                class="submenu"
              />
            </div>
              
              <font-awesome icon="chevron-down" class="text-yellow-300 w-5" />
              <span
                class="absolute bottom-0 left-0 w-full h-0 bg-yellow-300 transition-all duration-200 ease-out group-hover:h-1"
              ></span>
            </button>
          </a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    social_medias: [
      { prefix: 'fab', picture: 'youtube', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'instagram', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'tiktok', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'linkedin', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'x-twitter', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'threads', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'spotify', link: 'https://youtube.com' },
      { prefix: 'fab', picture: 'discord', link: 'https://youtube.com' },
      { prefix: 'fas', picture: 'bolt-lightning', link: 'https://youtube.com' },
      { prefix: 'fas', picture: 'cart-shopping', link: 'https://youtube.com' },
      { prefix: 'fas', picture: 'cloud', link: 'https://youtube.com' },
      { prefix: 'fas', picture: 'dollar-sign', link: 'https://youtube.com' }
    ],
    menu: [
      {
        route: 'NOTÍCIAS',
        children_routes: null
      },
      {
        route: 'REVIEWS',
        children_routes: null
      },
      {
        route: 'GAMES',
        children_routes: null
      },
      {
        route: 'ESPORTS',
        children_routes: null
      },
      {
        route: 'CULTURA POP',
        children_routes: null
      },
      {
        route: 'LOW GAMES',
        children_routes: null
      },
      {
        route: 'ESPECIAIS',
        children_routes: [
          { name: 'PREVIEWS' },
          { name: 'DICAS' },
          { name: 'LISTAS' },
          { name: 'ENTREVISTAS' }
        ]
      },
      {
        route: 'FLOW CARDS',
        children_routes: [
          { name: 'CARDS' },
          { name: 'SPORTS CARDS' },
          { name: 'TCG' }
        ]
      },
      {
        route: 'FLOW STORE',
        children_routes: null
      },
      {
        route: 'FLOW PING',
        children_routes: null
      }
    ],
    searchBar: true,
    submenu: false
  }),
  methods: {
    toggleSubmenu (index) {
      this.submenu = this.submenu === index ? null : index
    }
  }
}
</script>

<style>
.header-animation {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fef500;
  transition: height 0.3s ease;
}
.hover\:header-animation:hover::after {
  height: 4px;
}
</style>
