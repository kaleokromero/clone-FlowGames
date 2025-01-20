<template>
  <header class="bg-[#131313D9] backdrop-blur-sm">
    <div class="container mx-auto w-7/12 flex items-center justify-between gap-5">
      <img src="../assets/img/header-image.jpg" alt="header-image" class="hover:scale-110 duration-300 w-24" />
      <div class="grow">
        <div class="flex justify-between border-b border-[#8c8c8c] py-3 mb-5">
          <div>
            <a v-for="(icon, id) in social_medias" :key="id" :href="icon.link"
              class="p-2 text-yellow-300 hover:text-yellow-400">
              <font-awesome :icon="[icon.prefix, icon.picture]" class="h-5 w-7" />
            </a>
          </div>
          <div class="flex items-center">
            <input v-if="searchBar" type="text" class="bg-transparent text-lg font-normal text-[#8c8c8c]"
              placeholder="O que você procura?" />
            <button @click="searchBar = !searchBar" class="px-5 pt-1">
              <font-awesome icon="magnifying-glass" class="text-yellow-300 h-4 w-4" />
            </button>
          </div>
        </div>
        <div class="flex gap-4">
          <span v-for="(item, id) in menu" :key="id" class="teste flex" @mouseenter="item.submenu = true"
            @mouseleave="item.submenu = false">
            <a :href="item.route"> {{ item.route }}

            </a>
            <button v-if="item.children_routes != null" class="ml-2">
              <div v-if="item.submenu === true">
                <TheSubMenu :list="item.children_routes" :links="item.children_routes.route" class="submenu" />
              </div>

              <font-awesome icon="chevron-down" class="text-yellow-300 w-5" />
              <span
                class="absolute bottom-0 left-0 w-full h-0 bg-yellow-300 transition-all duration-200 ease-out group-hover:h-1"></span>
            </button>
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
          { name: 'PREVIEWS', route: 'https://www.flowgames.gg/categorias/especiais/previews/' },
          { name: 'DICAS', route: 'https://www.flowgames.gg/categorias/especiais/dicas/' },
          { name: 'LISTAS', route: 'https://www.flowgames.gg/categorias/especiais/listas/' },
          { name: 'ENTREVISTAS', route: 'https://www.flowgames.gg/categorias/especiais/entrevistas/' }
        ]
      },
      {
        route: 'FLOW CARDS',
        children_routes: [
          { name: 'CARDS', route: 'https://www.flowgames.gg/categorias/flow-cards/card_games/' },
          { name: 'SPORTS CARDS', route: 'https://www.flowgames.gg/categorias/flow-cards/sports_cards/' },
          { name: 'TCG', route: 'https://www.flowgames.gg/categorias/flow-cards/tcf/' }
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
    searchBar: false,
    submenu: false
  }),
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
