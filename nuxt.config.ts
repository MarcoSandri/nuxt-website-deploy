// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    gmapsApiKey: process.env.GMAPS_API_KEY
  },
  // * Load modules here
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/strapi',
    '@nuxt/image-edge',
    'nuxt-mail',
  ],
  mail: {
    message: {
      to: 'admin@nuxt-base.com',
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    },
  },
  // * Nuxt image configuration
  image: {
    // * Domain is mandatory to modify external images
    domains: ['res.cloudinary.com']
  },
  // * i18n configuration
  i18n: {
    strategy: 'prefix_except_default',
    // * Locales in assets/i18n
    locales: [
      {
        code: 'it',
        file: 'it.json'
      },
      {
        code: 'en',
        file: 'en.json'
      },
    ],
    langDir: 'assets/i18n',
    // * Set up default locale code
    defaultLocale: 'it',
    dynamicRouteParams: true,
  },

  // * Strapi configuration
  strapi: {
    url: process.env.API_ENDPOINT,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  css: [
    // '@/assets/scss/resetscss.scss',
    '@/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            `@import "@/assets/scss/variables.scss";`,
        }
      }
    }
  }
})
