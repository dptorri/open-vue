<template>
  <div>
    <div class="app-codesnippet">
      <span>Copy</span>
      <pre><code><slot></slot></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
// TODO: make copy button work
export default ({
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
  }
})
</script>

<style lang="scss">
.app-codesnippet {
    .copy-code {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>
