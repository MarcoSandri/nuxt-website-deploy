<template>
    <main>

      <Component :is="importDynamicComponent(component.ComponentName)" v-for="(component, index) in components " :key="index" :component="component"/>
      
    </main>
</template>

<script setup>
  const route = useRoute();
  const { locale, locales } = useI18n();
  const { find } = useStrapi4();


  const importDynamicComponent = (name) => {
    let comp = resolveComponent(name)
    return comp
  }

  const { data, pending, refresh, error } = await useAsyncData("system", () =>
    find("system", {
      populate: "deep",
      locale: locale.value,
    })
  );

  console.log(error)

  const components = data.value.data.attributes.HomePage.data.attributes.Content || {}
  const localizations = data.value.data.attributes.HomePage.data.attributes.localizations.data || {}

  const slugs = {}

  localizations.forEach((element) => {
    let locale = element.attributes.locale;
    slugs[locale] = { 'slug': element.attributes.Slug }
  });

  if(data.value) {
    route.meta.nuxtI18n = slugs || {}
  }


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
  
<style scoped lang="scss">
  main {
    padding-top: rvh(170);
  }
</style>