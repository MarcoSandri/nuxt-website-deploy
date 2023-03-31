<template>

<section class="home-borgo38">
  <div class="home-borgo38__inner">
    <div class="sec-name fade-in-top">{{ $t('home.borgo38') }}</div>
    <h2 class="font_2 t-130 t-regular c-brown-900">
      <div class="slide-in-left home-borgo38__title home-borgo38__title--left" v-html="component.Borgo38LeftTitle"></div>
      <div class="slide-in-right home-borgo38__title home-borgo38__title--right" v-html="component.Borgo38RightTitle"></div>
    </h2>
    <div class="home-borgo38__content font_1 t-28 c-brown-900 t-light t-center splitText-slide-in-top" v-html="component.Borgo38Content"></div>
  </div>
</section>

</template>


<script setup>
  const props = defineProps({
    component: Object
  })

</script>


<style lang="scss">
.home-borgo38 {
  background-color: $brown-500;
  padding-top: rvh(213);
  padding-bottom: rvh(262);

  @media screen and (orientation: portrait) {
    padding-top: rvh(213, .4);
    padding-bottom: rvh(262, .4);
  }

  &__inner {

  }

  &__title {
    position: relative;
    z-index: 1;

    &--right {
      text-align: right;
      padding-right: rvw(435);

      @media screen and (orientation: portrait) {
        padding-right: rvw(435, .27);
      }
    }

    &--left {
      padding-left: rvw(398);

      @media screen and (orientation: portrait) {
        padding-left: rvw(398, .26);
      }
    }

    &::selection,
    & *::selection {
      background-color: rgba($color: $brown-300, $alpha: .30);
      color: inherit;
    }
  }

  &__content {
    width: rvw(551);
    margin: 0 auto;
    margin-top: 1rem;

    p:first-of-type {
      margin-top: 3rem;
    }

    @media screen and (orientation: portrait) {
      width: rvw(1122, 1.51);

      br {
        display: none;
      }
    }
  }
}


</style>