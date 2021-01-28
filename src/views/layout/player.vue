<template>
  <div class="player">
    <div class="playercenter">
      <div>
        <i class="iconfont icon-shangyishou_huaban"></i>
      </div>
      <div>
        <i class="iconfont icon-bofang"></i>
      </div>
      <div>
        <i class="iconfont icon-xiayishou_huaban"></i>
      </div>
    </div>
    <div class="playerright">
      <div>
        <i class="iconfont icon-shunxubofang"></i>
      </div>
      <div class="menubox">
        <btndropdown>
          <search :topheigt="50"></search></btndropdown>
      </div>
      <div class="audioplay">
        <div>
          <i class="iconfont icon-laba"></i>
          <slider
            class="c-progress"
            :percent="50"
            @percentChange="onPercentChange"
            :width="100"
            :sliderWidth="20"
            progressColor="#d33a31"
            :showPerText="false"
          />
        </div>
      </div>
      <div>
        <a href="https://github.com/PeterPan-web" target="_blank">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import slider from "components/common/slider.vue";
import search from 'components/common/search.vue';
import Btndropdown from 'components/content/btndropdown.vue';

export default {
  components: {
    slider,
    search,
    Btndropdown,
  },
  data() {
    return {};
  },
  methods: {
    onPercentChange(per) {
      console.log(per);
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  height: 60px;
  line-height: 60px;
width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 2px solid #f5f5f5;
  display: flex;
  .playercenter {
    display: flex;
    flex: 1;
    justify-content: center;
    width: 60%;
    padding-left: 150px;
    div {
      margin-left: 15px;
      .iconfont {
        font-size: 40px;
        color: #d33a31;
        cursor: pointer;
      }
    }
  }
  .playerright {
    display: flex;
    div {
      flex: 1;
      margin-right: 15px;
    }
    .iconfont {
      cursor: pointer;
      font-size: 20px;
    }
    .audioplay {
      flex: 1;
      div {
        width: 150px;
        display: flex;
      }
    }
  }
}
</style>
