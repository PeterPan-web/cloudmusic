<template>
  <div class="playlistcard" @click="pushlist(id)">
    <div class="masktitle">
      <p>{{ copywriter }}</p>
    </div>
    <div class="maskicon">
      <i class="iconfont icon-bofangbeifen13"></i>
    </div>
    <div class="showcard">
      <img :src="picUrl" alt="" />
    </div>
    <p>{{ words }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'picUrl', 
    'copywriter', 
    'id',
    'words'
    ],
  data() {
    return {};
  },
  methods: {
    pushlist(){
      this.$router.push('/playlist/'+this.id)
    }
  }
};
</script>

<style lang="scss" scoped>
.playlistcard {
  position: relative;
  width: 18%;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 7px;
  .masktitle {
    padding: 5px 0px 10px 5px;
    color: #fff;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    transition: all 0.3s;
  }
  .maskicon {
    position: absolute;
    right: 5px;
    bottom: 50px;
    opacity: 0;
    transition: all 0.3s;
    .iconfont {
      color: red;
      font-size: 30px;
    }
  }
  .showcard {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    .masktitle {
      transform: translateY(0);
    }
    .maskicon {
      opacity: 1;
    }
  }
}
</style>
