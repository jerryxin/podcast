<template>
  <div class="header">
    <h3>{{id}}{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    id: Number,
    title: String
  }
}
</script>
<style lang="stylus">

</style>
