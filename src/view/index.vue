<template>
  <section class="main">
    <my-header></my-header>
    <discover-nav></discover-nav>
    <my-footer></my-footer>
    <router-view></router-view>
  </section>
</template>
<script>
  import myHeader from '@/components/myHeader.vue'
  import discoverNav from '@/components/discoverNav.vue'
  import myFooter from '@/components/myFooter.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {myHeader, discoverNav, myFooter}
  }
</script>
<style>
  .main{
    position: relative;
  }
</style>
