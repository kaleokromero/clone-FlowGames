<template>
  <div v-if="shape == 'default'" class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1131 462"
      :class="['relative']"
    >
      <defs>
        <!-- define a mask para a imagem -->
        <mask id="svgMask">
          <path
            d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H1093.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
            fill="white"
          />
        </mask>

        <linearGradient
          id="a"
          x1="498"
          y1="647"
          x2="690"
          y2="-39"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".958" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- define a imagem passada via prop como mask -->
      <g mask="url(#svgMask)">
        <image
          :href="backgroundImage"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      <path
        d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H1093.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
        fill="url(#a)"
        style="mix-blend-mode: overlay"
        :stroke="borderColor"
        :stroke-width="borderWidth"
        fill-opacity="0.3"
      />

      <!-- definições das bordas -->
      <path
        d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H1093.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
        fill="none"
        :stroke="borderColor"
        :stroke-width="borderWidth"
      />
    </svg>
    <div>
      <div class="absolute inset-10 flex flex-col justify-end pb-4">
        <slot> </slot>
      </div>
    </div>
  </div>
  <div v-else-if="shape == 'square'" class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 500"
      :class="['relative']"
    >
      <defs>
        <!-- define a mask para a imagem -->
        <mask id="svgMask">
          <path
            d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H650.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
            fill="white"
          />
        </mask>

        <linearGradient
          id="a"
          x1="498"
          y1="647"
          x2="690"
          y2="-39"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".958" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- define a imagem passada via prop como mask -->
      <g mask="url(#svgMask)">
        <image
          :href="backgroundImage"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      <path
        d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H650.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
        fill="url(#a)"
        style="mix-blend-mode: overlay"
        :stroke="borderColor"
        :stroke-width="borderWidth"
        fill-opacity="0.3"
      />

      <!-- definições das bordas -->
      <path
        d="M1 44.747v.304l.17.253 7.66 11.435.942 33.179-8.054 8.054-.292.293v352.651l.292.293 8.8 8.8.293.293H650.5l.29-.293 35.68-35.681.3-.293V14.381l-.3-.293-12.79-12.795-.29-.293H15.33l-.284.251-13.709 12.13-.337.298z"
        fill="none"
        :stroke="borderColor"
        :stroke-width="borderWidth"
      />
    </svg>
    <div>
      <div class="absolute inset-10 flex flex-col justify-end pb-4">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      required: false
    },
    borderColor: {
      type: String,
      default: null 
    },
    borderWidth: {
      type: Number,
      default: 1
    },
    shape: {
      type: String,
      default: 'default'
    }
  }
}
</script>
