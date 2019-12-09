<template>
  <div class="about">
    <h3>我是讲述者</h3>
    <img class="author-pic" src="../assets/author.png"/>
<p>
  <van-button color="#7232dd" plain @click="showPopup">喜马拉雅FM</van-button>
</p>
<van-popup v-model="show">
  <img src="../assets/xmly.jpeg" />
</van-popup>
<section>
<p>我是讲述者</p>
<p>是位声音爱好者。</p>
<p>喜欢好的故事，喜欢好的声音。</p>
<p>这是我业余时间的作品，故事版权为图书作者所有</p>
<p>仅供娱乐，无商业用途，如有冒犯联系必删</p>
<p>你有好的故事可以告诉我</p>
<p>我愿意讲述它</p>
<p>感谢支持</p>
</section>
<Nav/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'about',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  },
  components: {
    Nav
  }
}
</script>
<style lang="stylus" scoped>
.about
  section
    height 10.71em
    overflow scroll
  .author-pic
    width 10.71em
    border-radius 10.71em
  .van-popup
    img
      width 25em
</style>
