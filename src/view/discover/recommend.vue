<template>
  <section class="recommend">
    <!--<my-header></my-header>-->
    <!--<discover-nav></discover-nav>-->
    <section class="banner content">
      <ul>

        　　　　　　<div id="scrollBox">

        　　　　　　　　<div class="scrollWrap">

        　　　　　　　　　　<div id="scrollContOne" class="scrollCont">

        　　　　　　　　　　　　<li v-for="item in list">

        　　　　　　　　　　　　　　<a href="{{item}" target="_blank">aaa</a>

        　　　　　　　　　　　　</li>

        　　　　　　　　　　</div>

        　　　　　　　　　　<div id="scrollContTwo" class="scrollCont"></div>

        　　　　　　　　</div>

        　　　　　　</div>

        　　　　</ul>
    </section>
    <ul class="tab">
      <li class="tab-item">
        <div class="item-icon"><i class="iconfont icon">&#xe665;</i></div>
        <div class="item-title">私人FM</div>
      </li>
      <li class="tab-item">
        <div class="item-icon"><i class="iconfont icon">&#xe699;</i></div>
        <div class="item-title">每日歌曲推荐</div>
      </li>
      <li class="tab-item">
        <div class="item-icon"><i class="iconfont icon">&#xe722;</i></div>
        <div class="item-title">云音乐热歌榜</div>
      </li>
    </ul>
    <section class="recommend-list">
      <p class="list-title">推荐歌单 ></p>
      <music-list :list="list" :type="1"></music-list>
    </section>
    <section class="recommend-list">
      <p class="list-title">独家放送 ></p>
      <music-list :list="list2" :type="4"></music-list>
    </section>
    <section class="recommend-list">
      <p class="list-title">最新音乐 ></p>
      <music-list :list="list" :type="2"></music-list>
    </section>
    <section class="recommend-list">
      <p class="list-title">推荐MV ></p>
      <music-list :list="list2" :type="5"></music-list>
    </section>
  </section>

</template>
<script>
  import musicList from 'COMP/musicList.vue'
  // import interfacePro from 'FAC/musicInterface'
  export default {
    components: {musicList},
    data () {
      return {
        list: [
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/music.png', singer: 'ftisland'}
        ],
        list2: [
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/ft.jpg', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/ft.jpg', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/ft.jpg', singer: 'ftisland'},
          {title: '每日歌曲推荐每日歌曲推荐每日歌曲推荐', imgUrl: '/static/images/ft.jpg', singer: 'ftisland'}
        ],
        canScrollTimer: 40
      }
    },
    mounted: function () {
      // console.log(interfacePro.playlist)
//      interfacePro.detail().then(_res => {
//        console.log(_res)
//      })
      this.canScroll()
    },
    methods: {
      run () {
        let speed = 40
        let scrollBox = document.getElementById('scrollBox')
        let scrollContOne = document.getElementById('scrollContOne')
        let scrollContTwo = document.getElementById('scrollContTwo')
        scrollContTwo.innerHTML = scrollContOne.innerHTML
        scrollBox.scrollLeft = 0
        let scrollRadio = function () {
          if (scrollBox.scrollLeft >= scrollContTwo.offsetWidth) {
            scrollBox.scrollLeft -= scrollContOne.offsetWidth
          } else {
            scrollBox.scrollLeft += 2
          }
        }
        let MyScrollRadio = setInterval(scrollRadio, speed)
        scrollBox.onmouseover = function () {
          clearInterval(MyScrollRadio)
        }
        scrollBox.onmouseout = function () {
          MyScrollRadio = setInterval(scrollRadio, speed)
        }
      },
      canScroll () {
        let innerHTML = document.getElementById('scrollContOne').innerHTML
        if (innerHTML !== null && innerHTML !== '' && innerHTML.trim().length !== 0) {
          clearInterval(this.canScrollTimer)
          this.run()
        } else {
          let self = this
          this.canScrollTimer = setInterval(function () {
            self.canScroll()
          }, 1000)
        }
      }
    }
  }

</script>
<style lang="less">
  .recommend{
    width: 7.5rem;
    position: relative;
    top: 1.4rem;
    .banner{
      height: 2.6rem;
      width: 7.5rem;
      background-color: #42b983;
    }
    .content{
      overflow: hidden;
      ul{
        white-space: nowrap;
        li{
          position: relative;
          font-size: 0.28rem;
          vertical-align: middle;
          padding: 0 0.16rem;
          white-space: nowrap;
          display: inline-block;
          a{
            text-decoration: none;
            color: #fff;
          }
        }
  #scrollBox{
    overflow: hidden;
    /*margin-left: 0.72rem;*/
    .scrollWrap{
      width: 500%;
      .scrollCont{
        float: left;
      }
    }
  }
      }
    }
    .tab{
      width: 7.5rem;
      height: 1.8rem;
      position: relative;
      .tab-item{
        width: 33.33%;
        height: 100%;
        text-align: center;
        .item-icon{
          height: 1rem;
          line-height: 1rem;
          width: 1rem;
          border: 1px solid #c20c0c;
          margin: 0.2rem 0.75rem;
          border-radius: 25px;
          .icon{
            font-size: 0.5rem;
            color: #c20c0c;
          }
        }
      }
    }
    .tab:before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #eee;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left bottom;
    }
    .recommend-list{
      width: 7.5rem;
      clear: both;
      .list-title{
        padding: 0.3rem 0 0.2rem 0.2rem;
        font-size: 0.3rem;
      }
    }
  }

</style>
