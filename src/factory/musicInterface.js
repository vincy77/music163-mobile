import config from '@/config'
import Vue from 'vue'

let music = (params) => {
  return Vue.http.get(config.music, Object.assign(params))
}
let playlist = (params) => {
  return Vue.http.get(config.playlist)
}
let detail = (params) => {
  params = {
    ak: 'WctKqdbigbIPwXb8kLfGDyhRVs9XDqnD',
    output: 'json',
    id: 'lijiang'
  }
  return Vue.http.get(config.detail, Object.assign(params))
}

export default {
  music,
  playlist,
  detail
}
