<template>

  <section class="gallery-images">
      <div class="gallery-images__inner">
          <h1 class="sec-name fade-in-top">{{ $t('gallery.gallery') }}</h1>
          <div class="splitText-slide-in-top gallery-images__description t-40 c-brown-900 font_2 t-center" v-html="component.Description"></div>
          <div class="gallery-images__gallery">
            <div v-for="(row,index) in component.Images" :key="index" class="gallery-images__images-row" :class="row.RowType? row.RowType : 'gallery-images__images-row--three'">
              <div target="__blank" class="gallery-images__single-image"  v-for="(image,index) in row.Images.data" :key="index">
                <nuxt-img format="webp" :src="image.attributes.url" :alt="image.attributes.alternativeText" />
              </div>
            </div>
          </div>
      </div>
      <div id="gallery__cursor"> <nuxt-img src="/svg/plus-icon-brown-500.svg" /> </div>
  </section>
  
  
  </template>
  
  <script setup>
  
  defineProps({
    component: Object
  })
  
  </script>
  
  <style lang="scss">
  
  .gallery-images {
      padding-top: rvh(209);
  
      &__inner {
          width: rvw(1697);
          margin: 0 auto;
      }
  
      &__description {
          width: rvw(1122);
          margin: 0 auto;
  
          @media screen and (orientation: portrait) {
              width: rvw(1122, 1.55);
          }
      }
  
      &__gallery {
          display: flex;
          flex-wrap: row;
          flex-wrap: wrap;
  
          @media screen and (orientation: portrait) {
              padding-bottom: rvh(100);
          }
      }
  
      &__images-row {
          margin: rvh(50) 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
  
          @media screen and (orientation: portrait) {
              flex-wrap: wrap;
              margin: rvh(50) 0;
          }
  
          &--three {
              height: rvh(978);
  
              @media screen and (orientation: portrait) {
                  // height: rvh(978, .81);
                  height: auto;
              }
  
              .gallery-images__single-image {
                  display: block;
                  width: rvw(480);
                  height: rvh(720);
  
                  @media screen and (orientation: portrait) {
                      // width: rvw(480, 1.43);
                      // height: rvh(720, .45);
                      width: rvw(550, 2);
                      height: rvh(703, .64);
                  }
  
                  &:nth-of-type(1) {
                      align-self: flex-start;
                  }
  
                  &:nth-child(2) {
                      align-self: flex-end;
  
                      @media screen and (orientation: portrait) {
                          margin-left: auto;
                      }
                  }
  
                  &:nth-child(3) {
                      margin-top: rvh(14) ;
                      align-self: flex-start;
  
                      @media screen and (orientation: portrait) {
                          margin-top: 0;
                          margin-left: rvw(57, 5.15);
                          align-self: flex-end;
                      }
                  }
              }
          }
  
          &--two-horizontal {
              height: rvh(584);
  
              @media screen and (orientation: portrait) {
                  height: rvh(584, 1.13);
              }
  
              .gallery-images__single-image {
                  width: rvw(694);
                  height: rvh(462);
  
                  @media screen and (orientation: portrait) {
                      width: rvw(694, 2);
                      height: rvh(462, .63);
                  }
  
                  &:nth-of-type(1) {
                      align-self: flex-start;
                  }
  
                  &:nth-of-type(2) {
                      align-self: flex-end;
  
                      @media screen and (orientation: portrait) {
                          margin-left: auto;
                      }
                  }
              }
  
          }
  
          &--horizontal-round,
          &--horizontal-round-reverse {
              height: rvh(860);
  
              @media screen and (orientation: portrait) {
                  height: rvh(860, .94);
              }
          }
  
          &--horizontal-round {
  
              .gallery-images__single-image:nth-of-type(1) {
                  width: rvw(980);
                  height: rvh(653);
                  align-self: flex-end;
  
                  @media screen and (orientation: portrait) {
                      width: rvw(980, 1.42);
                      height: rvh(653, .45);
                      align-self: flex-start;
  
                  }
              }
  
              .gallery-images__single-image:nth-of-type(2) {
                  border-top-right-radius: 100vh;
                  border-top-left-radius: 100vh;
                  width: rvw(550);
                  height: rvh(703);
                  align-self: flex-start;
  
                  @media screen and (orientation: portrait) {
                      width: rvw(550, 2);
                      height: rvh(703, .64);
                      margin-left: auto;
                      align-self: flex-end;
                  }
              }
  
          }
  
          &--horizontal-round-reverse {
  
              .gallery-images__single-image:nth-of-type(1) {
                  border-top-right-radius: 100vh;
                  border-top-left-radius: 100vh;
                  width: rvw(550);
                  height: rvh(703);
                  align-self: flex-start;
  
                  @media screen and (orientation: portrait) {
                      width: rvw(550, 2);
                      height: rvh(703, .64);
                  }
              }
  
              .gallery-images__single-image:nth-of-type(2) {
                  width: rvw(980);
                  height: rvh(653);
                  align-self: flex-end;
  
                  @media screen and (orientation: portrait) {
                      width: rvw(980, 1.42);
                      height: rvh(653, .45);
                      margin-left: auto;
                  }
              }
          }
      }
  
      &__single-image {
          overflow: hidden;
          cursor: none;
          img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
      }
  
  
      #gallery__cursor {
          width: rvw(100);
          height: rvw(100);
          background-color: $brown-700;
          color: $brown-500;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          z-index: 1;
          font-size: rvw(80);
          pointer-events: none;
          font-family: $font_1;
          font-weight: 100;
          transform: translate(-50%, -50%) scale(0);
          position: fixed;
          left: 0;
          top: 0;
          opacity: 0;
  
          svg {
              width: rvw(35);
          }
  
          @media screen and (orientation: portrait) {
              display: none;
          }
      }
  }
  
  .lightboxOverlay {
      background-color: transparent;
      opacity: 1;
      backdrop-filter: brightness(0.4) blur(8px) !important;
  }
  
  .lightbox .lb-image {
      border: none;
      border-radius: 0;
  }
  
  .lb-outerContainer {
      border-radius: 0;
      background-color: $brown-900;
  }
  
  .lb-nav a.lb-next {
      width: rvw(30);
      background: url('../images/arrow-right-brown-300.svg') center no-repeat;
      opacity: 1;
      transform: translateX(calc(100% + rvw(100)));
  
      @media screen and (orientation: portrait) {
          width: rvw(30, 7.2);
          height:  rvw(30, 7.2);
          transform: translateX(0) translateY(100%);
          position: absolute;
          bottom: 0;
      }
  }
  
  .lb-nav a.lb-prev {
      width: rvw(30);
      background: url('../images/arrow-left-brown-300.svg') center no-repeat;
      opacity: 1;
      transform: translateX(calc(-100% - rvw(100)));
  
      @media screen and (orientation: portrait) {
          width: rvw(30, 7.2);
          height:  rvw(30, 7.2);
          transform: translateX(0) translateY(100%);
          position: absolute;
          bottom: 0;
      }
  }
  
  .lb-dataContainer {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
  }
  
  .lb-data .lb-close {
      width: rvw(42);
      height: rvw(42);
      transform: translateY(-100%);
      background: url('../images/close-icon-brown-300.svg') center no-repeat;
  
      @media screen and (orientation: portrait) {
          width: rvw(42, 5.25);
          height: rvw(42, 5.25);
      }
  }
  
  
  </style>