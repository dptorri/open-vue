<template>
  <section class="section">
    <div class="columns is-mobile">
      <AppHeader pagetitle="Button" pagesubtitle="A short description of card component" />
    </div>
  </section>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader'
import AppCodeSnippet from '~/components/AppCodeSnippet'

export default {
  components: {
    AppHeader,
    AppCodeSnippet
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass">

</style>
