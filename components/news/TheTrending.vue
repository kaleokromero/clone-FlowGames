<template>
    <div>
        <div v-if="category == 'games'" class=" mx-auto">
            <ul v-for="(news, id) in games" :key="id" class="p-5 list-disc text-white">
                <TheHighligth :backgroundImage="news?.fimg_url[3]" class="mx-auto w-[13%] h-48">
                    <div class="text-white w-fit">
                        <h2 class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold">
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


        <ul v-else-if="category == 'esports'" class="p-5 list-disc text-white">
            <TheHighligth class="mx-auto w-[13%] h-48">
                <div class="text-white w-fit">
                    <h2 class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold">
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

        <ul v-else-if="category == 'cultura pop'" class="p-5 list-disc text-white">
            <TheHighligth class="mx-auto w-[13%] h-48">
                <div class="text-white w-fit">
                    <h2 class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold">
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
    data: () => ({
        background,
        games: {},
        esports: {},
        popCulture: {},
    }),
    methods: {
        async loadGames() {
            const config = useRuntimeConfig()
            const response = await axios.get(
                `${config.public.apiUrl}/posts?categories=1&per_page=3`
            )
            this.games = response.data
            return console.log('yeyer------',this.games);
            
        }
    },
    mounted() {
        this.loadGames()
    }
}
</script>