<script>
import MainPage from '../src/pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<template>
<router-view></router-view>
</template>

<style lang="scss">
@import "../src/assets/style.scss";
</style>