<template>
  <section class="home-servizi">
    <div class="home-servizi__inner">
      <div class="sec-name fade-in-top">{{ $t('servizi.servizi') }}</div>
      <h2 class="fade-in-top-later home-servizi__title font_2 t-60 t-regular c-brown-500 t-center" v-html="component.ServiziTitle"></h2>
      <div class="splitText-slide-in-top home-servizi__description font_1 t-28 c-brown-500 t-light t-center t-regular t-center" v-html="component.ServiziText"></div>

      <div class="home-servizi__lista">
        <div class="home-servizi__lista-inner fade-in-stagger">
          <article v-for="(servizio,index) in component.ServiziList" :key="index" class="home-servizi__servizio fade-in-stagger__element">
            <div class="home-servizi__servizio-icon">
              <nuxt-img class="style-svg" :src="servizio.Image.data.attributes.url" :alt="servizio.Label" />
            </div>
            <div class="home-servizi__servizio-name">
              <div class="home-servizi__servizio-number font_1 c-brown-700 t-18">0{{ index }}</div>
              <h3 class="font_2 t-40 c-brown-500 t-regular t-center">{{ servizio.Label }}</h3>
            </div>
          </article>

          <div class="home-servizi__load">
            <nuxt-img src="/svg/plus-brown-900.svg" />
          </div>
        </div>
      </div>
      <div class="home-servizi__link">
        <nuxt-link :to="localePath('/servizi')" class="button">{{ $t('servizi.servizi') }}</nuxt-link>
      </div>

    </div>
  </section>
</template>

<script setup>
  const localePath = useLocalePath();
  const media = useStrapiMedia();

  defineProps({
    component: Object
  })
</script>

<style lang="scss">
.home-servizi {
  background-color: $brown-900;
  padding-top: rvh(135);

  &__inner {

  }

  &__title {
    padding-bottom: rvh(50);

    @media screen and (orientation: portrait) {
      padding-bottom: rvh(50, 1.65);
    }
  }

  &__description {
    width: rvw(1122);
    margin: 0 auto;

    @media screen and (orientation: portrait) {
      width: rvw(1122, 1.51);

      br {
        display: none;
      }
    }
  }

  &__lista {
    padding: 0 rvw(255);
  }

  &__lista-inner {
    @include flexWrapper(row, wrap, space-between, center);

    @media screen and (orientation: portrait) {
      flex-direction: column;
    }
  }

  &__servizio {
    padding-top: rvh(100);
    width: rvw(454);
    // clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);

    @media screen and (orientation: portrait) {
      // clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
      width: rvw(454, 2.5);
      padding-top: rvh(100, 1.4);
      display: none;
      transition: clip-path .5s;

      &.home-servizi__servizio--loaded {
        display: block;
        // clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
      }
    }
  }

  &__servizio-icon {
    padding-bottom: rvh(50);
    height: rvh(130);
    border-bottom: rvh(1) solid $brown-700;
    display: flex;
    justify-content: center;
  }

  &__servizio-name {
    padding-top: rvh(30);
    padding-left: rvw(25);
    padding-right: rvw(25);
    position: relative;

    @media screen and (orientation: portrait) {
      padding-left: rvw(25,6);
      padding-right: rvw(25,6);
    }
  }

  &__servizio-number {
    position: absolute;
    top: rvh(23);
    left: 0;
    letter-spacing: rvw(2.54);

    @media screen and (orientation: portrait) {
      letter-spacing: rvw(2.54, 4.3);
    }
  }

  &__load {
    width: rvh(25, 3.3);
    height: rvh(25, 3.3);
    border-radius: 50%;
    background-color: $brown-500;
    display: none;
    justify-content: center;
    align-items: center;

    .load--vertical {
      transition: transform .2s;
      transform-origin: center;

    }

    @media screen and (orientation: portrait) {
      display: flex;
      margin-top: rvh(100, 1.4);
    }

    svg {
      width: rvh(25, 1.6);
      height: rvh(25, 1.6);
    }

    &.home-servizi__load--less {
      .load--vertical {
        transform: rotate(90deg);
      }
    }
  }

  &__link {
    padding-top: rvh(74);
    padding-bottom: rvh(152);
    width: 100%;

    .button {
      color: $brown-500;
    }

    @media screen and (orientation: portrait) {
      padding-top: rvh(74, 1.28);
      padding-bottom: rvh(152);
    }

    .button {
      // margin-left: auto;
      // margin-right: rvw(255);
      margin: 0 auto;

      @media screen and (orientation: portrait) {
        margin-right: auto;
      }
    }
  }
}

</style>