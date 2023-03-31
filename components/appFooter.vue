<template>
  <footer class="footer">
    <div class="footer__inner">
      <h2>
        <div class="slide-in-left footer__title footer__title--left font_2 t-130 t-regular c-brown-900">{{ $t('footer.dream') }} <span class="t-italic"> {{ $t('footer.events') }}</span></div>
        <div class="slide-in-right footer__title footer__title--right font_2 t-130 t-regular c-brown-900"><span class="t-italic">{{ $t('footer.live') }}</span> {{ $t('footer.occasions') }}</div>
      </h2>
      <div class="footer__content">
        <div class="footer__logo">
          <nuxt-img src="/svg/logo-vertical.svg"/>
        </div>
        <div class="footer__info">
          <div class="footer__info-box">
            <p class="t-20 c-brown-900 t-light">{{ data.data.attributes.Street }}</p>
            <p class="t-20 c-brown-900 t-light">{{ data.data.attributes.City }} ({{ data.data.attributes.Region }})</p>
            <p class="t-20 c-brown-900 t-light">M <a :href="'mailto:'+data.data.attributes.Email">{{ data.data.attributes.Email }}</a></p>
          </div>
          <div class="footer__info-box">
            <AppSocial />
            <a target="_blank" href="https://www.matrimonio.com" title="Matrimonio.com"><img alt="Matrimonio.com" src="https://www.matrimonio.com/images/sellos/logo-impresa-collaboratrice--pp318916.png" style="border-width:0px; margin-top: 10px;" /></a>
          </div>
          <div class="footer__info-box">
            <a :href="'tel:+39'+ data.data.attributes.Telephone.replace(' ', '')"  class="button button--big button--icon-left"><div class="button__icon"><nuxt-img src="/svg/phone-icon.svg"/></div>{{ data.data.attributes.Telephone }}</a>
            <nuxt-link :to="localePath('/contatti')" class="go-to-link button button--big button--icon-right">{{ $t('footer.prenota') }}<div class="button__icon"><nuxt-img src="/svg/arrow-right.svg"/></div></nuxt-link>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-box">
          <p class="t-15 c-brown-900 t-light">{{ $t('footer.borgo38') }} {{ $t('footer.piva') }} {{ data.data.attributes.Piva }}</p>
        </div>
        <div class="footer__bottom-box">
          <p class="t-15 c-brown-900 t-light">
            <a target="_blank" href="<?= get_permalink(ID_P_PRIVACY)?>">{{ $t('footer.privacy') }}</a>
            •
            <a target="_blank" href="<?= get_permalink(ID_P_COOKIE)?>">{{ $t('footer.cookie') }}</a>
            •
            <a href="javascript:;" class="iubenda-cs-preferences-link">{{ $t('footer.preferences') }}</a>
            •
            <a href="https://www.inmateria.net/" target="__blank">{{ $t('footer.credits') }}</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { find, findOne } = useStrapi4();
const localePath = useLocalePath();

const { data, pending, refresh, error } = await useAsyncData("general", () =>
find("general", {
    populate: "deep",
  })
);
</script>

<style lang="scss" scoped>
.footer{
	background-color: $brown-500;
	padding-top: rvh(312);

	@media screen and (orientation: portrait) {
		padding-top: rvh(312, .2);
	}

	&__inner {

	}

	&__title {

		&--right {
      text-align: right;
      padding-right: rvw(256);

      @media screen and (orientation: portrait) {
        padding-right: rvw(256, .5);
      }
    }

    &--left {
      padding-left: rvw(256);

      @media screen and (orientation: portrait) {
        padding-left: rvw(256, .5);
      }
    }

    &::selection,
    & *::selection {
      background-color: rgba($color: $brown-300, $alpha: .30);
      color: inherit;
    }

		@media screen and (orientation: portrait) {
			font-size: rvh(130, .60);
		}
	}

	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: rvh(70);
		padding-bottom: rvh(132);
   		width: rvw(1408);
		margin: 0 auto;
		border-bottom: rvh(.5) solid $brown-900;

		@media screen and (orientation: portrait) {
			width: rvw(1408, 1.21);
			padding-top: rvh(70, 1.75);
			padding-bottom: rvh(132, .25);
		}
	}

	&__logo {
		width: rvw(120);
		margin-right: rvw(165);

		@media screen and (orientation: portrait) {
			width: rvw(120, 2.6);
			height: rvh(76, 1.61);
			margin-right: rvw(165, 1.12);
		}
	}

	&__info {
		display: flex;
		justify-content: space-between;
		flex: 1;

		@media screen and (orientation: portrait) {
			flex-direction: column;
		}
	}

	&__info-box {

		@media screen and (orientation: portrait) {
			margin-bottom: rvh(35, 1.7);
		}

		p {
			margin: 0;

			a {
				text-transform: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}

		.button {
			display: inline-flex;

			&:nth-of-type(1) {
				margin-right: rvw(35);

				@media screen and (orientation: portrait) {
					margin-right: 0;
					margin-bottom: rvh(22, 1.7);
				}
			}
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

	&__bottom {
		display: flex;
		justify-content: space-between;
		width: rvw(1408);
		margin: 0 auto;
		padding-bottom: rvh(138);

		@media screen and (orientation: portrait) {
			width: rvw(1408, 1.21);
			flex-direction: column;
			align-items: center;
			padding-bottom: rvh(138, .7);
		}
	}

	&__bottom-box {
		padding-top: rvh(16.5);

		@media screen and (orientation: portrait) {
			padding-top: rvh(16.5, 1.65);
		}

		p {
			text-transform: uppercase;
			margin: 0;
		}

		a {
			text-transform: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
}

</style>
