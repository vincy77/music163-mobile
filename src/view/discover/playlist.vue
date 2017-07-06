<template>
  <section class="playlist">
    <section class="banner"></section>
  </section>

</template>
<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
//    components: {myHeader, discoverNav}
  }

</script>
<style lang="less">
  .playlist{
    width: 7.5rem;
    position: relative;
    top: 1.4rem;
      .banner{
        height: 2.6rem;
        width: 7.5rem;
        background-color: #aaa;
      }
  }

</style>
