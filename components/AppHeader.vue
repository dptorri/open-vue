<template>
  <div>
    <div class="bd-header-titles">
      <h1 class="title">
        {{ pagetitle }}
      </h1>
      <p class="subtitle is-4">
        {{ pagesubtitle }}
      </p>
    </div>

    <hr>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  props: {
    pagetitle: {
      type: String,
      default: ''
    },
    pagesubtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">

</style>
