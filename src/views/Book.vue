<template>
<div class="book">
  <h3>关于书</h3>
  <img src="../assets/s28785940.jpg"/>
  <div>
  <van-button color="#7232dd" plain @click="opendb" >豆瓣</van-button>
  </div>
  <section>
    <h4>《勘破西游》内容介绍</h4>
    <p>《勘破西游:八十一难皆是局》用全新视角、首创观点品读古典名著《西游记》。一个被绝大多数读者与作家忽略的人物，却是西游世界一切活动的终极BOSS</p><p>是他，化身菩提祖师，培养了孙悟空；是他，一步步将孙悟空引导到天庭的对立面；是他，早就预料到大闹天宫的败局，促成取经行动；是他，培育了猪八戒、牛魔王，逐一将这些棋子布入自己的棋局……西游最神秘的幕后人究竟是谁？这样一个苦心的千年布局，究竟为了什么？而在这个布局之下，西游世界无尽谜团的真相，逐渐浮出水面……</p><p>西游世界其实就是现实世界的折射，取经路上的降妖伏魔，其实正是天庭高层争斗的缩影。各种看似天衣无缝的布局，各种苦思冥想不得解释的谜团，在作者的笔下都完美解释。</p><p>
数万网友评价：这是迄今为止，看到的最靠谱解读西游作品！</p>
  </section>
<Nav/>
</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'book',
  components: {
    Nav
  },
  methods: {
    opendb () {
      window.open('https://book.douban.com/subject/26810522/')
    }
  }
}
</script>
<style lang="stylus">
.book
  section
    padding 1.42em
    height 15em
    overflow scroll
    margin-top 1em
  p
    text-align left
  img
    width 7.71em
</style>
