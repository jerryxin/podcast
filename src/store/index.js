import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playSource: {
      id: 0,
      name: '',
      src: '',
      author: ''
    },
    allLists: [
      {
        id: 1,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/1.mp3',
        author: '安东西北',
        totalTime: '06:00'
      },
      {
        id: 2,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/2.mp3',
        author: '安东西北',
        totalTime: '07:44'
      },
      {
        id: 3,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/3.mp3',
        author: '安东西北',
        totalTime: '09:35'
      },
      {
        id: 4,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/4.mp3',
        author: '安东西北',
        totalTime: '07:37'
      },
      {
        id: 5,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/5.mp3',
        author: '安东西北',
        totalTime: '10:05'
      },
      {
        id: 6,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/6.mp3',
        author: '安东西北',
        totalTime: '11:10'
      },
      {
        id: 7,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/7.mp3',
        author: '安东西北',
        totalTime: '08:27'
      },
      {
        id: 8,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/8.mp3',
        author: '安东西北',
        totalTime: '08:15'
      },
      {
        id: 9,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/9.mp3',
        author: '安东西北',
        totalTime: '09:29'
      },
      {
        id: 10,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/10.mp3',
        author: '安东西北',
        totalTime: '11:13'
      },
      {
        id: 11,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/11.mp3',
        author: '安东西北',
        totalTime: '09:20'
      },
      {
        id: 12,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/12.mp3',
        author: '安东西北',
        totalTime: '10:14'
      },
      {
        id: 13,
        name: '西游',
        src:
          'http://www.jerryxin.com/demo/tmpfiles/13.mp3',
        author: '安东西北',
        totalTime: '09:48'
      }
    ],
    playIndex: 0
  },
  mutations: {
    setPlaySource (state, index) {
      console.log('index:' + index)
      this.state.playIndex = index
      this.state.playSource = this.state.allLists[index]
      window.localStorage.setItem('playIndex', this.state.playIndex)
    },
    nextMedia (state, bNext) {
      let len = this.state.allLists.length
      if (bNext.val) {
        if (this.state.playIndex >= len - 1) {
          this.state.playIndex = 0
        } else {
          this.state.playIndex++
        }
      } else {
        if (this.state.playIndex <= 0) {
          this.state.playIndex = len - 1
        } else {
          this.state.playIndex--
        }
      }
      window.localStorage.setItem('playIndex', this.state.playIndex)
      this.state.playSource = this.state.allLists[this.state.playIndex]
    }
  },
  actions: {
  },
  modules: {
  }
})
