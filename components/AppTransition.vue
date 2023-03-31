<template>
    <div class="transition" :class="transition">
    </div>
</template>

<script setup>
const transition = useTransition()
</script>

<style scoped lang="scss">
    .transition {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        width: 100vw;
        height: 100vh;
        z-index: 999999;
        background-color: $white;
        opacity: 0;
        transition: opacity .5s;
        pointer-events: none;

        &.onEnter {
            opacity: 0;
        }

        &.onLeave {
            opacity: 1;
        }
    }

</style>