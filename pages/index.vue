<template>
  <div class="dark:bg-[#272828]">
    <div
      v-for="(news, index) in mainNews"
      :key="index"
      v-show="currentNews == index"
      :style="{
        backgroundImage: `url(${news?.fimg_url[3]})`,
        backgroundSize: 'cover'
      }"
    >
      <div class="bg-gradient-to-t from-black to-transparent pt-44">
        <!-- Card Nottícias capa -->
        <NewsImage
          borderColor="white"
          :borderWidth="2"
          class="w-7/12 mx-auto"
        >
          <div class="flex flex-row">
            <div class="flex flex-col relative">
              <div class="text-white w-4/6">
                <h2 class="text-[#fef500] font-bold bg-black w-fit rounded p-2">
                  {{ news?.categories[0]?.name }}
                </h2>
                <div
                  class="cursor-pointer"
                  @click="navigateTo(news.link, { external: true })"
                >
                  <h1 class="font-bold text-5xl line-clamp-3">
                    {{ news?.title?.rendered }}
                  </h1>
                  <div class="py-5">
                    <h3
                      v-html="news?.excerpt?.rendered"
                      class="text-lg line-clamp-2"
                    />
                  </div>
                </div>
              </div>
              <div class="w-5/6 border-t border-gray-500 text-white">
                <p class="font-semibold mt-2">
                  Por
                  <a class="underline mr-4 cursor-pointer">{{
                    news.author_meta.display_name
                  }}</a>
                  {{ formatDate(news.date) }} as {{ formatHours(news.date) }}
                </p>
              </div>
            </div>

            <div class="w-2/6 mt-4 flex items-end">
              <div class="flex items-center w-full text-white">
                <button @click="previousSlide()">
                  <font-awesome icon="arrow-left" class="pr-5" />
                </button>
                <button
                  v-for="(news, index) in mainNews"
                  :key="index"
                  @click="goToSlide(index)"
                  class="w-4/12 relative"
                >
                  <NewsImage
                    borderColor="#fef500"
                    :borderWidth="8"
                    :backgroundImage="news?.fimg_url[3]"
                    class="h-12 w-24"
                  />
                </button>
                <button @click="nextSlide()">
                  <font-awesome icon="arrow-right" class="pl-5" />
                </button>
              </div>
            </div>
          </div>
        </NewsImage>

        <!-- Destaques -->
        <div
          class="backdrop-blur-md bg-gradient-to-t from-black/20 dark:bg-gradient-to-b dark:from-white/40 from-10% via-black/40 dark:via-white/50 via-20% to-white/40 mt-12"
        >
          <div class="mx-auto w-10/12 p-10">
            <div class="flex justify-around font-bold text-2xl">
              <h2 class="text-white">
                <font-awesome icon="bolt-lightning" class="mr-3" />
                MAIS DESTAQUES
              </h2>
              <div class="flex gap-2 h-1/3 text-lg">
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
                      class="px-1"
                    />
                    {{ button.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <NewsTrending :category="submenu" class="w-7/12 mx-auto" />
          <p class="text-center  font-extrabold text-white py-5 dark:bg-[#222]">
            Viva o hype com a gente! Notícias, eventos, reviews, dicas, esportes
            e muito mais!
          </p>
        </div>
      </div>
    </div>

    <!-- proxima seção -->

    <div
      class="grid grid-cols-8 container justify-items-start mx-auto py-10 w-7/12"
    >
      <!-- ultimas noticias -->

      <div class="col-span-5">
        <div
          class="flex py-4 text-black dark:text-white text-2xl font-extrabold"
        >
          <font-awesome icon="bolt-lightning" class="py-1 pr-3" />
          <h2>ÚLTIMAS NOTÍCIAS</h2>
        </div>
        <div
          v-for="(news, index) in newsBlock"
          :key="index"
          class="flex items-center flex-shrink-0 py-7 dark:text-white"
        >
          <div v-if="index == 4 || index == 9" class="py-10">
            <div
              class="lg:h-96 lg:w-[700px] flex items-center"
              :style="{
                backgroundImage: `url(${news?.fimg_url[3]})`,
                backgroundSize: 'cover'
              }"
            >
              <NewsImage
                borderColor="#fff"
                :borderWidth="4"
                class="w-10/12 mx-auto flex flex-col bg-gradient-to-t from-black/30 via-black-60 to-transparent"
              >
                <div class="flex flex-col relative">
                  <div class="text-white w-4/6 pt-3">
                    <h2
                      class="text-[#fef500] font-bold bg-black w-fit rounded p-2 text-sm"
                    >
                      {{ news?.categories[0]?.name }}
                    </h2>
                    <div
                      class="cursor-pointer"
                      @click="navigateTo(news.link, { external: true })"
                    >
                      <h1 class="font-bold text-lg line-clamp-3">
                        {{ news?.title?.rendered }}
                      </h1>
                      <h3
                        v-html="news?.excerpt?.rendered"
                        class="text-sm line-clamp-2 py-1"
                      />
                    </div>
                  </div>
                  <div class="w-4/6 border-t border-gray-500 text-white">
                    <p class="font-semibold text-sm">
                      Por
                      <span class="underline mr-4 cursor-pointer">{{
                        news.author_meta.display_name
                      }}</span>
                      {{ formatDate(news.date) }} as
                      {{ formatHours(news.date) }}
                    </p>
                  </div>
                </div>
              </NewsImage>
            </div>
          </div>
          <div v-else class="flex grow w-[400px]">
            <div class="flex cursor-pointer">
              <NewsImage
                :backgroundImage="news?.fimg_url[3]"
                class="h-fit w-64 grow"
                @click="navigateTo(news.link, { external: true })"
              />
            </div>
            <div class="pl-4 h-9/12 container">
              <h4
                v-html="news?.categories[0]?.name"
                class="text-purple-700 font-extrabold text-sm"
              />
              <h3
                v-html="news?.title?.rendered"
                @click="navigateTo(news.link, { external: true })"
                class="font-bold text-xl overflow-hidden cursor-pointer"
              ></h3>
              <div
                class="py-2 border-t border-[#8c8c8c] list-[square] list-inside"
              >
                <p
                  class="text-nowrap font-semibold list-item marker:text-square marker:text-purple-700"
                >
                  Por
                  <span class="underline mr-4 cursor-pointer">{{
                    news.author_meta.display_name
                  }}</span>
                  {{ formatDate(news.date) }} as {{ formatHours(news.date) }}
                </p>
              </div>
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

      <div
        class="col-span-3 p-4 border-l-2 border-[#8c8c8c]/30 dark:text-white"
      >
        <div class="pl-4">
          <div class="pb-10">
            <div class="flex dark:text-white text-2xl font-extrabold">
              <font-awesome icon="bolt-lightning" class="py-1 px-3" />
              <h2>REVIEWS</h2>
            </div>
            <div
              v-for="(news, id) in block1"
              :key="id"
              @click="navigateTo(news.link, { external: true })"
              class="flex items-center grow py-7 px-2 cursor-pointer"
            >
              <div class="w-6/12 h-11/12 flex-shrink-0">
                <NewsImage :backgroundImage="news?.fimg_url[3]">
                  <div
                    class="relative lg:inset-8 lg:-inset-x-8 text-nowrap text-black"
                  >
                    <span class="bg-[#fef500] text-xs font-extrabold pr-2 py-1">
                      <font-awesome icon="bolt-lightning" class="pl-2" />
                      {{ news?.categories[0]?.name }}</span
                    >
                  </div>
                </NewsImage>
              </div>
              <div class="pl-4">
                <h4
                  v-html="news?.categories[1]?.name"
                  class="text-purple-700 font-extrabold text-sm"
                />
                <h3
                  v-html="news?.title?.rendered"
                  class="font-bold text-xl"
                ></h3>
              </div>
            </div>
          </div>

          <div
            class="bg-repeat-x py-10"
            :style="{ backgroundImage: `url(${patternDiv})`}"
          ></div>

          <div class="flex text-2xl font-extrabold text-nowrap w-7/12">
            <font-awesome icon="bolt-lightning" class="py-1 px-3" />
            <h2>AS MAIS LIDAS DA SEMANAS</h2>
          </div>
          <div
            v-for="(news, id) in block2"
            :key="id"
            @click="navigateTo(news.link, { external: true })"
            class="flex grow flex-row-reverse items-center py-7 px-2"
          >
            <div class="w-6/12 h-11/12 flex-shrink-0 flex grow cursor-pointer">
              <NewsImage
                :backgroundImage="news?.fimg_url[3]"
                shape="square"
                class="h-full w-full"
              />
            </div>
            <div class="pr-4">
              <h4
                v-html="news?.categories[0]?.name"
                class="text-purple-700 font-extrabold text-sm cursor-pointer"
              />
              <h3
                v-html="news?.title?.rendered"
                class="font-bold text-xl cursor-pointer"
              ></h3>
              <div class="border-t border-[#8c8c8c] list-[square] list-inside">
                <p
                  class="font-semibold list-item marker:text-square marker:text-purple-700"
                >
                  Por
                  <span class="underline mr-4 cursor-pointer">{{
                    news.author_meta.display_name
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- podcasts e videos -->

    <div class="bg-[url(/assets/img/videosBg.jpg)]">
      <LazyNewsTab
        title="podcasts e videos"
        class="mx-auto w-7/12 py-10 text-white"
      >
        <template #mainNews>
          <div class="flex h-64 pb-5">
            <div
              class="pr-3 pt-3 container flex-1 cursor-pointer w-1/3"
              v-for="(podcast, index) in block3"
              :key="index"
              @click="navigateTo(news.link, { external: true })"
            >
              <NewsImage
                :backgroundImage="podcast?.fimg_url[3]"
                class="h-44 relative"
              >
                <div class="relative lg:-inset-y-20 lg:-inset-x-5 text-nowrap">
                  <span
                    class="bg-black px-2 py-1 text-[#fef500] text-sm font-extrabold"
                  >
                    {{ podcast?.categories[2]?.name }}</span
                  >
                </div>
              </NewsImage>
              <div class="flex relative items-center py-2">
                <font-awesome
                  icon="circle-play"
                  class="py-1 h-8 text-[#fef500]"
                />
                <h4 class="font-bold text-lg px-1">
                  {{ podcast.title.rendered }}
                </h4>
              </div>
            </div>
          </div>
        </template>
        <template #learnMore>
          <div class="py-3 border-t-2 border-white/50">
            <a href="https://www.youtube.com" class="flex text-white py-2">
              <font-awesome
                :icon="['fab', 'youtube']"
                class="h-7 text-[#fef500]"
              />
              <span class="px-3 text-xl font-extrabold"
                >ACESSE NOSSO CANAL NO YOUTUBE</span
              >
              <font-awesome icon="arrow-right" class="h-5 w-4 pt-1" />
            </a>
          </div>
        </template>
        <template #sideNews>
          <div
            v-for="(video, index) in block4"
            :key="index"
            @click="navigateTo(news.link, { external: true })"
            class="flex container px-5 pt-3 cursor-pointer"
          >
            <NewsImage
              :backgroundImage="video?.fimg_url[3]"
              class="xl:h-20 xl:w-44 flex-shrink-0"
            />
            <div class="pl-2 w-fit">
              <h4 class="text-sm font-extrabold text-[#fef500]">
                {{ video.categories[1].name }}
              </h4>
              <h3 class="font-bold text-white">
                {{ video.title.rendered }}
              </h3>
            </div>
          </div>
        </template>
      </LazyNewsTab>
    </div>
    <!--flow cards  -->
    <LazyNewsTab
      title="flow cards"
      class="mx-auto w-7/12 py-10 dark:text-white"
      :bottomBorder="true"
    >
      <template #mainNews>
        <div class="flex h-56 border-r border-[#8c8c8c]/30">
          <div
            class="pr-3 pt-3 container w-11/12 cursor-pointer"
            v-for="(podcast, index) in block3"
            @click="navigateTo(news.link, { external: true })"
            :key="index"
          >
            <NewsImage :backgroundImage="podcast?.fimg_url[3]" class="h-5/6" />
            <h4 class="font-bold text-lg w-fit h-fit">
              {{ podcast.title.rendered }}
            </h4>
          </div>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-3 border-t-2 border-r-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="py-3">
            <span class="text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews>
        <div
          v-for="(video, index) in block4"
          :key="index"
          @click="navigateTo(news.link, { external: true })"
          class="flex container pl-3 pt-3 cursor-pointer"
        >
          <NewsImage
            :backgroundImage="video?.fimg_url[3]"
            class="h-20 w-44 flex-shrink-0"
          />
          <div class="pl-4">
            <h3 class="font-bold">
              {{ video.title.rendered }}
            </h3>
          </div>
        </div>
      </template>
    </LazyNewsTab>
    <!-- previews -->
    <LazyNewsTab
      title="previews"
      class="container mx-auto w-7/12 py-10 dark:text-white"
      :bottomBorder="true"
    >
      <template #mainNews>
        <div class="flex h-56 border-b-2 border-r-2 border-[#8c8c8c]/30">
          <div
            class="pr-3 pt-3 container w-11/12 cursor-pointer"
            v-for="(podcast, index) in block3"
            @click="navigateTo(news.link, { external: true })"
            :key="index"
          >
            <NewsImage :backgroundImage="podcast?.fimg_url[3]" class="h-5/6" />
            <h4 class="font-bold text-lg w-fit h-fit">
              {{ podcast.title.rendered }}
            </h4>
          </div>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-3 border-r-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="py-3">
            <span class="text-xl font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews>
        <div>
          <div
            v-for="(video, index) in block4"
            :key="index"
            @click="navigateTo(news.link, { external: true })"
            class="flex container pl-3 pt-3 cursor-pointer"
          >
            <NewsImage
              :backgroundImage="video?.fimg_url[3]"
              class="h-20 w-44 flex-shrink-0"
            />
            <div class="pl-4">
              <h3 class="font-bold">
                {{ video.title.rendered }}
              </h3>
            </div>
          </div>
        </div>
      </template>
    </LazyNewsTab>
    <!-- dicas -->
    <LazyNewsTab
      title="dicas"
      class="container mx-auto w-7/12 py-10 dark:text-white"
      :bottomBorder="true"
    >
      <template #mainNews>
        <div class="flex h-56 border-b-2 border-r-2 border-[#8c8c8c]/30">
          <div
            class="pr-3 pt-3 container w-11/12 cursor-pointer"
            v-for="(podcast, index) in block3"
            @click="navigateTo(news.link, { external: true })"
            :key="index"
          >
            <NewsImage :backgroundImage="podcast?.fimg_url[3]" class="h-5/6" />
            <h4 class="font-bold text-lg w-fit h-fit">
              {{ podcast.title.rendered }}
            </h4>
          </div>
        </div>
      </template>
      <template #learnMore>
        <div class="flex py-3 border-r-2 border-[#8c8c8c]/30">
          <a href="youtube.com" class="py-3">
            <span class="text-xl my-2 font-extrabold">VER MAIS</span>
            <font-awesome icon="arrow-right" class="text-purple-700 pl-4 h-5" />
          </a>
        </div>
      </template>
      <template #sideNews>
        <div
          v-for="(video, index) in block4"
          :key="index"
          @click="navigateTo(news.link, { external: true })"
          class="flex container pl-3 pt-3 cursor-pointer"
        >
          <NewsImage
            :backgroundImage="video?.fimg_url[3]"
            class="h-20 w-44 flex-shrink-0"
          />
          <div class="pl-4">
            <h3 class="font-bold">
              {{ video.title.rendered }}
            </h3>
          </div>
        </div>
      </template>
    </LazyNewsTab>
  </div>
</template>

<script>
import axios from 'axios'
import background from '@/assets/img/teste.jpg'
import patternDiv from '@/assets/img/pattern-div.png'

export default {
  setup () {
    const { formatDate, formatHours } = useDateTime()
    return { formatDate, formatHours }
  },
  data: () => ({
    background,
    patternDiv,
    buttons: [
      { name: 'games', prefix: 'fa', icon: 'gamepad' },
      { name: 'esports', prefix: 'fa', icon: 'trophy' },
      { name: 'cultura pop', prefix: 'fa', icon: 'film' }
    ],
    submenus: ['games', 'esports', 'cultura pop'],
    mainNews: {},
    newsBlock: [],
    highligthNews: {},
    block1: {},
    block2: {},
    block3: {},
    block4: {},
    currentNews: 0,
    submenu: 'games'
  }),
  methods: {
    nextSlide () {
      this.currentNews = (this.currentNews + 1) % this.mainNews.length
    },
    previousSlide () {
      this.currentNews =
        this.currentNews === 0 ? this.mainNews.length - 1 : this.currentNews - 1
    },
    goToSlide (index) {
      this.currentNews = index
    },
    setHighligthNews (news) {
      this.highligthNews = news
    },
    async loadMainNews () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=1&per_page=3`
      )
      this.mainNews = response.data
    },
    async loadNews () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=1`
      )
      this.newsBlock = response.data
      console.log('loaded items-----', this.newsBlock)
    },
    async loadReviews () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=665&per_page=6`
      )
      this.block1 = response.data
    },
    async loadLatestNews () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=639&per_page=5`
      )
      this.block2 = response.data
      console.log('bloco 2-------', response.data)
    },
    async loadPodcasts () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=37&per_page=2`
      )
      this.block3 = response.data
    },
    async loadVideos () {
      const config = useRuntimeConfig()
      const response = await axios.get(
        `${config.public.apiUrl}/posts?categories=37&per_page=3`
      )
      this.block4 = response.data
      console.log('bloco 4 ----', this.block4)
    }
  },
  mounted () {
    this.loadNews()
    this.loadReviews()
    this.loadLatestNews()
    this.loadPodcasts()
    this.loadVideos()
    this.loadMainNews()
  }
}
</script>
