<template>
    <main>

      <Component :is="importDynamicComponent(component.ComponentName)" v-for="(component, index) in components " :key="index" :component="component"/>

    </main>
</template>

<script setup>
const route = useRoute();
const { locale, locales } = useI18n();
const { findOne } = useStrapi4();

/**
 * importDynamicComponent: funzione per importare il componente richiesto da una stringa
 */

const importDynamicComponent = (name) => {
  let comp = resolveComponent(name)
  return comp
}

const { data, pending, refresh, error } = await useAsyncData("page", () =>
findOne("pages", route.params.slug, {
    populate: "deep",
    locale: locale.value,
  })
);

// Se c'è un errore nel fetch si apre la pagina ./error.vue
if(error.value) {
throw createError({
    statusCode: error.value.error.status,
    message: error.value.error.message,
    fatal: true
  })
}

// Se non ci sono errori la pagina viene creata
const components = data.value.data.attributes.Content || {}
const localizations = data.value.data.attributes.localizations.data || {}

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
    },
  }
})
</script>

<style lang="scss" scoped>
  main {
    padding-top: rvh(170);
  }
</style>
