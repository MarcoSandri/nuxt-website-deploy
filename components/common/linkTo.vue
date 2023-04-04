<template>

  <div class="bg-brown-900 next-page">
    <section class="next-page__wrap">
        <nuxt-img  format="webp" class="next-page__background" :src="component.Background.data.attributes.url" :alt="component.Page.data.attributes.Title"/>
        <nuxt-link :to="localePath('/' + component.Page.data.attributes.Slug)" class="fade-in-top next-page__inner">
            <h2 class="next-page__name t-90 font_2 c-brown-500 t-regular" v-html="component.Page.data.attributes.Title"></h2>
            <div class="next-page__arrow"><nuxt-img src="/svg/arrow-right-brown-500.svg" /></div>
        </nuxt-link>
    </section>
  </div>

</template>

<script setup>
const localePath = useLocalePath()

const media = useStrapiMedia()

defineProps({
  component: Object
})
</script>

<style lang="scss">

.next-page {
  padding-top: rvh(100);
  padding-bottom: rvh(100);
  
  &__wrap {
    width: 100vw;
    height: rvh(600);
    position: relative;
    // bottom: rvh(324);
    overflow: hidden;
    margin-bottom: rvh(-324);
    border-top-left-radius: rvw(233);
    border-top-right-radius: rvw(233);

    @media screen and (orientation: portrait) {
        height: rvh(600, .54);
        margin-bottom: rvh(-324, .53);
        bottom: rvh(324, .53);
        border-top-left-radius: rvw(233, 1.27);
        border-top-right-radius: rvw(233, 1.27);
    }

    &:hover {
        .next-page__background {
            transform: scale(1.02);
        }
    }
  }

    &__inner {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            display: block;
            background: linear-gradient(180deg, rgba(117,70,39,1) 0%, rgba(65,34,17,1) 100%);
            opacity: .25;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        &:hover {
            .next-page__arrow {
                transform: translateX(30%);
            }
        }
    }

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform .3s ease-out;
    }

    &__name {
        padding-right: rvw(40);
        height: rvh(116);

        @media screen and (orientation: portrait) {
            padding-right: rvw(40, 2);
        }
    }

    &__arrow {
        width: rvw(30);
        transition: transform .3s;

        @media screen and (orientation: portrait) {
            width: rvw(30, 3.8);
        }
    }
}


</style>