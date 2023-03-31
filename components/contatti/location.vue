<template>

  <section class="contatti-location">
    <div class="contatti-location__inner">

      <div class="contatti-location__text">
        <div class="sec-name fade-in-top">{{ $t('contatti.dove') }}</div>
          <div class="splitText-slide-in-top contatti-location__description t-22 font_1 c-brown-900 t-light" v-html="component.Description"></div>
          <div class="fade-in-stagger contatti-location__info t-40 font_2 c-brown-900">
            <p class="fade-in-stagger__element">{{ data.data.attributes.Street }} - {{ data.data.attributes.ZipCode }}</p>
            <p class="fade-in-stagger__element">{{ data.data.attributes.City }} {{ data.data.attributes.Region }} </p>
            <br>
            <p class="fade-in-stagger__element">M <a :href="'mailto:' + data.data.attributes.Email">{{ data.data.attributes.Email }}</a></p>
            <p class="fade-in-stagger__element">T <a :href="'tel:+39'+data.data.attributes.Telephone.replace(' ', '')">{{ data.data.attributes.Telephone }}</a></p>
            <br>
            <a href="#contact-form" class="go-to-link font_1 button button--big button--icon-right">{{ $t('contatti.prenota') }}<div class="button__icon"><nuxt-img src="/svg/arrow-down.svg" /></div></a>
          </div>
      </div>

      <div class="contatti-location__map">
          <div id="map"></div>
      </div>
      
    </div>
  </section>

</template>

<script setup>
import mapStyle from 'assets/gmap/mapStyle.js'
import { Loader } from "@googlemaps/js-api-loader"

const { find } = useStrapi4();
const config = useRuntimeConfig()

console.log(config.gmapsApiKey);
defineProps({
  component : Object
})

const { data, pending, refresh, error } = await useAsyncData("general", () =>
  find("general", {
      populate: "deep",
  })
);

const loader = new Loader({
  apiKey: "AIzaSyDBNSCfFy18-2NoEoM57LkV8uBVQxgPGGo",
  // apiKey: config.gmapsApiKey,
  version: "weekly",
});

onMounted(()=>{
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
      center: mapStyle.coord,
      zoom: 13,
      styles: mapStyle.mapStyle.style,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: mapStyle.coord,
      icon: mapStyle.mapStyle.marker,
      map: map,
    });
  });
})

</script>


<style lang="scss">

.contatti-location {
    height: 100vh;
    background-color: $brown-500;

    @media screen and (orientation: portrait) {
        height: auto;
    }

    &__inner {
        height: 100%;
        display: flex;
        align-items: center;

        @media screen and (orientation: portrait) {
            flex-direction: column-reverse;
        }
    }

    &__text {
        width: 50%;
        padding-left: rvw(256);

        @media screen and (orientation: portrait) {
            width: 100%;
            padding-left: rvw(256, .42);
            padding-right: rvw(256, .42);
        }
    }

    .sec-name {
        text-align: start;

        @media screen and (orientation: portrait) {
            padding-top: rvh(33, 1.65);
        }
    }

    &__description {
        width: rvw(550);
        margin-bottom: rvh(70);

        @media screen and (orientation: portrait) {
            width: 100%;

        }
    }

    &__info {

        @media screen and (orientation: portrait) {
            font-size: rvh(40);
            line-height: rvh(48);
            margin-bottom: rvh(60);
        }

        p {
            margin: 0;

            a {
                transition: all .2s;
                &:hover {
                    color: $brown-700;
                    text-decoration: underline;
                    text-decoration-thickness: rvh(2);
                    text-underline-offset: rvh(5);
                }
            }
        }
    }

    &__map {
        width: 50%;
        height: 100%;
        border-top-left-radius: rvw(474.5);
        overflow: hidden;
        transform: translateZ(0);

        @media screen and (orientation: portrait) {
            width: rvw(352, 5.12);
            margin-top: rvh(95, 1.63);
            height: rvh(400, 1.6);
            margin-left: rvw(256, .5);
            border-top-left-radius: rvw(474.5, 1.9);
        }
    }

    #map {
        width: 100%;
        height: 100%;
    }

}

</style>