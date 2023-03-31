<template>
    <div>
      <h1>{{ error.statusCode }}</h1>
      <h2>{{ error.statusMessage }}</h2>
      <pre>{{ error.message }}</pre>
      <pre>{{ error.cause }}</pre>
      <NuxtLink :to="localePath('/')"> Torna alla homePage </NuxtLink>
    </div>
  </template>
  
  <script setup>
    const { locale, locales } = useI18n()
    const error = useError();
    const localePath = useLocalePath()

  </script>
  
  <style scoped lang="scss">
  </style>