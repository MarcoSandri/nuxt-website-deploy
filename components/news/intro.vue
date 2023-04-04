<template> 

<section class="news-single">
  <div class="news-single__inner">
    <div class="news-single__article">
      <div class="news-single__content">
        <nuxt-link :to="localePath('/news')" class="news-single__back t-18 font_1 t-light c-brown-900"><div class="news-single__back-icon"><nuxt-img src="/svg/arrow-left-brown-900.svg" /></div>{{ $t('news.indietro') }}</nuxt-link>
        <div class="news-single__date t-18 t-light c-brown-700"> {{ getDate(article.publishedAt) }} </div>
        <h1 class="news-single__title t-60 t-regular font_2 c-brown-900"> {{ article.Title }} </h1>
        <div class="news-single__description t-24 font_1 c-brown-900 t-light" v-html="article.Content"></div>
      </div>
      <div class="news-single__thumbnail">
        <nuxt-img :src="article.Thumbnail.data.attributes.url" :alt="article.Title" />
      </div>
      <div class="news-single__description news-single__description--portrait t-24 font_1 c-brown-900 t-light"  v-html="article.Content"> </div>
    </div>

      <div class="news-single__slider-container" v-if="article.Images.data">
        <div class="news-single__slider-control">
          <div class="news-single__prev"> <nuxt-img src="/svg/arrow-left.svg"/> </div>
        </div>

        <swiper
          :modules="[Virtual, Navigation]"
          :virtual="true"
          :slides-per-view="1.7"
          :navigation="{
            nextEl: '.news-single__next',
            prevEl: '.news-single__prev',
          }"
          class="news-single__slider"
        >
          <swiper-slide class="news-single__slide" v-for="(image, index) in article.Images.data" :key="index" :virtual-index="index">
            <nuxt-img :src="image.attributes.url" alt="'. $image['alt'] .'" />
          </swiper-slide>
        </swiper>

        <div class="news-single__slider-control">
          <div class="news-single__next"> <nuxt-img src="/svg/arrow-right.svg"/> </div>
        </div>
      </div>
      <div class="news-single__dots-container"></div>
  </div>

  <div id="news-single__cursor"> <nuxt-img src="/svg/plus-icon-brown-500.svg" /></div>
</section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Virtual, Navigation} from 'swiper';
  import 'swiper/css';
  const localePath = useLocalePath();
  const strapiMedia = useStrapiMedia();

  defineProps({
    article: Object
  })

  const getDate = (isoDate) => {
    const date = new Date(isoDate)
    let dateFormatted = date.getDate() + ' ' + date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear()
    return dateFormatted
  }

</script>

<style lang="scss">
.news-single {
  padding-top: rvh(100);

  @media screen and (orientation: portrait) {
    padding-top: rvh(215, 0.65);
  }

  &__inner {
  }

  &__article {
    display: flex;
    justify-content: space-between;
    padding-bottom: rvh(165);

    @media screen and (orientation: portrait) {
      flex-direction: column;
    }
  }

  &__thumbnail {
    width: rvw(805);
    height: rvh(865);
    border-top-left-radius: rvw(383);
    overflow: hidden;
    align-self: top;

    @media screen and (orientation: portrait) {
      width: 100%;
      margin-left: rvw(22, 5.5);
      height: rvh(865, 0.5);
      border-top-left-radius: rvw(383, 1.48);
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__content {
    width: rvw(693);
    margin-left: rvw(254);

    @media screen and (orientation: portrait) {
      width: rvw(693, 2.4);
      margin: 0 auto;
    }
  }

  &__back {
    display: flex;
    align-items: center;
    letter-spacing: rvw(3);
    text-transform: uppercase;
    transform: translateX(rvw(-126));
    margin-bottom: rvh(115);
    transition: transform 0.2s;

    @media screen and (orientation: portrait) {
      font-size: 0;
      transform: translateX(0);
      margin-bottom: rvh(115, 0.15);
    }

    &:hover {
      transform: translateX(rvw(-130));
    }
  }

  &__back-icon {
    height: rvh(35);
    margin-right: rvw(21);

    @media screen and (orientation: portrait) {
      margin-right: rvw(0);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__date {
    padding-bottom: rvh(27);

    @media screen and (orientation: portrait) {
      padding-bottom: rvh(27, 0.3);
    }
  }

  &__title {
    padding-bottom: rvh(27);

    @media screen and (orientation: portrait) {
      padding-bottom: rvh(27, 1.3);
    }
  }

  &__description {
    @media screen and (orientation: portrait) {
      display: none;
    }

    p {
      margin: 0;
    }

    &--portrait {
      display: none;
      width: rvw(276, 5.1);
      margin-left: rvw(22, 5.5);
      padding-top: rvh(39, 1.6);
      @media screen and (orientation: portrait) {
        display: block;
      }
    }
  }

  &__slider-container {
    display: flex;
    position: relative;
  }

  &__slider-control {
    width: rvw(255);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (orientation: portrait) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;

      &:nth-of-type(1) {
        left: 0;
      }
      &:nth-of-type(3) {
        right: 0;
      }
    }
  }

  &__prev,
  &__next {
    width: rvw(30);
    cursor: pointer;

    @media screen and (orientation: portrait) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: rvw(30, 7.2);
      height: rvw(30, 7.2);
      background-color: $brown-500;
      border: 1px solid $brown-700;

      svg {
        width: rvw(22, 5.12);
        max-width: 30px;
      }
    }
  }

  &__slider {
    width: rvw(1432);

    @media screen and (orientation: portrait) {
      width: rvw(1432, 1.2);
      margin: 0 auto;
    }
  }

  &__slide {
    // width: rvw(694) !important;
    padding: 0 rvw(22);
    height: rvh(500) !important;
    width: auto;

    img {
      object-fit: contain;
      height: 100%;
      width: auto;
    }

    @media screen and (orientation: portrait) {
      // width: 100% !important;
      height: rvh(500, 0.77) !important;
    }
  }

  &__dots-container {
    padding-top: rvh(50, 0.76);
  }

  &__dots {
    display: flex;
    flex: 1;
    justify-content: center;

    @media screen and (orientation: portrait) {
      display: flex;
    }

    li {
      &.slick-active {
        .news-single__dot {
          background-color: $brown-700;
        }
      }
    }
  }

  &__dot {
    cursor: pointer;
    @media screen and (orientation: portrait) {
      width: 8px;
      height: 10px;
      margin: 0 7px;
      border-top-left-radius: 100vh;
      border-top-right-radius: 100vh;
      border: 1px solid $brown-700;
    }
  }

  #news-single__cursor {
    width: rvw(100);
    height: rvw(100);
    background-color: $brown-700;
    color: $brown-500;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 1;
    font-size: rvw(80);
    pointer-events: none;
    font-family: $font_1;
    font-weight: 100;
    transform: translate(-50%, -50%) scale(0);
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0;

    svg {
      width: rvw(35);
    }

    @media screen and (orientation: portrait) {
      display: none;
    }
  }
}

</style>