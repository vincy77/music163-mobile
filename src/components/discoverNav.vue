<template>
  <section class="nav">
    <ul>
      <li v-for="(item, index) in nav.options" v-on:click="changeNav(index)">
        <router-link :to="item.url">
          <span :class="{'active':nav.current.key == item.key}">{{item.value}}</span>
        </router-link>
        </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        nav: {
          options: [
            {key: 1, value: '个性推荐', url: '/discover/recommend'},
            {key: 2, value: '歌单', url: '/discover/playlist'},
            {key: 3, value: '主播电台', url: '/discover/djradio'},
            {key: 4, value: '排行榜', url: '/discover/toplist'}
          ],
          current: {key: 1, value: '个性推荐', url: '/discover/recommend'}
        }
      }
    },
    methods: {
      changeNav (index) {
        console.log(index)
        this.nav.current = this.nav.options[index]
        // this.$router.push({path: '/discover/playlist'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../less/app.less";
  .nav{
    width: 7.5rem;
    height: 0.6rem;
    font-size: 0.24rem;
    position: fixed;
    top: 0.8rem;
    z-index: 999;
    background: #fff;
    ul{
      width:100%;
      li{
        width: 25%;
        float: left;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        .active{
          display: inline-block;
          height: 0.6rem;
          border-bottom: 0.04rem solid #c20c0c;
          color: #c20c0c;
        }
      }
    }

  }


</style>
