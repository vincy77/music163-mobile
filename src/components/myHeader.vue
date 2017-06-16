<template>
  <section class="header">
    <div class="header-item fl">
      <i class="iconfont">&#xe6ef;</i>
    </div>
    <div class="fl header-search">
      <input type="text">
    </div>
    <div class="header-item fr">
      <i class="iconfont">&#xe722;</i>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../less/app.less";
  .header{
    height: 1rem;
    width: 7.5rem;
    position: fixed;
    top:0;
    left:0;
    background-color: #c20c0c;
    padding: 0.1rem 0;
    .iconfont{
      font-size: 0.7rem;
      color: #cdcdcd;
      display: block;
    }
    .header-item{
      width: 1rem;
      text-align: center;
    }
    .header-search{
      width: 5.5rem;
      input{
        width: 100%;
        height: 0.8rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        padding: 0.1rem 0.2rem;
        display: block;
      }
    }
  }


</style>
