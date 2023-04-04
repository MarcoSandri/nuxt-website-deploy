<template>
  <header :class="opened? 'opened' : ''" class="header" ref="header">

    <div class="header__overlay"></div>
    <div class="header__wrapper">
      <div :class="opened? 'opened' : ''" class="header__hamburger">
        <div class="header__control t-20 c-brown-900"  @click="headerCheck" > {{ $t('header.menu') }} <div class="header__icon"><nuxt-img src="/svg/plus-icon-brown-700.svg"/></div></div>
        <!-- <AppMenu class="header__menu" /> -->
      </div>
      <NuxtLink :to="localePath('/')" class="header__logo">
        <nuxt-img src="/svg/logo-vertical.svg"/>
        <nuxt-img src="/svg/logo-horizontal.svg"/>
      </NuxtLink>
      <div class="header__link">
        <a href="#" class="go-to-link button button--big button--icon-right">{{ $t('header.prenota') }}<div class="button__icon"><nuxt-img src="/svg/arrow-right.svg"/></div></a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, locales } = useI18n();
const localePath = useLocalePath();
let opened = menuOpened();

// const opened = ref(false);

const header =  ref(null);

const headerCheck = () => {
  opened.value = !opened.value
}

onMounted(() => {
  /**
   * Header scroll logic
   */
  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    if (!header.value.classList.contains('opened')) {
    if (scroll >= 100) {
        header.value.classList.add('scrolled');
      } else {
        header.value.classList.remove('scrolled');
      }
    }
  })

})

</script>

<style lang="scss" scoped>
.header {
  $header : &;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  // height: rvh(151);
  width: 100%;
  padding-top: rvh(37);
  padding-bottom: rvh(37);
  padding-left: rvw(111);
  padding-right: rvw(109);
  transition: height .2s, padding-top .2s, background-color .1s linear .2s, box-shadow .1s linear .2s;

  @media screen and (orientation: portrait) {
    padding-top: rvh(37, .9);
  }

  &__overlay {
    pointer-events: none;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: brightness(.6) blur(5px);
    transition: opacity .2s linear .1s
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__hamburger {
    width: 33%;
    display: flex;
    justify-content: flex-start;

    &.opened {
      .header__menu {
        transform: translateX(0);
      }

      .header__icon {
        transform: translateX(rvw(528)) rotate(45deg);

        @media screen and (orientation: portrait) {
          transform: translateX(rvw(528, 2.38)) rotate(45deg);
        }
      }
    }
  }

  &__control {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: rvw(5);
    z-index: 2;

    @media screen and (orientation: portrait) {
      letter-spacing: rvw(5, 2);
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: rvw(805);
    background-color: $brown-500;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform .3s;

    @media screen and (orientation: portrait) {
      width: 100%;
    }
  }

  &__icon {
    margin-left: rvw(15);
    height: rvh(22);
    transition: transform .3s;
    display: flex;
    align-items: center;

    @media screen and (orientation: portrait) {
      height: rvh(22, 1.14);
      margin-left: rvw(15, 5.8);
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    z-index: 1;

    img:nth-child(1) {
      height: rvh(80);
    }

    img:nth-child(2) {
      height: rvh(18);
      display: none;
    }
  }

  &__link {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    transition: opacity .1s;

    .button {
      transition: font-size .2s linear, background-color .2s linear, box-shadow .2s linear .2s;

      @media screen and (orientation: portrait) {
        height: rvw(63, 2.6);
        font-size: rvw(24, 3.2);
        padding: 0 rvw(28, 3.14);
        letter-spacing: rvw(6, 1.7);

        &__icon {
          display: none;
        }
      }

      &__icon {
        transition: height .2s;
      }
    }
  }

  &.scrolled {
    background-color: $brown-300;
    // height: rvh(55);
    padding-top: rvh(17);
    padding-bottom: rvh(17);
    box-shadow: 0 2px 15px rgba($color: $brown-900, $alpha: .15);
    transition: height .2s, padding-top .2s, background-color .2s linear .2s, box-shadow .2s linear .2s;

    @media screen and (orientation: portrait) {
      height: rvh(55, 1.68);
      padding-top: rvh(17, 1.4);
    }

    .header__logo {

      img:nth-child(1) {
        display: none;
      }

      img:nth-child(2) {
        display: block;

        @media screen and (orientation: portrait) {
          display: none;
        }
      }
    }

    &.opened {
      background-color: transparent;
      box-shadow: none;

    }

    .header__link {
      .button {
        @extend .t-20;
        background-color: transparent;
        height: auto;
        box-shadow: none;
        transition: font-size .2s, background-color .1s, box-shadow .2s;

        @media screen and (orientation: portrait) {
          padding-right: 0;
        }

        &__icon {
          height: rvh(26);
        }
      }
    }
  }

  &.opened {
    .header__link {
      opacity: 0;
    }

    .header__overlay {
      pointer-events: all;
      opacity: 1;
    }
  }
}
</style>
