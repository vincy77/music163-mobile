<template>
  <div class="search-bar">
    <span class="microphone">@</span>
    <form>
      <input type="text" class="search-inp">
    </form>
    <span class="play">@</span>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-bar{
    width: 7.5rem;
    height: 1rem;
  }
</style>
