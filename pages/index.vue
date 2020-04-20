<template>
  <section class="section">
    <div class="columns is-mobile">
      <AppHeader pagetitle="OpenVue" pagesubtitle="A short description of OpenVue" />
    </div>
  </section>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader'

export default {
  name: 'HomePage',
  components: {
    AppHeader
  },

  data () {
    return {
      pageTitle: 'Home Page'
    }
  }
}
</script>
