<template>

<section class="home-hero">
  <div class="home-hero__inner">
    <h1 class="font_2 t-130 t-regular c-brown-900">
      <div class="slide-in-left home-hero__title home-hero__title--left" v-html="component.HeroLeftTitle"></div>
      <div class="slide-in-right home-hero__title home-hero__title--right font_2" v-html="component.HeroRightTitle"></div>
    </h1>

    <div class="home-hero__slider-container slide-in-top">
      <div class="home-hero__slider-controls">
        <div class="home-hero__slider-controls-inner">
          <div class="home-hero__prev" @click="slider.prev()">
            <nuxt-img src="/svg/arrow-left.svg"/>
          </div>
          <div class="home-hero__next" @click="slider.next()">
            <nuxt-img src="/svg/arrow-right.svg"/>
          </div>

          <div class="home-hero__dots">
            <div class="home-hero__dot" v-for="(image, index) in component.HeroImageGallery.data" :key="index" @click="slider.moveToIdx(index)" :class="{active: current === index }"></div>
          </div>

        </div>
      </div>

      <div class="home-hero__slider fader" ref="container">
        <div class="home-hero__slide fader__slide" v-for="(image, index) in component.HeroImageGallery.data" :key="index" :style="{ opacity: opacities[index] }">
          <nuxt-img format="webp" :src="useStrapiMedia(image.attributes.url)" :alt="image.attributes.alternativeText" />
        </div>
      </div>
      
    </div>
  </div>
</section>

</template>

<script setup>
  import { useKeenSlider } from 'keen-slider/vue'
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  // import {EffectFade, Pagination, Navigation, Virtual} from 'swiper';
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/pagination';
  import 'keen-slider/keen-slider.min.css'

  const media = useStrapiMedia();

  const props = defineProps({
    component: Object
  })

  const opacities = ref([])
  const current = ref(1)
  const [container, slider] = useKeenSlider(
    {
      slides: props.component.HeroImageGallery.data.length,
      initial: current.value,
      defaultAnimation: {
        duration: 3000
      },
      slideChanged: (s) => {
        current.value = s.track.details.rel
      },
      detailsChanged: (s) => {
        opacities.value = s.track.details.slides.map((slide) => slide.portion)
      },
      loop: true,
    },
    [])

    onMounted(() => {
      // console.log(slider.value)
      console.log('aa')
      slider.value.update()
    })

  // const modules = [EffectFade, Pagination, Navigation, Virtual]

  // import { Swiper } from "swiper/bundle";

  // onUnmounted(() => {
  //   // console.log(mySwiper.value)
  //   mySwiper.value.destroy()
  //   // console.log(mySwiper.value)
  // })


</script>

<style lang="scss">

.fader {
  position: relative;
  overflow: hidden;
}

.fader__slide {
  width: 100% !important;
  height: 100% !important;
  position: absolute !important;
  top: 0 !important;
}

.fader img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}

.home-hero {
  min-height: 100vh;
  background-color: $brown-500;

  &__inner {

  }

  &__title {
    position: relative;
    z-index: 1;

    @media screen and (orientation: portrait) and (max-width: $screen-xs-max) {
      span {
        display: block;
      }
    }

    &--right {
      text-align: right;
      padding-right: rvw(256);

      @media screen and (orientation: portrait) {
        padding-right: rvw(256, .5);
      }
    }

    &--left {
      padding-left: rvw(256);

      @media screen and (orientation: portrait) {
        padding-left: rvw(256, .5);
      }
    }

    &::selection,
    & *::selection {
      background-color: rgba($color: $brown-300, $alpha: .30);
      color: inherit;
    }
  }

  &__slider-container {
    display: flex;
    position: relative;
    bottom: rvh(25);

    @media screen and (orientation: portrait) {
      flex-direction: column-reverse;
      bottom: rvh(25, 3);

      @media screen and (min-width: $screen-xs-min) {
        bottom: rvh(25, 1.1);
      }
    }
  }

  &__slider-controls {
    width: rvw(398);
    display: flex;
    padding-right: rvw(24.5);
    padding-left: rvw(111);
    padding-top: rvh(650);
    z-index: 1;

    @media screen and (orientation: portrait) {
      width: 100%;
      padding-top: rvh(650, .06);
      padding-right: rvw(111);
    }
  }

  &__slider-controls-inner {
    display: flex;
    align-items: center;
    height: rvh(35);
    width: 100%;
  }

  &__prev {
    cursor: pointer;
    order: 1;
    height: 100%;
    transition: opacity .2s;

    img {
      height: rvh(35);
      width: rvw(40);
      object-fit: contain;
    }
    
    &--disabled {
      opacity: .2;
    }
  }
  
  &__next {
    height: rvh(35);
    object-fit: contain;
    widows: rvw(40);
    cursor: pointer;
    order: 3;
    height: 100%;
    transition: opacity .2s;

    &--disabled {
      opacity: .2;
    }

    img {
      height: rvh(35);
      width: rvw(40);
      object-fit: contain;
    }
  }

  &__slider {
    height: rvh(820);
    width: rvw(1522);
    overflow: hidden;
    border-top-left-radius: rvw(365);
    transform: translateZ(0);
    display: flex;
    position: relative;
    z-index: 0;


    @media screen and (orientation: portrait) {
      transform: translateZ(0);
      width: 100%;
      border-top-left-radius: 100vh;
      border-top-right-radius: 100vh;
    }
  }

  &__inner {
    height: 100%;
    width: 100%;
  }

  &__slide {
    height: rvh(820);
    background-color: $brown-900;
    width: 100%;

    @media screen and (orientation: portrait) {
      border-top-left-radius: 100vh;
      border-top-right-radius: 100vh;
      transform: translateZ(0);
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      object-position: center;
    }
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
    margin: 0 rvw(7);
    min-width: 8px;
    min-height: 10px;
    border-top-left-radius: 100vh;
    border-top-right-radius: 100vh;
    transform: translateZ(0);
    border: rvw(1) solid $brown-700;
    transition: background-color .2s;

    &.active {
      background-color: $brown-700;
    }

    @media screen and (orientation: portrait) {
      width: 8px;
      height: 10px;
      margin: 0 7px;
      border: 1px solid $brown-700;

    }
  }

}
</style>