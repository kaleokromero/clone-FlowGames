<template>
    <div>
      <div v-if="category == 'games'" class="flex mx-auto">
        <ul
          v-for="(news, id) in games"
          :key="id"
          class="p-5 list-disc text-white"
        >
          <NewsImage
            :backgroundImage="news?.fimg_url[3]"
            shape="square"
            @click="navigateTo(news.link, {external: true})"
            class="mx-auto w-64 h-48 cursor-pointer"
          >
            <div class="text-white inset-6 inset-x-8">
              <h2
                class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold"
              >
                {{ news.categories[0].name }}
              </h2>
              <h1 class="font-bold text-xl line-clamp-3">
                {{ news.title.rendered }}
              </h1>
            </div>
          </NewsImage>
  
          <div class="ms-5">
            <li style="list-style-type: square">
              <p
                class="text-nowrap font-semibold list-item marker:text-square marker:text-[#fef500]"
              >
                Por
                <span class="underline mr-4 cursor-pointer">{{
                  news.author_meta.display_name
                }}</span>
                {{ formatDate(news.date) }} as {{ formatHours(news.date) }}
              </p>
            </li>
          </div>
        </ul>
      </div>
  
      <div v-else-if="category == 'esports'" class="flex mx-auto">
        <ul
          v-for="(news, id) in esports"
          @click="navigateTo(news.link, {external: true})"
          :key="id"
          class="p-5 list-disc text-white"
        >
          <NewsImage
            :backgroundImage="news?.fimg_url[3]"
            shape="square"
            class="mx-auto w-64 h-48"
          >
            <div class="text-white w-fit">
              <h2
                class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold"
              >
                {{ news.categories[2].name }}
              </h2>
              <h1 class="font-bold text-xl">
                {{ news.title.rendered }}
              </h1>
            </div>
          </NewsImage>
  
          <div class="ms-5">
            <li style="list-style-type: square">
              <p
                class="text-nowrap font-semibold list-item marker:text-square marker:text-[#fef500]"
              >
                Por
                <span class="underline mr-4 cursor-pointer">{{
                  news.author_meta.display_name
                }}</span>
                {{ formatDate(news.date) }} as {{ formatHours(news.date) }}
              </p>
            </li>
          </div>
        </ul>
      </div>
  
      <div v-else-if="category == 'cultura pop'" class="flex mx-auto">
        <ul
          v-for="(news, id) in popCulture"
          @click="navigateTo(news.link, {external: true})"
          :key="id"
          class="p-5 list-disc text-white"
        >
          <NewsImage
            shape="square"
            :backgroundImage="news?.fimg_url[3]"
            class="mx-auto w-64 h-48"
          >
            <div class="text-white w-fit">
              <h2
                class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold"
              >
                {{ news.categories[1].name }}
              </h2>
              <h1 class="font-bold text-xl">
                {{ news.title.rendered }}
              </h1>
            </div>
          </NewsImage>
  
          <div class="ms-5">
            <li style="list-style-type: square">
              <p
                class="text-nowrap font-semibold list-item marker:text-square marker:text-[#fef500]"
              >
                Por
                <span class="underline mr-4 cursor-pointer">{{
                  news.author_meta.display_name
                }}</span>
                {{ formatDate(news.date) }} as {{ formatHours(news.date) }}
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import background from '@/assets/img/teste.jpg'
  import axios from 'axios'
  
  export default {
    props: {
      category: {
        type: String,
        required: true,
        default: 'games'
      }
    },
    setup () {
      const { formatDate, formatHours } = useDateTime()
      return { formatDate, formatHours }
    },
    data: () => ({
      background,
      games: {},
      esports: {},
      popCulture: {}
    }),
    methods: {
      async loadGames () {
        const config = useRuntimeConfig()
        const response = await axios.get(
          `${config.public.apiUrl}/posts?categories=1&per_page=3`
        )
        this.games = response.data
        return console.log('yeyer------', this.games)
      },
      async loadEsports () {
        const config = useRuntimeConfig()
        const response = await axios.get(
          `${config.public.apiUrl}/posts?categories=37&per_page=3`
        )
        this.esports = response.data
      },
      async loadCulture () {
        const config = useRuntimeConfig()
        const response = await axios.get(
          `${config.public.apiUrl}/posts?categories=197&per_page=3`
        )
        this.popCulture = response.data
        console.log('culturaaaa-', this.popCulture);
        
      }
    },
    mounted () {
      this.loadGames()
      this.loadEsports()
      this.loadCulture()
    }
  }
  </script>
  