<template>
  <div class="home">
    <Header :title="name" :id="id" />
    <Player :source="source"/>
    <SourceList></SourceList>
    <Nav></Nav>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Player from '@/components/Player.vue'
import SourceList from '@/components/SourceList.vue'
import Nav from '@/components/Nav.vue'
// import store from '../store'

export default {
  name: 'home',
  data () {
    return {
      id: 0,
      name: '',
      source: ''
    }
  },
  components: {
    Header,
    Player,
    SourceList,
    Nav
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    if (!isNaN(window.localStorage.playIndex)) {
      this.$store.commit('setPlaySource', parseInt(window.localStorage.playIndex))
    } else {
      this.$store.commit('setPlaySource', 0)
    }
  },
  destroyed () {
    console.log('destroyed')
    this.$store.state.playSource = ''
  },
  watch: {
    '$store.state.playSource' (newObj, oldObj) {
      console.log('newObj:' + JSON.stringify(newObj))
      console.log('oldObj:' + JSON.stringify(oldObj))
      this.name = newObj.name
      this.id = newObj.id
      this.source = newObj.src
    }
  }
}
</script>
<style lang="stylus">

</style>
