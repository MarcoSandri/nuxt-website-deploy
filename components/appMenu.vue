<template>

  <div class="menu">
    <div class="menu__inner">
      <div class="menu__links">
        <ul class="menu__items" v-if="menuItems">
          <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">
            <NuxtLink @click="opened = false" :to="localePath('/' + menuItem.Page.data.attributes.Slug)" class="t-80 font_2 c-brown-900">{{ menuItem.Label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="menu__info">
        <div class="menu__info-box">
          <p class="t-20 c-brown-900 t-light">{{ general.data.attributes.Street }}</p>
          <p class="t-20 c-brown-900 t-light">{{ general.data.attributes.City }} ( {{ general.data.attributes.Region }} )</p>
          <p class="t-20 c-brown-900 t-light">M <a target="_blank" :href="'mailto:'+general.data.attributes.Email">{{ general.data.attributes.Email }} </a></p>
        </div>
        <div class="menu__info-box">
          <AppSocial />
        </div>
      </div>
      <div class="menu__contacts">
        <a :href="'tel:+39'+general.data.attributes.Telephone.replace(' ', '')" class="button button--big button--icon-left"><div class="button__icon"><nuxt-img src="/svg/phone-icon.svg"/></div>{{ general.data.attributes.Telephone }}</a>
        <NuxtLink :to="localePath('/contatti')" class="go-to-link button button--big button--icon-right menu__book">{{ $t('header.prenota') }}<div class="button__icon"><nuxt-img src="/svg/arrow-right.svg"/></div></NuxtLink>
      </div>
    </div>
  </div>

</template>

<script setup>
const { find, findOne } = useStrapi4();
const localePath = useLocalePath();
let opened = menuOpened()

const { data : general, pending: generalPending, refresh: generalRefresh, error: generalError } = await useAsyncData("general", () =>
find("general", {
    populate: "deep",
  })
);

const { data : menu, pending: menuPending, refresh: menuRefresh, error: menuError } = await useAsyncData("menus", () =>
findOne("menus", 'MainMenu', {
    populate: ["deep"],
  })
);

console.log(menu.value.data.attributes.MenuItem);

const menuItems = menu.value.data.attributes.MenuItem

</script>

<style lang="scss" scoped>

.menu {
  padding-left: rvw(111);
  padding-top: rvh(145);
  padding-bottom: rvh(72);
  padding-right: rvw(123);

  @media screen and (orientation: portrait) {
    padding-top: rvh(145, 1.2);
    padding-bottom: rvh(72, .7);
  }

  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__links {
    height: rvh(480);

    @media screen and (orientation: portrait) {
      padding-bottom: rvh(30);
    }
  }

  &__items {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item {
    transition: color .2s;

    // &:hover {
    //   color: $brown-700;
    //   text-decoration-line: underline;
    //   text-decoration-thickness: rvh(2);
    //   text-underline-offset: rvh(5);
    // }

    a {
      display: block;
      position: relative;
      overflow: hidden;
      width: min-content;

      &:hover {
        color: $brown-700;
      }
    }

    & a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: rvh(2);
      background-color: $brown-700;
      opacity: 0;
      transition: opacity .2s, transform .3s;
    }


    & a::after {
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }

    & a:hover::after,
    & a:focus::after{
      transform: translate3d(0, 0, 0);
    }

  }

  &__contacts {
    display: flex;
    justify-content: space-between;
    height: rvh(105);

    @media screen and (orientation: portrait) {
      .button {
        padding: 0 rvw(28, 2.9);
        &__icon {
          display: none;
        }
      }
    }
  }


  &__info {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
    align-items: center;
    width: rvw(406);

		@media screen and (orientation: portrait) {
			flex-direction: column;
      align-items: flex-start;
      width: 100%;
		}
	}

	&__info-box {

		@media screen and (orientation: portrait) {
			margin-bottom: rvh(35, 1.7);
		}

		p {
			margin: 0;
		}
	}

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