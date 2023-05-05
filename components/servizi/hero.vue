<template>

  <section class="servizi-hero">
      <div class="servizi-hero__inner">
          <div class="servizi-hero__text">
              <h1 class="sec-name fade-in-top">{{  component.HeroIntro }}</h1>
              <div class="splitText-slide-in-top servizi-hero__description t-40 font_2 c-brown-900" v-html="component.HeroContent"></div>
          </div>
          <div class="servizi-hero__image">
              <nuxt-img format="webp" :src="useStrapiMedia(component.HeroImage.data.attributes.url)" :alt="component.HeroIntro" />
          </div>
      </div>
  </section>

</template>

<script setup>
const media = useStrapiMedia()

defineProps({
  component : Object
})

</script>

<style lang="scss">
.servizi-hero {
    height: 100vh;
    background-color: $brown-500;

    @media screen and (orientation: portrait) {
        height: auto;
    }

    &__inner {
        height: 100%;
        display: flex;
        align-items: center;

        @media screen and (orientation: portrait) {
            flex-direction: column-reverse;
        }
    }

    &__text {
        width: 50%;
        padding-left: rvw(256);

        @media screen and (orientation: portrait) {
            width: 100%;
            padding-left: rvw(256, .42);
            padding-right: rvw(256, .42);
        }
    }

    .sec-name {
        text-align: start;

        @media screen and (orientation: portrait) {
            padding-top: rvh(33, 1.65);
        }
    }

    &__description {
        width: rvw(550);

        @media screen and (orientation: portrait) {
            width: 100%;
        }
    }

    &__image {
        width: 50%;
        height: 100%;
        border-top-left-radius: rvw(474.5);
        overflow: hidden;
        // clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);

        @media screen and (orientation: portrait) {
            width: auto;
            margin-top: rvh(95, 1.63);
            height: rvh(400, 1.6);
            margin-left: rvw(256, .5);
            border-top-left-radius: rvw(474.5, 1.9);
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>