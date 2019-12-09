<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">听《勘破西游》</router-link> |
      <router-link to="/about">讲述者</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus" scoped>
#app
  font-family "Arial","Microsoft YaHei","黑体","宋体",sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 2.14em
  font-size 14px
</style>
