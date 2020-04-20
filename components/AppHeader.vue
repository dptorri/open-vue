<template>
  <div>
    <div class="bd-header-titles">
      <h1 class="title">
        {{ pagetitle }}
      </h1>
      <p class="subtitle is-4">
        An imposing <strong>hero banner</strong> to showcase something
      </p>
    </div>

    <hr>
  </div>
</template>

<script lang="type">
export default {
  name: 'AppHeader',
  props: [
    'pagetitle'
  ]
}
</script>

<style lang="scss">

</style>
