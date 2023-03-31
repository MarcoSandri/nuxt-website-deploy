<template>
  <div class="socials">
    <a v-for="social in socials" :key="social.id" :href="social.socialLink" class="socials__link t-20 c-brown-900 t-light" target="_blank"> {{ social.socialTitle }} </a>
  </div>
</template>

<script setup>
  const { find, findOne } = useStrapi4();

  const { data, pending, refresh, error } = await useAsyncData("social", () =>
  find("social", {
      populate: "deep",
    })
  );

  const socials = data.value.data.attributes.socialLink
</script>

<style lang="scss" scoped>
  .socials {
    &__link {
      text-decoration: underline;
      display: block;

      &:hover {
        text-decoration: underline;
        color: $brown-700;
      }
    }
  }
</style>