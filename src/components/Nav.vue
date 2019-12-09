<template>
  <div class="nav">
    <van-row type="flex" justify="space-around">
      <van-col span="6"><van-button color="#7232dd" plain to="/">听书</van-button></van-col>
      <van-col span="6"><van-button color="#7232dd" plain to="/about">讲述者</van-button></van-col>
      <van-col span="6"><van-button color="#7232dd" plain to="/book">关于书</van-button></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.nav
  position fixed
  left 0px
  bottom 0.71em
  width 100%
</style>
