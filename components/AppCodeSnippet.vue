<template>
  <div>
    <div class="app-codesnippet">
      <b-button type="is-small is-primary copy-code" @click="copyCode()" ref="copyMyCode">
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
      const copyCode: any = this.$refs.copyMyCode;
      // const copiedCode: any = copyCode.closest('.code-to-copy');
      // copiedCode.focus();
      // copiedCode.select();

      console.log (copyCode);
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
