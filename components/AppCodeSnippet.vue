<template>
  <div>
    <div class="app-codesnippet">
      <b-button class="copy-code" type="is-small is-primary" @click="copyCode()" ref="copyMyCode">
        Copy
      </b-button>
      <pre><code class="code-to-copy"><slot /></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// TODO: make copy button work
export default Vue.extend ({
  name: 'AppCodeSnippet',
  props: {
    codesnippet: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    copyCode () {
      this.$slots.default.forEach((node) => {
        // Do a console.log(node) to see other
        // property you can access and use.
        console.log(node.elm.textContent);
        // console.log(node);

        // e.g. <div ref="text">
        // this.$slots.text;
        // document.execCommand("copy");
      })
    }
  }
})
</script>

<style lang="scss">
.app-codesnippet {
    position: relative;
  pre {
    border-radius: 6px;
  }
  .copy-code {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
  }
}
</style>
