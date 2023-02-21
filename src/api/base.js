// 公共的接口配置资源

const base = {
    host:'http://iwenwiki.com:3000',//基本域名
    musicUrl:'/api/personalized?limit=6',//首页-推荐音乐
    newsong:'/foo/weapi/personalized/newsong',//首页最新音乐
    playlist:"/foo/weapi/v6/playlist/detail",//热歌榜列表数据
    hotSearch:"/foo/weapi/search/hot",//搜索接口
    getSearch:"/api/search/suggest",
    musicplaylist:"/foo/weapi/v6/playlist/detail",//首页-推荐音乐-列表界面
    songUrl:"/boo/weapi/song/enhance/player/url/v1",
    lyric:'/api/lyric'
}

export default base