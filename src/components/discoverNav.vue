<template>
  <section class="nav">
    <ul>
      <li v-for="item in nav" v-on:click=""><span>{{item.value}}</span></li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        nav: [
          {key: 1, value: '个性推荐'},
          {key: 2, value: '歌单'},
          {key: 3, value: '主播电台'},
          {key: 4, value: '排行榜'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../less/app.less";
  .nav{
    width: 7.5rem;
    height: 0.8rem;
    font-size: 0.24rem;
    ul{
      width:100%;
      li{
        width: 25%;
        float: left;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        .active{
          display: inline-block;
          height: 0.8rem;
          border-bottom: 0.04rem solid red;
        }
      }
    }

  }


</style>
