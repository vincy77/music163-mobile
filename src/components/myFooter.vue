<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/discover/recommend">
          <p><i class="iconfont">&#xe6e2;</i></p>
          <p>发现音乐</p>
        </router-link>
      </li>
      <li>
        <router-link to="/discover/playlist">
          <p><i class="iconfont">&#xe7a1;</i></p>
          <p>我的音乐</p>
        </router-link>
      </li>
      <li>
        <router-link to="/discover/djradio">
          <p><i class="iconfont">&#xe6cc;</i></p>
          <p>朋友</p>
        </router-link>
      </li>
      <li>
        <router-link to="/discover/toplist">
          <p><i class="iconfont">&#xe736;</i></p>
          <p>账号</p>
        </router-link>
      </li>
    </ul>
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
<style lang="less">
  @import "../less/app.less";
  .footer{
    height: 1rem;
    width: 7.5rem;
    position: fixed;
    bottom:0;
    left: 0;
    font-size: 0.22rem;
    background-color: #555;
    color: #fff;
    ul{
      width: 100%;
      li{
        height: 1rem;
        width: 25%;
        float: left;
        text-align: center;
        color: #fff;
        a{
          color: #fff;
        }
      p{
        margin-top: 0.08rem;
        .iconfont{
          font-size: 0.5rem;
        }
      }
        .nav-icon{
          height: 0.5rem;
          width: 0.5rem;
        }
      }
    }
  }


</style>
