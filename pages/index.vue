<template>
  <div class="bg-[url(/assets/img/teste.jpg)]">
    <!-- Card Nottícias capa -->
    <TheNewsImage
      borderColor="#ffff"
      borderWidth="2"
      class="w-7/12 py-5 mx-auto"
    >
        <div class="text-white w-4/6">
          <h2 class="text-[#fef500] font-bold bg-black w-fit rounded p-2">
            TESTE
          </h2>
          <h1 class="font-bold text-5xl">TITULO BOM MATERIA BOA TEXTO LONGO</h1>
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
    <div class="backdrop-blur-md bg-white/40 p-10">
      <div class="flex justify-around font-bold text-2xl">
        <h2 class="text-white">
          <font-awesome icon="bolt-lightning" class="mr-3" />
          MAIS DESTAQUES
        </h2>
        <div class="flex flex-row gap-2">
          <button
            class="bg-purple-700 shadow-md rounded py-2 px-5 text-[#fef500]"
          >
            <font-awesome icon="trophy" />
            em desenv
          </button>
          <button
            class="bg-purple-700 shadow-md rounded py-2 px-5 text-[#fef500]"
          >
            <font-awesome icon="trophy" />
            em desenv
          </button>
          <button
            class="bg-purple-700 shadow-md rounded py-2 px-5 text-[#fef500]"
          >
            <font-awesome icon="trophy" />
            em desenv
          </button>
        </div>
      </div>
      <div class="container mx-auto">
        <TheHighligth :backgroundImage="background"  class="py-5 w-2/12 h-36">
          <div class="container justify-end text-white">
            <h2 class="bg-black w-fit rounded p-2 text-[#fef500] text-xs font-bold">
              TESTE
            </h2>
            <h1 class="font-bold text-xl ">
              TITULO BOM MATERIA BOA TEXTO LONGO
            </h1>
          </div>
        </TheHighligth>
        <ul class="px-5 list-disc">
          <li>
            <p>por <span class="underline">kaleo</span> as 20:99</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- proxima seção -->
</template>

<script>
import background from '@/assets/img/teste.jpg'
import transparentBg from '@/assets/img/box-news.webp'
export default {
  data: () => ({
    background,
    transparentBg
  }),
  methods: {}
}
</script>

<style>
.mask1 {
  -webkit-mask-image: url('@/assets/img/bg123.svg');
  mask-image: url('@/assets/img/bg123.svg');
  mask-repeat: no-repeat;
}

ul li::marker {
  color: yellow; /* marker color */
}
</style>
