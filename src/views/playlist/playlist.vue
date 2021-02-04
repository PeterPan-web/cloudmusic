<template>
  <div class="playlist">
    <div class="header">
      <div class="imgwrap">
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="content">
        <div class="titlewrap">
          <p>{{ playlist.name }}</p>
        </div>
        <div class="creatorwrap">
          <img :src="playlist.creator.avatarUrl" alt="" />
          <p class="creator">{{ playlist.creator.nickname }}</p>
          <p>{{ playlist.createTime | formatDate }}创建</p>
        </div>
        <div class="actionwrap">
          <div @click="onClick" class="n-button">
            播放全部
          </div>
        </div>
        <div class="descwrap">
          <p>
            标签：<span>{{ this.tags }}</span>
          </p>
        </div>
        <div class="dsc">
          <p>{{ playlist.description }}</p>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <div>
          <div class="title">
            <div style="color: black;"><p>音乐标题</p></div>
            <div><p>歌手</p></div>
            <div><p>专辑</p></div>
            <div><p>时长</p></div>
          </div>
          <songlist :songs="songs"></songlist>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <slot name="secondwrap"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//方法
import { formatDate } from "utils/data";
import { createSong } from "utils/business";
//获取网址数据
import { getdetaildata } from "network";
import { getsongdetail } from "network";
import Songlist from "./playlistcontent/songlist.vue";

export default {
  components: { Songlist },
  data() {
    return {
      iid: 0,
      playlist: {
        creator: {
          avatarUrl: "www.baidu.com",
        },
      },
      activeName: "first",
      tags: "",
      songs: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const iid = this.$route.params.id;
      const res = await getdetaildata({ id: iid });
      this.playlist = res.data.playlist;
      this.creator = res.data.playlist.creator;
      this.tags = res.data.playlist.tags.join("/");
      this.getsonglist(res.data.playlist);
    },
    async getsonglist(playlist) {
      const trackIds = playlist.trackIds.map(({ id }) => id);
      const songDetail = await getsongdetail(trackIds.slice(0));
      const songs = songDetail.data.songs.map(({ id, name, mv, ar, al, dt }) =>
        createSong({
          id,
          name,
          artists: ar,
          mvId: mv,
          albumName: al.name,
          img: al.picUrl,
          duration: dt,
        })
      );
      this.songs = songs;
    },
    handleClick(vel) {
      console.log(vel);
    },
    onClick(e) {
      this.$emit("click", e);
    },
  },
  filters: {
    /*
    时间格式自定义 只需把字符串里面的改成自己所需的格式
   */
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy.MM.dd");
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  padding: 30px;
  width: 100%;
  .header {
    display: flex;
    font-size: 14px;

    .imgwrap {
      width: 200px;
      height: 200px;
      margin-right: 24px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;

      .titlewrap {
        margin-bottom: 12px;
      }

      .creatorwrap {
        display: flex;
        line-height: 50px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
        }
        .creator {
          margin-right: 15px;
        }
      }

      .actionwrap {
        margin-top: 15px;
      }

      .descwrap {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .dsc {
      }
    }
  }
  .title {
    display: flex;
    padding-left: 220px;
    div {
      color: slategray;
      text-align: center;
      flex: 1;
      font-size: 12px;
    }
  }
  .n-button {
    display: inline-block;
    padding: 5px 16px;
    border: 1px solid var(--button-border-color);
    border-radius: 2px;
    background-color: #ec483d;
    text-align: center;
    color: white;
    cursor: pointer;
  }
}
</style>
