<template>
  <div class='source-list'>
    <p>
      <van-button color='#7232dd' plain @click='showPopup'>列表</van-button>
    </p>
    <div class='popup' :class='{ active: show }' @click='showPopup'>
      <p>X</p>
      <van-row>
        <van-col span='2'></van-col>
        <van-col span='2'></van-col>
        <van-col span='8'>歌曲</van-col>
        <van-col span='6'>歌手</van-col>
        <van-col span='6'>时长</van-col>
      </van-row>
      <div class='list-box'>
        <!-- <van-row class='playing-style'>
          <van-col span='2'>
            <img src='../assets/wave.gif' />
          </van-col>
          <van-col span='2'>1.</van-col>
          <van-col span='8'>勘破西游</van-col>
          <van-col span='6'>安东西北</van-col>
          <van-col span='6'>18:00</van-col>
        </van-row>-->
        <van-row v-for='(item,index) in lists' :key='item.id' @click="play(index)" :class='{ playingStyle:index == focus }'>
          <van-col span='2' class="wavehide" :class='{ wave:index == focus }'><img src='../assets/wave.gif' /></van-col>
          <van-col span='2'>{{item.id}}</van-col>
          <van-col span='8'>{{item.name}}</van-col>
          <van-col span='6'>{{item.author}}</van-col>
          <van-col span='6'>{{item.totalTime}}</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'SourceList',
  data () {
    return {
      show: false,
      focus: '0',
      lists: []
    }
  },
  props: {
    msg: String
  },
  mounted () {
    this.lists = store.state.allLists
    this.focus = store.state.playIndex
  },
  methods: {
    showPopup () {
      this.show = !this.show
      this.lists = store.state.allLists
      this.focus = store.state.playIndex
    },
    play (index) {
      this.focus = index
      store.commit('setPlaySource', index)
    }
  }
}
</script>

<style lang="stylus">
.playingStyle {
  background: #ccc;
}
.wavehide {
  visibility hidden
}
.wave{
  visibility visible
}
.source-list {
  .van-row {
    margin-top: 0.71em;
    line-height: 2.8em;
  }
}

.popup {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0;
  height: 0;
  padding-bottom: 0;
  overflow: scroll;
  background: #e4e4e4;
  z-index 10
}

.active {
  width: 100%;
  height: 100%;
  transition-property: all;
  transition-duration: 1s;
}
</style>
