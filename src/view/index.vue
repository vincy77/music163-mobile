<template>
  <section class="main">
    <my-footer></my-footer>
    <router-view></router-view>
  </section>
</template>
<script>
  import myFooter from '@/components/myFooter.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {myFooter}
  }
</script>
<style>
  .main{
    position: relative;
  }
</style>
