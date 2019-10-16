<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { SetRem, proportion } from '@/utils/rem'
export default {
  name: 'App',
  mounted() {
    window.onload = () => {
      SetRem(1920, 100)
      //  AppModule.SET_HEIGHT(proportion('h'))
      this.$store.dispatch('responsive/getHeight', proportion('h'))
    }
    window.onresize = () => {
      SetRem(1920, 100)
      this.$store.dispatch('responsive/getHeight', proportion('h'))
    }
  }
}
</script>
<style lang="scss">
  html {
    // span, p, a {
    //   font-size: 12px
    // }
    div {
      font-size: 14px
      // line-height: 0;
    }
  }
</style>
