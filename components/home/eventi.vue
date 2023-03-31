<template>
  <section class="home-eventi">
    <div class="home-eventi__inner">
      <div class="sec-name fade-in-top">{{ $t('eventi.eventi') }}</div>
      <h2 class="home-eventi__title font_2 t-60 t-regular c-brown-900 t-center fade-in-top-later" v-html="component.HomeEventiTitle"></h2>
      <div class="home-eventi__slider-container">

        <div ref="container" class="home-eventi__slider slide-in-top keen-slider">
          <article class="home-eventi__slide keen-slider__slide"  v-for="(slide, index) in component.Slider" :key="index" :class="{active: current === index }">
            <div class="home-eventi__slide-inner">
              <nuxt-img format="webp" :src="useStrapiMedia(slide.Image.data.attributes.url)" :alt="slide.Label" />
              <h3 class="home-eventi__slide-title font_2 t-60 c-brown-500 t-regular t-center">{{ slide.Label }}</h3>
            </div>
          </article>
        </div>

        <div class="home-eventi__prev" @click="slider.prev()">
          <nuxt-img src="/svg/arrow-left.svg"/>
        </div>
        <div class="home-eventi__next" @click="slider.next()">
          <nuxt-img src="/svg/arrow-right.svg"/>
        </div>
      </div>
      <div class="home-eventi__slider-dots-container">
      </div>
    </div>
  </section>
</template>

<script setup>
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  // import {Pagination, Navigation} from 'swiper';
  import { useKeenSlider } from 'keen-slider/vue'
  import 'keen-slider/keen-slider.min.css'
  const current = ref(1);
  const [container, slider] = useKeenSlider(
    {
      loop: true,
      initial: current.value,
      slides: {
        perView: 2.5,
        origin: 'center'
      },
      slideChanged: (s) => {
        current.value = s.track.details.rel
      },
    },
    [])

  const media = useStrapiMedia();

  defineProps({
    component : Object
  })
</script>

<style lang="scss">
  .home-eventi {
  background-color: $brown-500;
  padding-top: rvh(35);
  padding-bottom: rvh(162);

  @media screen and (orientation: portrait) {
    padding-bottom: rvh(162, .5);
  }

  &__inner {

  }

  &__title {
    padding: 0 rvw(470);
    padding-bottom: rvh(40);

    @media screen and (orientation: portrait) {
      padding: 0 rvw(470, .22);
      padding-bottom: rvh(40, 3);
    }
  }

  &__slider-container {
    position: relative;
  }

  &__slider {

  }

  &__slide {
    height: rvh(780);
    width: rvw(752) !important;
    margin: 0 auto;

    @media screen and (orientation: portrait) {
      height: rvh(780, .66);
      width: rvw(752, 1.87) !important;
    }
  }

  &__slide-inner {
    height: 100%;
    width: rvw(610);
    margin: 0 auto;
    border-top-left-radius: 100vh;
    border-top-right-radius: 100vh;
    transform: translateZ(0);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $brown-900;

    @media screen and (orientation: portrait) {
      width: rvw(610, 2.09);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .4s linear .2s;
    }
    &::after {
      content: '';
      background-color: $brown-900;
      opacity: .45;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__slide-title {
    z-index: 2;
    opacity: .5;
    transition: opacity .3s linear .5s;
    width: rvw(470);

    @media screen and (orientation: portrait) {
      width: 100%;
    }
  }

  .active {
    .home-eventi__slide-title {
      opacity: 1;
    }
    .home-eventi__slide-inner img {
      transform: scale(1.05);
    }
  }

  &__slider-dots-container {
    padding-top: rvh(50);
    padding-bottom: rvh(35);
    display: flex;
    justify-content: center;

    @media screen and (orientation: portrait) {
      padding-top: rvh(50, 1.3);
      padding-bottom: rvh(35, 1.3);

    }
  }

  &__prev,
  &__next {
    z-index: 1;
    display: none !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: rvw(42, 5.12);
    width: rvw(42, 5.12);
    max-width: 60px;
    max-height: 60px;
    border: rvw(1, 5.12) solid $brown-700;
    background-color: $brown-500;
    align-items: center;
    justify-content: center;

    img {
      width: rvw(22, 5.12);
      max-width: 30px;
    }

    @media screen and (orientation: portrait) {
      display: flex !important;
    }
  }

  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }


  &__dots {
    order: 2;
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__dot {
    cursor: pointer;
    width: rvw(8);
    height: rvw(10); //* Per mantenere le proporzioni
    min-width: 8px;
    min-height: 10px;
    margin: 0 rvw(7);
    border-top-left-radius: 100vh;
    border-top-right-radius: 100vh;
    border: rvw(1) solid $brown-700;
    transition: background-color .2s;

    @media screen and (orientation: portrait) {
      width: 8px;
      height: 10px;
      margin: 0 7px;
      border: 1px solid $brown-700;

    }

    &.active {
      background-color: $brown-700;
    }
  }
}

</style>