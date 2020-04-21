<template>
  <div>
    <div class="container">
      <nav
        class="navbar header has-shadow is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="/"
          >
            <img
              src="~assets/open-view-white.svg"
              alt="OpenVue"
              height="28"
            >
          </a>

          <div class="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    </div>
    
    <div class="container">
      <section class="main-content columns is-mobile">
        <aside class="column is-4 section">
          <p class="menu-label is-hidden-touch">
            General
          </p>
          <ul class="menu-list">
            <li
              v-for="(item, key) of items"
              :key="key"
            >
              <nuxt-link
                :to="item.to"
                exact-active-class="is-active"
              >
                <!-- <b-icon :icon="item.icon" /> {{ item.title }} -->
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </aside>

        <div class="container column is-8">
          <nuxt />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Button',
          to: { name: 'button' }
        },
        {
          title: 'Card',
          to: { name: 'card' }
        },
        {
          title: 'List',
          to: { name: 'list' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">

pre {
  code {
    overflow-x: auto;
    color: #525252;
    white-space: pre;
    padding: 0;
    font-size: 0.85rem;
    line-height: 1.6rem;
    display: block;
  }
}

</style>
