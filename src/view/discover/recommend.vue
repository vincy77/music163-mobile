<template>
  <section class="recommend">
    <my-header></my-header>
    <discover-nav></discover-nav>
  </section>

</template>
<script>
  import myHeader from '@/components/myHeader.vue'
  import discoverNav from '@/components/discoverNav.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {myHeader, discoverNav}
  }

</script>
<style lang="less">

  .recommend{
    width: 7.5rem;
    padding-top: 1rem;
  }

</style>
