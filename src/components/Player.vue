<template>
  <div class='player'>
    <div class='contrl-btn'>
      <div class='minor-btn' @click='preMedia'>
        <van-icon name='arrow-left' />
      </div>
      <div class='first-btn' @click='playMedia'>
        <div class='ani-pic' :class='{playingAni:playing}'></div>
        <van-icon name='pause' v-if='playing' />
        <van-icon name='play' v-else />
      </div>
      <div class='minor-btn' @click='nextMedia'>
        <van-icon name='arrow' />
      </div>
    </div>
    <p>下载地址：{{source}}</p>
    <audio
      type='audio/mpeg'
      src
      controls
      @progress='onprogress'
      @loadstart='onloadstart'
      @canplay='oncanplay'
      @play='onplay'
      @pause='onpause'
      @playing='onplaying'
      @abort='onabort'
      @ended='onended'
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      playing: false,
      currentTime: ''
    }
  },
  props: {
    source: String
  },
  mounted () {
    console.log('player mounted')
  },
  beforeDestroy () {
    console.log('player beforeDestroy:' + this.currentTime)
    window.localStorage.setItem('currentTime', this.currentTime)
  },
  destroyed () {
    console.log('player destroyed')
  },
  methods: {
    playMedia () {
      if (this.playing) {
        document.querySelector('audio').pause()
        this.playing = false
      } else {
        document.querySelector('audio').play()
        this.playing = true
      }
    },
    setMediaSrc (src) {
      document.querySelector('audio').src = src
    },
    nextMedia () {
      this.$store.commit('nextMedia', { val: true })
    },
    preMedia () {
      this.$store.commit('nextMedia', { val: false })
    },
    onprogress () {
      console.log('player onprogress:' + this.currentTime)
      this.currentTime = document.querySelector('audio').currentTime
    },
    onabort () {
      console.log('onabort')
      this.playing = false
    },
    oncanplay () {
      console.log('oncanplay')
      // if (!isNaN(window.localStorage.currentTime) && window.localStorage.currentTime != null && window.localStorage.currentTime !== '') {
      //   document.querySelector('audio').currentTime = window.localStorage.currentTime
      // }
      document.querySelector('audio').play()
      this.playing = true
    },
    onloadstart () {
      console.log('onloadstart')
    },
    onplay () {
      console.log('onplay')
    },
    onplaying () {
      console.log('onplaying')
      this.playing = true
    },
    onended () {
      console.log('onended')
      this.playing = false
      this.nextMedia()
    },
    onpause () {
      this.playing = false
    }
  },
  watch: {
    source () {
      console.log(this.source)
      this.setMediaSrc(this.source)
    }
  }
}
</script>
<style lang='stylus'>
audio {
  margin: 1em;
}

.contrl-btn {
  width: 100%;
  height: 0px;
  padding-bottom: 50%;
  display: flex;
}

.minor-btn {
  width: 25%;
  height: 0px;
  padding-bottom: 25%;
  margin-top: 3.57em;
  border-radius: 50%;
  background: #f9f9f9;
  position: relative;

  .van-icon {
    color: rgb(114, 50, 221);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.first-btn {
  width: 50%;
  height: 0px;
  padding-bottom: 50%;
  line-height: 50%;
  background: #ccc;
  border-radius: 50%;
  position: relative;

  .ani-pic {
    background: url('../assets/author.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
    border-radius: 100%;
    position: relative;
    top: 0px;
    left: 0px;

    @keyframes rotation {
      from {
        -webkit-transform: rotate(0deg);
      }

      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }

  .playingAni {
    -webkit-transform: rotate(0deg);
    animation: rotation 10s linear infinite;
    -moz-animation: rotation 10s linear infinite;
    -webkit-animation: rotation 10s linear infinite;
    -o-animation: rotation 10s linear infinite;
  }

  p {
    color: #fff;
    position: relative;
    top: -6.85em;
  }

  .van-icon {
    color: #ffffff;
    font-size: 3em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
