import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '@/components/First'
import index from '@/view/index'
import recommend from '@/view/discover/recommend'
import toplist from '@/view/discover/toplist'
import djradio from '@/view/discover/djradio'
import playlist from '@/view/discover/playlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      name: '发现音乐',
      children: [
        {
          path: '/discover/recommend',
          component: recommend,
          name: '个性推荐'
        },
        {
          path: '/discover/playlist',
          component: playlist,
          name: '歌单'
        },
        {
          path: '/discover/djradio',
          component: djradio,
          name: '主播电台'
        },
        {
          path: '/discover/toplist',
          component: toplist,
          name: '排行榜'
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/first',
      component: First
    }
  ]
})
