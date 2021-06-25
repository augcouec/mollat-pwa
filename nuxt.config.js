export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  head: {
    title: 'mollat-pwa-V1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ['~/assets/styles/main'],
  styleResources: {
    scss: ['assets/styles/main.scss'],
  },
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Mollat',
      short_name: 'Mollat',
      lang: 'en',
      display: 'fullscreen',
      background_color: '#FFF',
    },
    icon: {
      /* icon options */
    },
    meta: {
      mobileAppIOS: 'apple-mobile-web-app-capable',
      title: 'Mollat PWA',
      author: 'Groupe 6 ECV',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
