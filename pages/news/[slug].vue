<template>
  <main>
    <NewsIntro :article="data.data.attributes"></NewsIntro>
  </main>
</template>

<script setup>
  const route = useRoute();
  const { locale, locales } = useI18n();
  const { findOne } = useStrapi4();

  const { data, pending, refresh, error } = await useAsyncData("article", () =>
  findOne("articles", route.params.slug, {
      populate: "deep",
      locale: locale.value,
    })
  );

  definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onEnter: (el, done) => {
      const transition = useTransition();
      transition.value = 'onEnter'
      
      setTimeout(() => {
        done()
      }, 500);
    },
    onLeave(el, done) {
      const transition = useTransition();
      transition.value = 'onLeave'

      setTimeout(() => {
        done()
      }, 500);
    }
  }
})
</script>

<style lang="scss">
  main {
    padding-top: rvh(170);
  }
</style>