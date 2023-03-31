<template>
  <section class="news-slider">
    <div class="news-slider__inner">
      <div class="sec-name fade-in-top">{{ $t('news.news') }}</div>
      <h2 class="fade-in-top-later news-slider__title font_2 t-60 t-regular c-brown-900 t-center ">{{ $t('news.eventi') }}</h2>
      <div class="news-slider__slider-container">
        <div class="news-slider__arrow">
          <div class="news-slider__prev">
            <nuxt-img src="/svg/arrow-left.svg" />
          </div>
        </div>
        <swiper
          :loop="true"
          :slides-per-view="3"
          class="news-slider__slider fade-in-stagger"
        >
          <swiper-slide class="news-slider__slide fade-in-stagger__element" v-for="(article, index) in articles" :key="index" :virtualIndex="index">
            <CommonNewsCard :article="article"/>
          </swiper-slide>
        </swiper>
        <div class="news-slider__arrow">
          <div class="news-slider__next">
            <nuxt-img src="/svg/arrow-right.svg" />
          </div>
        </div>
      </div>
      <div class="news-slider__button">
        <nuxt-link :to="localePath('/news')" class="button">{{ $t('news.tutte') }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Virtual, Navigation} from 'swiper';
  import 'swiper/css';

  const localePath = useLocalePath();
  const strapiMedia = useStrapiMedia();
  const { locale, locales } = useI18n();
  const { find } = useStrapi4();


  const { data, pending, refresh, error } = await useAsyncData("page", () =>
    find("articles", {
        populate: "deep",
        locale: locale.value,
    })
  );

  const articles = data.value.data

  defineProps({
    component: Object
  })

</script>

<style lang="scss" scoped>
  .news-slider {
  padding-top: rvh(210);
  background-color: $brown-500;
  min-height: 100vh;

  @media screen and (orientation: portrait) {
  padding-top: rvh(210, .6);
  }

  &__inner {

  }

  &__title {
    padding-bottom: rvh(120);

    @media screen and (orientation: portrait) {
      padding-bottom: rvh(120, .33);
    }
  }

  &__slider-container {
    @include flexWrapper(row,nowrap, center, center);
  }

  &__arrow {
    min-width: rvw(256);
    @include flexWrapper(row, nowrap, center, center);

    @media screen and (orientation: portrait) {
      min-width: rvw(256, .9);
    }
  }

  &__slider {
    flex-grow: 1;
  }

  &__prev,
  &__next {
    width: rvw(30);
    cursor: pointer;

    @media screen and (orientation: portrait) {
      width: rvw(30, 4);

    }
  }

  &__button {
    display: flex;
    flex-direction: row-reverse;
    padding-top: rvh(50);
    // padding-right: rvw(256);
    padding-bottom: rvh(16);
    justify-content: center;

    @media screen and (orientation: portrait) {
      padding-right: 0;
      padding-top: rvh(50, 1.1);
      padding-bottom: rvh(16, 5);

    }
  }

  .slick-list {
    // margin-right: calc((-100% + (rvh(450) * 3)) / 3);
  }
}

</style>