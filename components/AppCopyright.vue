<template>
    <div class="flex justify-between">
      <p class="py-10">
        © 2024 Flow Games. Todos os direitos reservados. <br />
        Desenvolvido por
        <span class="underline">Kaleo</span>
      </p>
      <div class="flex justify-between items-center lg:mx-[8%] gap-40">
        <div v-for="(image, id) in flowEnterprises" :key="id">
          <img :src="image.uri" alt="us" class="w-[70%]" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import us from '~/assets/img/header-image.jpg'
  
  export default {
    data: () => ({
      flowEnterprises: [{ uri: us }, { uri: us }, { uri: us }]
    })
  }
  </script>
  