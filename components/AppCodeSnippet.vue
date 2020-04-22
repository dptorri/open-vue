<template>
  <div>
    <div class="app-codesnippet" ref="code-snippet">
      <b-button 
      class="copy-code" 
      type="is-small is-primary" 
      @click="copyCode()" 
      ref="copyMyCode">
        Copy
      </b-button>
      <pre><code class="code-to-copy" ref="codeToCopy"><slot /></code></pre>
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
      const copiedCode: Element = this.$refs.codeToCopy.innerText;
      const codeElement: any = document.createElement("textarea");
      
      codeElement.value = copiedCode;     
      document.body.appendChild(codeElement);
      codeElement.select();
      document.execCommand("copy");
      codeElement.remove();
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
