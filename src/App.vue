<template>
  <div id="app">
    <header-menu/>
    <router-view/>
  </div>
</template>

<script>
import HeaderMenu from './components/header-menu'

export default {
    components: {HeaderMenu},
    name: 'App',
    created () {
        this.$store.commit('loadCart')
    }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700')
@import './assets/styl/style.styl'

body
    font-family: $fontPrimary
    margin: 0
    padding-top: $heightHeader
*
    box-sizing: border-box
</style>
