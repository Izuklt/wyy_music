<template>
  <div>
    <div class="mark">播放界面-id--- {{ id }}</div>
    <!-- 信息头像 -->
    <div class="info">
      <img :src="imgUrl" alt="" />
      <div class="name">{{ name }}</div>
    </div>

    <!-- 歌曲列表 -->
    <div class="content">
      <div class="desc">歌曲列表</div>
    </div>
    <!-- 热歌列表 -->
    <div class="list" v-for="(item, index) in list" :key="item.id">
      <div class="code">{{ index + 1 }}</div>
      <div class="list-item">
        <div class="left">
          <div class="subtitle">
            {{ item.name }}<span>{{ item.alia[0] }}</span>
          </div>
          <div class="author">
            <span v-for="ele in item.ar" :key="ele.id" class="ele">{{
              ele.name
            }}</span
            >-{{ item.al.name }}
          </div>
        </div>
        <div class="right">
          <img src="@/assets/img/play.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      name: "",
      imgUrl: "",
      list: [],
    };
  },

  // 生命周期
  created() {
    this.musicplaylist();
  },
  methods: {
    async musicplaylist() {
      let res = await this.$api.musicplaylist();
      console.log("歌曲信息--", res.data);
      this.name = res.data.playlist.name;
      this.imgUrl = res.data.playlist.coverImgUrl;
      this.list = res.data.playlist.tracks;
    },
  },
};
</script>
<style lang="less" scoped>
.info {
  padding: 0.3rem;
  background: #eee;
  display: flex;

  img {
    width: 2.5rem;
  }

  .name {
    flex: 1;
    padding-left: 0.2rem;
  }
}

.content {
  .desc {
    color: #888;
    font-size: 12px;
    padding: 0.1rem;
    background: #ddd;
  }
}

.list {
  display: flex;

  .code {
    width: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    color: #888;
  }

  .code-red {
    color: #df3436;
  }
}

.list-item {
  border-bottom: 1px solid #eee;
  // padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  // flex: 1;
  width: 6.5rem;

  .left {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }

  .right {
    width: 0.9rem;
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
    color: #333;
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