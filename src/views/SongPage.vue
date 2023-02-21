<template>
  <div>
    {{ id }}
    <!-- <audio :src="url" controls></audio> -->
    <!-- 使用插件组件 -->
    <!-- audio:歌曲信息 list:歌曲列表 showlrc:是否显示歌词 -->
    <aplayer :music="{ ...audio }" :showlrc="true"></aplayer>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
export default {
  props: ["id"],
  components: { aplayer },
  data() {
    return {
      url: "",
      audio: {
        title: "dome1", // 歌曲名字
        artist: "豆腐厂厂长", // 演唱者
        url: "url", // 音频文件url
        pic: "", // 演唱者封面
        lrc: "lrc", // 歌词或者歌词文件
        theme: "", // 歌曲主题
      },
    };
  },
  mounted() {
    this.getSong();
    this.getLyric();
  },
  methods: {
    // 获取音乐url地址
    async getSong() {
      let res = await this.$api.songUrl();
      console.log("--res---", res.data.data[0]);
      // 获取音乐url
      this.audio.url = res.data.data[0].url;
    },

    // 获取当前歌词
    async getLyric() {
      let res = await this.$api.getLyric({ id: this.id });
      console.log("歌词---", res.data);
      this.audio.lrc = res.data.lrc.lyric;
    },
  },
};
</script>