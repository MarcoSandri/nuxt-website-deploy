<template>

  <article class="news-card">
    <nuxt-link :to="localePath('/news/' + article.attributes.Slug)" class="news-card__inner">
      <div class="news-card__cover">
        <nuxt-img :src="article.attributes.Thumbnail.data.attributes.url" :alt="article.attributes.Title" />
      </div>
      <div class="news-card__content">
        <h3 class="news-card__title t-40 t-regular font_2 c-brown-500">{{ article.attributes.Title }}</h3>
        <div class="news-card__date t-18 t-light c-brown-700" v-html="getDate(article.attributes.publishedAt)"></div>
        </div>
    </nuxt-link>
  </article>

</template>

<script setup>

  const props = defineProps({
    article: Object
  })

  const getDate = (isoDate) => {
    const date = new Date(isoDate)
    let dateFormatted = date.getDate() + ' ' + date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear()
    return dateFormatted
  }

</script>

<style lang="scss">
.news-card {
  // height: rvw(600);
  max-width: rvw(450);
  margin: 0 auto;

  @media screen and (orientation: portrait) {
    // height: rvw(600, 3.24);
    max-width: rvw(450, 3.18);
  }

  &__inner {
    height: 100%;
    display: block;

    &:hover {
      .news-card__content {
        background-color: transparent;
      }

      .news-card__title {
        text-decoration-line: underline;
        color: $brown-900;
      }

      .news-card__cover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  &__cover {
    height: rvh(300);
    overflow: hidden;

    @media screen and (orientation: portrait) {
      height: rvw(300, 3.24);
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform .4s;
    }
  }

  &__content {
    border: rvw(1) solid $brown-900;
    min-height: rvh(300);
    background-color: $brown-900;
    transition: background-color .4s;
    display: flex;
    flex-direction: column;

    @media screen and (orientation: portrait) {
      min-height: rvw(300, 3.24);
    }
  }

  &__title {
    padding-top: rvh(33);
    transition: color .4s ease-in;
    text-decoration-thickness: rvh(2);
    text-underline-offset: rvh(5);
    flex-grow: 1;
    width: rvw(355);
    margin: 0 auto;
    line-height: rvw(45);

    @media screen and (orientation: portrait) {
      width: rvw(355, 3.3);
      padding-top: rvh(33, 1.3);
      padding-bottom: rvh(10, 2);
      font-size: rvh(40, 1.05);
      line-height: rvh(45, 1.1);

    }
  }

  &__date {
    height: rvh(56);
    padding-bottom: rvh(33);
    width: rvw(355);
    margin: 0 auto;

    @media screen and (orientation: portrait) {
      width: rvw(355, 3.3);
      padding-bottom: rvh(33, 1.3);
      height: rvh(56, 1.05);

    }
  }
}

</style>