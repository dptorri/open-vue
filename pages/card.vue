<template>
  <section class="section">
    <AppHeader pagetitle="Card Page" pagesubtitle="A short description of card component" />

    <AppCodeSnippet>import Vue, { VNode } from 'vue'

const Component = Vue.extend({
data () {
return {
msg: 'Hello'
}
},
methods: {
// need annotation due to `this` in return type
greet (): string {
return this.msg + ' world'
}
}
// `createElement` is inferred, but `render` needs return type
render (createElement): VNode {
return createElement('div', this.greeting)
}
})</AppCodeSnippet>

<AppCodeSnippet>some other code</AppCodeSnippet>
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

<style lang="scss">

</style>
