<template>
    <div>
      <img
        src="../assets/img/footer-bar.jpg"
        alt="footer image"
        class="bg-purple-600 w-full"
      />
  
      <div class="bg-[#131313] p-5">
        <div
          class="bg-[url('/assets/img/footer-background.jpg')] container justify-self-center"
        >
          <div class="grid grid-cols-6 text-white ">
            <div class="py-5" v-for="(content, id) in information" :key="id">
              <h1 class="gill-xg">{{ content.partner }}</h1>
              <ul class="mb-5">
                <li
                  v-for="(options, id) in content.options"
                  :key="id"
                  class="ms-2 py-1"
                >
                  <p class="text-lg">
                    {{ options.name }}
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-span-2 py-5 px-6">
              <div class="flex">
                <font-awesome icon="bolt-lightning" class="h-7 mt-2" />
                <div>
                  <h1 class="gill-xg">CADASTRE-SE EM NOSSA NEWSLETTER</h1>
                  <TheInput  class="py-10"/>
                </div>
              </div>
            </div>
          </div>
          <AppCopyright class="border-t border-[#8c8c8c] dark:border-none text-white font-semibold"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      information: [
        {
          partner: 'INSTITUCIONAL',
          options: [
            { name: 'Quem Somos' },
            { name: 'Contato' },
            { name: 'Políticas de privacidade' },
            { name: 'Conheça o Grupo Flow' }
          ]
        },
        {
          partner: 'NOSSOS CANAIS',
          options: [
            { name: 'Flow Games' },
            { name: 'Cortes do Flow Games' },
            { name: 'Flow Games Trailers' },
            { name: 'Gameplayrj' },
            { name: 'Discord' },
            { name: 'Whatsapp' },
            { name: 'Telegram' }
          ]
        },
        {
          partner: 'SERVIÇOS FG',
          options: [
            { name: 'Flow Games Store' },
            { name: 'Flow Ping' },
            { name: 'Low Games' },
            { name: 'Games em Promoção' },
            { name: 'Faz a Boa!' },
            { name: 'Seja Membro' }
          ]
        },
        {
          partner: 'CONHEÇA O GRUPO FLOW',
          options: [
            { name: 'Flow Podcast' },
            { name: 'Flow Sport Club' },
            { name: 'Flow News' },
            { name: 'Ciência Sem Fim' },
            { name: 'Vênus Podcast' }
          ]
        }
      ]
    })
  }
  </script>
  
  <style></style>
  