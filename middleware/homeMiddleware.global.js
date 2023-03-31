export default defineNuxtRouteMiddleware((to, from) => {
    const localePath = useLocalePath()

        // Redirect da tutti gli slug nell'array paths a index.vue

    const paths = [
        '/home',
        '/it/home',
        '/es/home',
    ]
  
    if(paths.indexOf(to.fullPath) > -1) {
        return navigateTo(localePath('/'))
    }
})
