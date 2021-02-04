<template>
  <div>
    <div class="items" v-for="(items, index) in songs" :key="index" @click="playmusic(items)">
      <div class="num">{{ index + 1 }}</div>
      <div class="pic">
        <img :src="items.img" alt="" />
      </div>
      <div class="name">
        <p>{{ items.name }}</p>
      </div>
      <div class="singer">{{ items.artistsText }}</div>
      <div class="cdname">
        {{ items.albumName  }}
      </div>
      <div class="times">{{items.duration | formatDate2}}</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "utils/data";
export default {
  props: ["songs"],
  methods: {
    playmusic(items){
      this.$store.commit('addSong',items)
    }
  },
 filters: {
    /*
    时间分秒
   */
    formatDate2(time) {
      var date = new Date(time);
      return formatDate(date, "mm:ss");
    },
  },
}
</script>

<style lang="scss" scoped>
  
  .items {
    height: 70x;
    width: 100%;
    display: flex;
    .num {
      padding-top: 40px;
      width: 30px;
      height: 100%;
      text-align: center;
    }
    .pic {
      margin-left: 30px;
      width: 100px;
      height: 100%;
      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
    .name {
      padding-top: 40px;
      margin-left: 200px;
      width: 200px;
      
    }
    .singer {
      padding-top:40px;
      margin-left: 150px;
      width: 200px;
      
    }
    .cdname {
      padding-top:40px;
      margin-left: 130px;
      width: 200px;
    }

    .times {
      margin-left: 180px;
      padding-top:40px;
    }
    &:hover{
      background-color: #EFEFEF;
    }
  }
</style>
