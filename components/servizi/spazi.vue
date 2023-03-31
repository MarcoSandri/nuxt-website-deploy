<template>

  <section class="servizi-spazi">

  <div class="servizi-spazi__inner">
      <div class="sec-name fade-in-top">{{ $t('spazi.spazi') }}</div>
      <div class="splitText-slide-in-top servizi-spazi__description t-60 c-brown-500 font_2 t-regular t-center" v-html="component.Description"></div>
      <div class="servizi-spazi__download">
          <a target="_blank" href="<?= $spazi_planimetrie['url'] ?>" class="button">{{ $t('spazi.planimetrie') }}</a>
          <a target="_blank" href="<?= $spazi_attrezzatura['url'] ?>" class="button">{{ $t('spazi.attrezzature') }}</a>
      </div>
  </div>

  </section>

</template>

<script setup>

  defineProps({
    component : Object
  })

</script>

<style lang="scss">

.servizi-spazi {
    background-color: $brown-900;
    padding-top: rvh(284);
    padding-bottom: rvh(100);

    @media screen and (orientation: portrait) {
        padding-top: rvh(284, .41);
        padding-bottom: rvh(630, .41);
    }

    &__inner {
    }

    &__description {
        width: rvw(1122);
        margin: 0 auto;
        padding: rvh(42) 0;

        @media screen and (orientation: portrait) {
            width: rvw(1122, 1.55);
            padding: rvh(42, 1.2) 0;
        }

        p {
            margin: 0;
        }
    }

    &__download {
        width: rvw(838);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: rvh(342);

        @media screen and (orientation: portrait) {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: rvh(342, .5);

        }

        .button {
            color: $brown-500;

            @media screen and (orientation: portrait) {
                &:nth-of-type(1) {
                    margin-bottom: rvh(38, 1.65);
                }
            }
        }
    }
}

</style>