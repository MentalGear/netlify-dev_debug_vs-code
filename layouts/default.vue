<template>
  <div>
    <!-- Navbar Top -->
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <!-- <img src="~assets/buefy.png" alt="Buefy" height="28" /> -->
          <h1 class="subtitle has-text-white">Netlify Dev Debug VS Code</h1>
          <!-- <h2 class="subtitle has-text-white">Subtitle</h2> -->
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <!-- Container -->
    <section class="main-content columns">
      <!-- Sidebar -->

      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
              class="is-flex is-align-items-center"
            >
              <b-icon :icon="item.icon" />
              <span class="ml-2">{{ item.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </aside> -->

      <!-- Page Content -->
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Analyzer',
          icon: 'web',
          to: { name: 'index' },
        },
        // {
        //   title: 'Invite Colleague',
        //   icon: 'email',
        //   to: { name: 'invite' },
        // },
        // {
        //   title: 'Data Extraction',
        //   icon: 'web',
        //   to: { name: 'dataExtraction' },
        // },
        // {
        //   title: 'Home',
        //   icon: 'home',
        //   to: { name: 'index' },
        // },
        // {
        //   title: 'Inspire',
        //   icon: 'lightbulb',
        //   to: { name: 'inspire' },
        // },
      ],
    }
  },
}
</script>
