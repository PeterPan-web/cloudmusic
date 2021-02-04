<template>
  <div class="player">
    <div class="playerleft">
      <div class="cdimg">
        <img :src="playimg" alt="" />
      </div>
      <div class="cdcontent">
        <div class="cdname">
          <p>{{playname}}&nbsp;&nbsp;---&nbsp;&nbsp;{{playsinger}}</p>
        </div>
        <div class="cdtime">
          <p>135&nbsp;/&nbsp;{{playtime}} </p>
        </div>
      </div>
    </div>
    <div class="playercenter">
      <div class="lastbtn">
        <img src="~assets/img/next.png" alt="" />
      </div>
      <div class="playbtn">
        <img src="~assets/img/play.png" alt="" />
        <img src="~assets/img/stop.png" alt=""  v-if="false"/>
      </div>
      <div class="nextbtn">
        <img src="~assets/img/next.png" alt="" />
      </div>
    </div>
    <div class="playerright">
      <div class="menubox">
        <btndropdown>
          <div slot="btnlink">
            <img src="~assets/img/list.png" alt="">
          </div>
          <search :topheigt="50"  slot="btnmenu"></search>
           </btndropdown>
      </div>
      <div class="audioplay">
          <div class="laba">
            <img src="~assets/img/novoice.png" alt="" v-if="false">
            <img src="~assets/img/voice.png" alt="">
          </div>
          <slider
            class="c-progress"
            :percent="3"
            @percentChange="onPercentChange"
            :width="100"
            :sliderWidth="20"
            progressColor="#d33a31"
            :showPerText="false"
          />
        </div>
      <div class="iconbox">
        <a href="https://github.com/PeterPan-web" target="_blank">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
      <audio :src="playurl" ref="audio" autoplay></audio>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import slider from "components/common/slider.vue";
import search from "components/common/search.vue";
import Btndropdown from "components/content/btndropdown.vue";

export default {
  components: {
    slider,
    search,
    Btndropdown,
  },
  data() {
    return {
      Songlist: [],
      playurl: "",
      playimg: "",
      playname: "",
      playsinger:'',
      playtime:"",
    };
  },
  methods: {
    //赋值到data里
    getSonglist(newValue) {
      this.Songlist = newValue;
      console.log(newValue);
      this.playurl = newValue[newValue.length-1].url;
      this.playimg = newValue[newValue.length-1].img;
      this.playname = newValue[newValue.length-1].name;
      this.playsinger = newValue[newValue.length-1].artistsText;
      this.playtime = newValue[newValue.length-1].duration;
    },
    //播放音乐
    playmusic() {
      let index = 0;
      this.playurl = Songlist[index].url;
    },
    //接收并修改音量
    onPercentChange(per) {
      this.$refs.audio.volume = per / 100;
    },
    //
  },
  computed: {
    //设置mapgetters监听
    ...mapGetters(["currentSong"]),
  },
  watch: {
    //监听值的变化并且返回值
    currentSong: {
      handler(newValue, oldValue) {
        this.getSonglist(newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin img-size1{
    img {
      border-radius: 5px;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
}
@mixin img-size2{
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
}
.player {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;

  .playerleft {
    @include img-size1;
    width: 30%;
    display: flex;
    padding: 3px 5px 0px 15px;
    .cdimg {
      width: 50px;
    }
    .cdcontent {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      .cdname {
        flex: 1;
        padding-top: 3px;
        font-size: 15px;
      }
      .cdtime {
        flex: 1;
        font-size: 13px;
      }
    }
  }
  .playercenter {
    @include img-size1;
    width: 50%;
    display: flex;
    padding: 4px 0 4px 270px;
    .nextbtn {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
  .playerright {
    @include img-size2;
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    .menubox{
    margin: 15px 20px 0 15px;
    width: 50px;
    }
    .audioplay{
      display: flex;
      .laba{
        margin-top: 14px;
        margin-right: 13px;
      }
    }
    .iconbox{
      width: 80px;
      padding-left: 25px;
      padding-top: 10px;
      .iconfont{
        color: black;
        font-size: 32px;
      }
    }
  }
}
</style>
