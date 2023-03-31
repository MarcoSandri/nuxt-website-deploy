<template>
    <div>
        <div :class="loaded? 'loaded': ''" class="loader" />
    </div>
</template>

<script setup>
  let loaded = useLoaded()

  onMounted(()=> {
    loaded.value = true
  })
</script>

<style lang="scss" scoped>
  .loader {
      width: 100vw;
      height: 100vh;
      background-color: $white;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 1;
      transition: opacity .4s, z-index 0s .4s;
      pointer-events: none;
      z-index: 99999;


      &.loaded {
        opacity: 0;
        z-index: -999999;
      }
  }   
</style>