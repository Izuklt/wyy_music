<template>
  <div>
    <!-- 编辑推荐 -->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="2">
          <van-col span="8" v-for="item in list" :key="item.id">
            <div class="item">
              <router-link :to="'/playlist/' + item.id">
                <img :src="item.picUrl" alt="" />
                <div class="total">
                  <img src="@/assets/img/headset.png" />{{
                    item.playCount | num
                  }}
                </div>
                <div class="info">{{ item.name }}</div>
              </router-link>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="main">
      <div class="title">最新音乐</div>
      <div class="list">
        <div class="list-item" v-for="item in newsong" :key="item.id">
          <router-link :to="'/songpage/' + item.id">
            <div class="left">
              <div class="subtitle">
                {{ item.name
                }}<span class="alias">{{ item.song.alias[0] }}</span>
              </div>
              <div class="author">
                <span
                  v-for="ele in item.song.artists"
                  :key="ele.id"
                  class="ele"
                >
                  {{ ele.name }}
                </span>
                -{{ item.song.album.name }}
              </div>
            </div>
            <div class="right">
              <img src="@/assets/img/play.png" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [], //编辑推荐数据
      newsong: [], //最新音乐列表数据
    };
  },
  // 进入页面获取网络请求--生命周期函数
  created() {
    this.getMusic();
    this.getNewSong();
  },
  methods: {
    //获取推荐音乐数据
    async getMusic() {
      let res = await this.$api.getMusic();
      console.log("推荐音乐", res.data.result);
      this.list = res.data.result;
    },
    //获取最新音乐
    async getNewSong() {
      let res = await this.$api.getNewSong();
      console.log("最新音乐", res.data);
      this.newsong = res.data.result;
    },
  },
  //过滤器
  filters: {
    num(val) {
      if (!val) return;
      // val播放量的数值
      val = val > 9999 ? (val / 10000).toFixed(1) + "万" : val;
      return val;
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.34rem;
  position: relative;
  padding-left: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 20px;
    top: 2px;
    background: #ff5555;
    left: 0;
  }
}
.content {
  .item {
    position: relative;
    img {
      width: 100%;
    }
    .total {
      color: #fff;
      position: absolute;
      right: 1px;
      top: 2px;
      img {
        width: 0.3rem;
        position: absolute;
        top: 0.08rem;
        left: -0.34rem;
      }
    }
    .info {
      margin: 0.14rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  .van-col {
    height: 3.56rem;
  }
}

// 最新音乐
.list-item {
  border-bottom: 1px solid #eee;
  padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  .left {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }
  .right {
    width: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .subtitle {
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    span {
      // font-size: 12px;
      color: #888;
    }
  }

  .author {
    margin-top: 4px;
    font-size: 12px;
    color: #888;

    .ele {
      &::after {
        content: "/";
      }
    }
    .ele:last-child {
      &::after {
        content: "";
      }
    }
  }
}
</style>