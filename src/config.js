let localhost = 'http://music.163.com'
export var config = {
  music: localhost + '/api/playlist/detail',
  playlist: localhost + '/api/personalized/playlist', // 推荐歌单
  newsong: localhost + '/api/personalized/newsong', // 新歌推荐
  djprogram: `${localhost}/api/personalized/djprogram`, // 推荐DJ
  search: `${localhost}/api/search/pc`,
  detail: 'http://api.map.baidu.com/telematics/v3/travel_attractions'
}
export default config
