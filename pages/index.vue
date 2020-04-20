<template>
  <section class="section">
    <AppHeader pagetitle="OpenVue" pagesubtitle="A short description of OpenVue" />
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
