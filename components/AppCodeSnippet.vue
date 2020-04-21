<template>
  <div>
    <div class="app-codesnippet">
      <b-button size="is-small is-primary copy-code" @click="copyCode()">
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
      const copyCode: any = document.querySelector('.copy-code');
      const copiedCode: any = copyCode.closest('.code-to-copy');

      copiedCode.focus();
      copiedCode.select();

      console.log (copiedCode);
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
