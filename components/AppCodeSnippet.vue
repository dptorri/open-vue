<template>
  <div>
    <div class="app-codesnippet">
      <b-button size="is-small is-primary copy-code" :click="copyCode">
        Copy
      </b-button>
      <pre><code><slot /></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
// TODO: make copy button work
export default {
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
    justConsole () {
      return 'the fuck';
    }
  },
  methods: {
    copyCode () {
      return 'button clicked'
    }
  }
}
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
