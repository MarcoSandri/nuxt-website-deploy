<template>

  <section class="servizi-list">
    <div class="servizi-list__inner">
        <h2 class="fade-in-top servizi-list__title font_2 t-60 t-regular c-brown-900 t-center" v-html="component.Title"></h2>
        <div class="servizi-list__list">

            <article class="servizi-list__servizio" v-for="(servizio, index) in component.List" :key="index">

              <div class="servizi-list__text">
                  <div class="servizi-list__icon servizi-list__icon--landscape">
                      <nuxt-img class="style-svg" :src="servizio.Icon.data.attributes.url" :alt="servizio.Name" />
                    </div>
                    <h2 class="servizi-list__name font_2 t-60 t-regular c-brown-900"> <span class="servizi-list__number font_1 c-brown-700 t-18">0{{index}}</span> {{ servizio.Name }}</h2>
                    <div class="servizi-list__description t-24 t-light c-brown-900" v-html="servizio.Description"></div>
                    <div class="servizi-list__seats t-22 t-light c-brown-900" v-if="servizio.Seats">
                      <nuxt-img src="/svg/seat-icon.svg" :alt="servizio.Name" v-if="servizio.Seats"/>
                      <span v-if="servizio.Seats">{{ $t('servizi.posti') }} </span>
                      <span v-if="servizio.Seats" v-html="servizio.Seats"></span>
                    </div>
              </div>
              <div class="servizi-list__image">
                  <div class="servizi-list__icon servizi-list__icon--portrait">
                      <nuxt-img class="style-svg" :src="servizio.Icon.data.attributes.url" :alt="servizio.Name" />
                  </div>
                  <div class="servizi-list__image-box">
                      <nuxt-img :src="servizio.Image.data.attributes.url" :alt="servizio.Name" />
                  </div>
              </div>
            </article>

        </div>
    </div>
  </section>
</template>

<script setup>

  const media = useStrapiMedia()

  defineProps({
    component: Object
  })

</script>

<style lang="scss">

.servizi-list {
    background-color: $brown-500;
    padding-top: rvh(147);

    &__inner {

    }

    &__title {
        @media screen and (orientation: portrait){
            font-size: rvh(60, 1.08);
            line-height: rvh(62, 1.08);
            width: rvw(248, 5.16);
            margin: 0 auto;
        }
    }

    &__list {

    }

    &__servizio {
        display: flex;
        width: auto;
        justify-content: space-between;
        align-items: center;
        padding-top: rvh(95);
        padding-bottom: rvh(155);

        @media screen and (orientation: portrait) {
            flex-direction: column-reverse !important;
            padding-top: rvh(95, .55);
            padding-bottom: rvh(155, .52);
        }

        &:nth-of-type(odd) {
            margin-left: rvw(256);
            // margin-right: rvw(108);

            @media screen and (orientation: portrait) {
                margin-right: 0;
                margin-left: 0;

            }

            .servizi-list__text {

            }

            .servizi-list__image {
                flex-direction: row;
                align-self: flex-end;
                padding-left: rvw(256, .9);
                // clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            }

            .servizi-list__image-box {
                border-top-left-radius: rvw(335);
            }
        }

        &:nth-of-type(even) {
            margin-right: rvw(256);
            // margin-left: rvw(108);
            flex-direction: row-reverse;

            @media screen and (orientation: portrait) {
                margin-right: 0;
                margin-left: 0;
            }


            .servizi-list__text {

            }

            .servizi-list__image {
                flex-direction: row-reverse;
                align-self: flex-start;
                padding-right: rvw(256, .9);
                // clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            }

            .servizi-list__image-box {
                border-top-right-radius: rvw(335);
            }
        }
    }

    &__text {
        width: rvw(550);

        @media screen and (orientation: portrait) {
            width: rvw(550, 2.55);
            align-self: flex-start;
            margin-left: rvw(59, 5.36);
        }
    }

    &__name {
        position: relative;
        margin-top: rvh(83);
        padding-bottom: rvh(55);

        @media screen and (orientation: portrait) {
            padding-bottom: rvh(55, .7);
            font-size: rvh(60, 1.08);
            line-height: rvh(62, 1.08);
        }
    }

    &__number {
        position: absolute;
        left: rvw(-35);
        top: 0;
        transform: translateX(-100%);
        letter-spacing: rvw(2.54);

        @media screen and (orientation: portrait) {
          letter-spacing: rvw(2.54, 4.3);
        }
    }

    &__description {
        padding-bottom: rvh(30);

        @media screen and (orientation: portrait) {
            padding-bottom: rvh(30, 1.2);
        }

        p {
            margin: 0;
        }
    }

    &__seats {
        border-top: rvw(1) solid $brown-700;
        padding-top: rvh(25);
        display: flex;
        align-items: center;

        img {
            width: rvw(27);
            margin-right: rvw(30);
            object-fit: contain;

            @media screen and (orientation: portrait) {
                width: rvw(27, 4.4);
                margin-right: rvw(30, 3.2);
            }
        }
        span:nth-of-type(1) {
          padding-right: .25em;
        }
    }

    &__image {
        height: rvh(720);

        @media screen and (orientation: portrait) {
            display: flex;
            height: rvh(720, .46);
            align-items: flex-end;
            justify-content: space-between;
            width: 100%;
        }
    }

    &__icon {
        width: rvw(120);

        @media screen and (orientation: portrait) {
            width: rvw(120, 2.6);
        }

        &--landscape {
            display: block;

            @media screen and (orientation: portrait) {
                display: none;
            }
        }

        &--portrait {
            display: none;

            @media screen and (orientation: portrait) {
                display: block;
            }
        }
    }

    &__image-box {
        width: rvw(841);
        overflow: hidden;
        height: 100%;

        @media screen and (orientation: portrait) {
            width: rvw(841, 1.46);
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}


</style>