import base from './base'
import axios from '@/utils/request'

const api = {
    // 1.获取推荐音乐
    getMusic() {
        return axios.get(base.musicUrl)
    },

    // 2.获取最新音乐
    getNewSong() {
        return axios.post(base.newsong, {
            params: '5bTOaSa7y0RSEmN4SRZ656HhgiYoV+RFXQzws1rDbQwoYE71d2Ph56bM/jhJe8It',
            encSecKey: '63d714d7ed7813eb60ea9ccc5c21cfbd37383bae048304557cbc514e29d5e483fc32c95be9818961b71cb77c7a34b921042a5fd48873c16728c34ff8fb1c543b301c6ca191735ab1350b34a4fe100a88f9610d8b034e80641daa67eedf19e7aff19fb77f43b7168c7efe7adf72dbdce78ef0314e96ef9f65f633b9d6e6e9b387',
        })
    },

    // 3.热歌榜列表数据
    getPlaylist() {
        return axios.post(base.playlist, {
            params: 'iSvQmeeujOZ88bGjX0sXTiMPqUWUZIxw94QxwZla5iXKasC0BNc9+onWKk0IhYXa',
            encSecKey: '37dbe94b3417a6b93ec97083d08b41a7bd8fdde5d416319e8fe4172eebb51acf21115671884cc668a9c742fbcc974643eda3efe5ddcb2b9af06ca4bf9427df1adf06a958688734eb9df2f7efab1178db255342861dcd32e396e0c99920b0252dc3e073b76088caddd61348926dcfaf3de9d542cae548c26590943d3e9e249c60',
        })
    },

    // 4.搜索热词 hotSearch
    hotSearch() {
        return axios.post(base.hotSearch, {
            params: 'x5nEmRDkmwtgzo9CjpXI5VMQblsoRzYUztiHRDDDki0=',
            encSecKey: '9b0577aaa499cce782f50d5d0125d33392039afecc0531c62ab2579fe99b914a02b61a5d634b14b3c35440f8cdaa893a00f12ef3fd29c192229591d654b2676c7cbe55e4403125e1198f41aefee87d582f095ce0168564bb57d6c340ff83818dfc39c2b1bbaa2d647e0dc271efda5c9ee1c160469e11a13ed88b6a151bc87cd4',
        })
    },

    // 5.搜索框
    getSearch(params) {
        return axios.get(base.getSearch, {
            params
        })
    },

    // 6.列表歌曲
    musicplaylist() {
        return axios.post(base.musicplaylist, {
            params: 'OpaydA5cPMnctUy0AO6d0WqwSG8fp3DJRgDZMJo8Azf+//DRvwct0WpjzLCPf8/34Ktfh98G44a+oafM3/58sq4DfCvvt97S9KXf4T75rro=',
            encSecKey: '60f58409387b55004597b7a8c064a368e77edbad28cd6964a23801ea54bd013e426706f3a21b5d297250f13046d57b8d7d5201cc3c8db85d7568a79223ae92dc02ddecda2ddcf6dc71a6f533e306a1b5827cefd0ac917bc58370323251cac2ac62038a9bc936f7f5702cf4d0c635243c6d467d55d25ac504056442cfe83c570f',
        })
    },

    // 7.获取歌曲
    songUrl() {
        return axios.post(base.songUrl, {
            params: '72HLgd1+uXSOGqxVHPGbjiYqnehHMq1Bc7pgwwHsGQooE4E0oXrAJXwPmnxeX2QqSiI/UnD4+5AOkY8oT4RQBCp+nK86kLSx8OvIrwgWssJIYaDlw0k5+w0tptchMEIT1',
            encSecKey: '193c8c6dd1b3d19dc377863ce538bc6d85400b0f385819cd9d01d4956f9ac829b36c5a6ebff2893e736d0ee814add0c84c00ce5ee665f79f9434c4fab6f8a3858b2217a726133fd1f077da27d41c51e4a376de9660028a1240454ee3d8f43fe70942fd55bd75a03b1ec947a299f50ac671b40d52a3d97b2961bb6e6fef61b7c9',
        })
    },

    // 8.歌词
    getLyric(params) {
        return axios.get(base.lyric, {
            params
        })
    }
}

export default api