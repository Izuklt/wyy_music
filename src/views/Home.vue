<template>
  <div>
    <!-- 1.公共顶部logo -->
    <div class="header">
      <img src="../assets/img/logo.jpg" alt="">
    </div>

    <!-- 2.选项卡 -->
    <van-tabs v-model="active">
      <van-tab title="推荐音乐" name="1"><Music></Music></van-tab>
      <van-tab title="热歌榜" name="2"><HotMusic></HotMusic></van-tab>
      <van-tab title="搜索" name="3"><Search></Search></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Music from './Music.vue'
import HotMusic from './HotMusic.vue'
import Search from './Search.vue'

export default {
  components: {
    Music,
    HotMusic,
    Search
  },
  data() {
    return {
      active:1,
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  background: #d43c33;
  height: 1.68rem;
}
// vant库 tab样式
/deep/ .van-tanbs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;
  .van-tab {
    font-size: 16px;
  }
}
</style>