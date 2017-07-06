<template>
  <section class="music-list">
    <ul class="list">
      <li class="list-item" :class="{'list-item2': (type == 3) || (type == 4) || (type == 5)}" v-for="(item, index) in list">
        <!--type: 1：一行三列，底部两行介绍文字，2：一行三列，底部一行title，一行name，3： 一行两列（正方形图片），底部两行介绍文字
            4： 一行两列（长方形图片），底部两行介绍文字，5： 一行两列（长方形图片），底部一行title，一行name-->
        <router-link to="" class="item" v-if="type == 1">
          <div class="item-icon"><img :src="item.imgUrl"></div>
          <div class="item-title f-thide2">{{item.title}}</div>
        </router-link>
        <router-link to="" class="item" v-if="type == 2">
          <div class="item-icon"><img :src="item.imgUrl"></div>
          <div class="item-title">
            <p class="f-thide">{{item.title}}</p>
            <p class="f-thide">{{item.singer}}</p>
          </div>
        </router-link>
        <router-link to="" class="item item3" v-if="type == 3">
          <div class="item-icon"><img :src="item.imgUrl"></div>
          <div class="item-title f-thide2">{{item.title}}</div>
        </router-link>
        <router-link to="" class="item item3 item4" v-if="type == 4">
          <div class="item-icon"><img :src="item.imgUrl"></div>
          <div class="item-title f-thide2">{{item.title}}</div>
        </router-link>
        <router-link to="" class="item item3 item4" v-if="type == 5">
          <div class="item-icon"><img :src="item.imgUrl"></div>
          <div class="item-title">
            <p class="f-thide">{{item.title}}</p>
            <p class="f-thide">{{item.singer}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'musicList',
    props: {
      list: {
        type: Array,
        default: []
      },
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {}
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../less/app.less";
  .music-list{
    .list{
      width: 110%;
      .list-item2{
        margin-right: 0.1rem!important;
      }
      .list-item{
        overflow: hidden;
        margin-right: 0.15rem;
        .item{
            width: 2.4rem;
            overflow: hidden;
            display: block;
          .item-icon{
            width: 2.4rem;
            height: 2.4rem;
            img{
              height: 100%;
              width: 100%;
            }
          }
          .item-title{
            width: 2rem;
            height: 0.6rem;
            line-height: 0.3rem;
            margin: 0.1rem;
          }
        }
        .item3{
          width: 3.7rem;
          .item-icon{
            width: 3.7rem;
            height: 3.7rem;
          }
          .item-title{
            width: 3.5rem;
          }
        }
        .item4{
          .item-icon{
            height: 2rem;
          }
        }
      }
    }
  }


</style>
