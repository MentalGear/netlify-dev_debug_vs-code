import { publicEnvVars } from './envVarsDefinition'

export default {
  // NOTE Environment: dotenv .env alternative that nuxt uses
  // vars can be used with $config.var
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config

  // Public Env Vars: all env variables that are public as these will be exposed on the frontend.
  publicRuntimeConfig: publicEnvVars,
  // Secret Env Vars
  privateRuntimeConfig: {
    // >>> DO NOT PUT ANTTHING HERE <<<
    // The Backend uses serverless functions that do not have access to this
    // use secretEnvVars instead, see README.md
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Example',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://sentry.nuxtjs.org
    '@nuxtjs/sentry',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // === MODULE SETTINGS

  // --- Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/', // IMPORTANT: keep baseURL to make it work with CORS and netlify dev commands to run serverlessFunctions locally
    retry: { retries: 3 },
  },

  // --- Sentry.io: error reporting & log monitoring
  // Options: https://github.com/nuxt-community/sentry-module/blob/744bafbeb55741ffeef93c6c62f2d73ef4e93037/lib/module.js
  // sentry: {
  //   disabled: publicEnvVars.appContext === 'development', // will be false for tests e.g. allows integration test
  //   dsn: '',

  //   // release: is automatically inferred from the local repo .package.json unless specified manually,
  //   publishRelease: true,
  //   repo: '',
  //   attachCommits: true,
  //   sourceMapStyle: 'hidden-source-map',
  //   config: {
  //     // native swentry config Options
  //     // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
  //     environment: publicEnvVars.appContext,
  //     /* eslint-disable object-shorthand */
  //     beforeSend: function (event) {
  //       // Check if it is an exception, and if so, show the report dialog
  //       if (event.exception) {
  //         // native Sentry JS Bug Reporter
  //         // https://docs.sentry.io/platforms/javascript/guides/vue/enriching-events/user-feedback/
  //         // eslint-disable-next-line no-undef
  //         Sentry.showReportDialog({ eventId: event.event_id })
  //       }
  //       return event
  //     },
  //     /* eslint-enable */
  //   },
  // },
}
