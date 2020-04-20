<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <AppHeader pagetitle="Card Page" pagesubtitle="A short description of card component" />
        <pre><code>import Vue, { VNode } from 'vue'

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
  })</code></pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
