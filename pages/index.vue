<template>
  <div>
    <div class="bg-[url(/assets/img/nintendo.png)]">
      <div class="bg-gradient-to-t from-black to-transparent">
        <!-- Card Nottícias capa -->
        <TheNewsImage
          borderColor="#fff"
          borderWidth="2"
          class="w-7/12 py-5 mx-auto"
        >
          <div class="text-white w-4/6">
            <h2 class="text-[#fef500] font-bold bg-black w-fit rounded p-2">
              TESTE
            </h2>
            <h1 class="font-bold text-5xl">
              TITULO BOM MATERIA BOA TEXTO LONGO
            </h1>
            <h3 class="text-lg py-5">
              Um bom subtitulo para chamar atenção vem aqui, mas ainda em
              desencolcivimenti
            </h3>
          </div>
          <div class="w-4/6 border-t border-red-500 text-white">
            <p class="font-semibold">
              Por
              <span class="underline mr-4">Kaleo</span>
              as 10:50:01 07//07/2002
            </p>
          </div>
        </TheNewsImage>

        <!-- Destaques -->
        <div
          class="backdrop-blur-md bg-gradient-to-t from-black/20 from-10% via-black/40 via-20% to-white/40 mt-12"
        >
          <div class="mx-auto w-10/12 py-5 pr-10">
            <div class="flex justify-around font-bold text-2xl">
              <h2 class="text-white">
                <font-awesome icon="bolt-lightning" class="mr-3" />
                MAIS DESTAQUES
              </h2>
              <div class="flex gap-2 w-3/12 h-1/3 text-lg">
                <div
                  v-for="(button, id) in buttons"
                  :key="id"
                  class="text-nowrap"
                >
                  <button
                    class="shadow-md rounded py-2 px-5 uppercase"
                    :class="[
                      submenu == button.name
                        ? 'bg-purple-700 text-[#fef500]'
                        : 'bg-black/40 text-white/40'
                    ]"
                    @click="submenu = button.name"
                  >
                    <font-awesome
                      :icon="[button.prefix, button.icon]"
                      class="px-2"
                    />
                    {{ button.name }}
                  </button>
                </div>
              </div>
            </div>

            <ul class="p-5 list-disc text-white">
              <TheHighligth
                :backgroundImage="background"
                class="mx-auto w-[13%] h-48"
              >
                <div class="text-white w-fit">
                  <h2
                    class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold"
                  >
                    TESTE
                  </h2>
                  <h1 class="font-bold text-xl">
                    TITULO BOM MATERIA BOA TEXTO LONGO
                  </h1>
                </div>
              </TheHighligth>

              <div class="mx-auto w-1/12">
                <li style="list-style-type: square">
                  <p>por <span class="underline mr-2">kaleo</span> 20:99</p>
                </li>
              </div>
            </ul>
          </div>
          <p class="text-center text-xl font-extrabold text-white py-5">
            Viva o hype com a gente! Notícias, eventos, reviews, dicas, esportes
            e muito mais!
          </p>
        </div>
      </div>
    </div>

    <!-- proxima seção -->

    <div
      class="grid grid-cols-6 container justify-items-start mx-auto py-10 w-7/12"
    >
      <!-- ultimas noticias -->

      <div class="col-span-4">
        <div class="flex py-4 text-black text-2xl font-extrabold">
          <font-awesome icon="bolt-lightning" class="py-1 pr-3" />
          <h2>ÚLTIMAS NOTÍCIAS</h2>
        </div>
        <div
          v-for="(news, id) in newsBlock"
          :key="id"
          class="flex items-center py-5"
        >
          <div class="w-6/12 h-11/12 flex-shrink-0">
            <TheNewsImage :backgroundImage="news?.fimg_url[3]" />
          </div>
          <div class="pl-4">
            <h4
              v-html="news?.categories[0]?.name"
              class="text-purple-700 font-extrabold text-sm"
            />
            <h3 v-html="news?.title?.rendered" class="font-bold text-xl"></h3>
            <div class="border-t border-[#8c8c8c]">
              <p class="font-semibold">
                Por
                <span class="underline mr-4">{{
                  news.author_meta.display_name
                }}</span>
                as {{ news.date }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center py-10">
          <button
            class="rounded bg-purple-600 shadow-md p-3 text-white font-bold"
          >
            VER MAIS NOTÍCIAS
            <font-awesome icon="arrow-right" class="px-2 w-3" />
          </button>
        </div>
      </div>

      <!-- reviews -->

      <div class="col-span-2 p-4 border-l-2 border-[#8c8c8c]/30">
        <div class="pl-4">
          <div class="pb-10">
            <div class="flex text-black text-2xl font-extrabold">
            <font-awesome icon="bolt-lightning" class="py-1 px-3" />
            <h2>REVIEWS</h2>
          </div>
          <div
            v-for="(news, id) in block1"
            :key="id"
            class="flex items-center py-5"
          >
            <div class="w-6/12 h-11/12 flex-shrink-0">
              <TheNewsImage :backgroundImage="news?.fimg_url[3]" />
            </div>
            <div class="pl-4">
              <h4
                v-html="news?.categories[0]?.name"
                class="text-purple-700 font-extrabold text-sm"
              />
              <h3 v-html="news?.title?.rendered" class="font-bold text-xl"></h3>
            </div>
          </div>
          </div>
          

          <div class="bg-repeat-x py-10" :style="{backgroundImage: `url(${patternDiv})`}" ></div>
          
          <div class="flex text-black text-2xl font-extrabold">
            <font-awesome icon="bolt-lightning" class="py-1 px-3" />
            <h2>AS MAIS LIDAS DA SEMANAS</h2>
          </div>
          <div
            v-for="(news, id) in block2"
            :key="id"
            class="flex items-center py-5"
          >
            <div class="w-6/12 h-11/12 flex-shrink-0">
              <TheNewsImage :backgroundImage="news?.fimg_url[3]" />
            </div>
            <div class="pl-4">
              <h4
                v-html="news?.categories[0]?.name"
                class="text-purple-700 font-extrabold text-sm"
              />
              <h3 v-html="news?.title?.rendered" class="font-bold text-xl"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- podcasts e videos -->

    <div class="bg-[url(/assets/img/videosBg.jpg)]">
        <TheNewsTab title="podcasts e videos" titleColor="white" class="container mx-auto w-7/12 py-10" >
      <template #mainNews>
        <div class="p-3">
          <TheHighligth :backgroundImage="background" class="h-36 w-3/12" />
          <h4 class="py-4 font-bold text-xl text-white">
            Teste! teste teste teste
          </h4>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-5 border-t-2 border-white/50">
          <a href="youtube.com" class="flex text-white p-2">
          <font-awesome
            :icon="['fab', 'youtube']"
            class="h-5 pt-1 text-[#fef500]"
          />
          <span class="px-3 text-xl font-extrabold"
            >ACESSE NOSSO CANAL NO YOUTUBE</span
          >
          <font-awesome icon="arrow-right" class="h-5 w-4 pt-1" />
        </a>
        </div>
      </template>
      <template #sideNews>
        <div class="p-4 flex">
          <TheHighligth :backgroundImage="background" class="h-20 w-5/12" />
          <h4 class="pl-4 font-bold text-xl text-white">
            Teste! teste teste teste
          </h4>
        </div>
      </template>
    </TheNewsTab>
    </div>
    <!--flow cards  -->
    <TheNewsTab title="flow cards" class="container mx-auto w-7/12 py-10" >
      <template #mainNews>
        <div class="p-3">
          <TheHighligth :backgroundImage="background" class="h-36 w-3/12" />
          <h4 class="py-4 font-bold text-xl text-black">
            Teste! teste teste teste
          </h4>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-5 border-t-2 border-b-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="p-3">
            <span class="text-black text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews> </template>
    </TheNewsTab>
    <!-- previews -->
    <TheNewsTab title="previews" class="container mx-auto w-7/12 py-10" >
      <template #mainNews>
        <div class="p-3">
          <TheHighligth :backgroundImage="background" class="h-36 w-3/12" />
          <h4 class="py-4 font-bold text-xl text-black">
            Teste! teste teste teste
          </h4>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-5 border-t-2 border-b-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="p-3">
            <span class="text-black text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews> </template>
    </TheNewsTab>
    <!-- dicas -->
    <TheNewsTab title="dicas" class="container mx-auto w-7/12 py-10" >
      <template #mainNews>
        <div class="p-3">
          <TheHighligth :backgroundImage="background" class="h-36 w-3/12" />
          <h4 class="py-4 font-bold text-xl text-black">
            Teste! teste teste teste
          </h4>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-5 border-t-2 border-b-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="p-3">
            <span class="text-black text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews> </template>
    </TheNewsTab>
  </div>
</template>

<script>
import axios from 'axios'
import background from '@/assets/img/teste.jpg'
import transparentBg from '@/assets/img/box-news.webp'
import patternDiv from '@/assets/img/pattern-div.png'


export default {
  data: () => ({
    background,
    transparentBg,
    patternDiv,
    buttons: [
      { name: 'games', prefix: 'fa', icon: 'gamepad' },
      { name: 'esports', prefix: 'fa', icon: 'trophy' },
      { name: 'cultura pop', prefix: 'fa', icon: 'film' }
    ],
    submenus: ['games', 'esports', 'cultura pop'],
    newsBlock: [],
    block1: {},
    block2: {},
    block3: {},
    submenu: 'games'
  }),
  methods: {
    async loadNews () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=1`
      )
      this.newsBlock = response.data
      console.log('loaded items-----', this.newsBlock)
    },
    async loadBlock () {
      const config = useRuntimeConfig()
      for (let i = 0; i < 3; i++) {
        let response = await axios.get(`${config.public.apiUrl}/categories`)
        console.log('ids sao----', response.data[i].id);
        
        this[`block${i + 1}`] = (
          await axios.get(
            `${config.public.apiUrl}/posts?categorie=${response.data[i].id}&per_page=4&page=1`
          )
        ).data
        console.log('block 1---', this.block1)
        console.log('block 2---', this.block2)
        console.log('block 3---', this.block3)
      }
    }
  },
  mounted () {
    this.loadNews()
    this.loadBlock()
  }
}
</script>

<style>
.mask1 {
  -webkit-mask-image: url('@/assets/img/bg123.svg');
  mask-image: url('@/assets/img/bg123.svg');
  mask-repeat: no-repeat;
}

ul li::marker {
  color: yellow;
}
.fotinho {
  background: url('/assets/img/pattern-div.png') top left repeat-x;
  height: 23px;
}
</style>
