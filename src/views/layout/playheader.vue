<template>
  <div class="header">
    <div class="lefttop">
      <div class="findclick">
          <circlebox pushcolor="red" @click.native="homeclick">
            <i class="iconfont icon-zhuye"></i>
          </circlebox>
          <circlebox pushcolor="yellow" @click.native="closeFullScreen">
            <i class="iconfont icon-suoxiao"></i>
          </circlebox>
          <circlebox pushcolor="green" @click.native="handleFullScreen">
            <i class="iconfont icon-quanping_huaban"></i>
          </circlebox>
      </div>
      <div class="backbtn">
        <btnstyle gonumber="-1"><i class="iconfont icon-houtui"></i></btnstyle>
        <btnstyle  gonumber="1"><i class="iconfont icon-qianjin"></i></btnstyle>
      </div>
    </div>
    <righttop></righttop>
  </div>
</template>

<script>
import circlebox from "components/common/circlebox";
import btnstyle from 'components/common/btnstyle';

import righttop from 'components/content/righttop.vue';
export default {
  data() {
    return {};
  },
  components: { circlebox, righttop,btnstyle},
  methods:
     {
    homeclick() {
      this.$router.push("/find");
    },
    handleFullScreen() {
      this.$store.commit("handleFullScreen");
    },
    closeFullScreen() {
      this.$store.commit("closeFullScreen");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: #F9F9F9;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  .lefttop{
    margin-top: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    .findclick {
      display: flex;
      .iconfont {
        font-size: 9px;
        display: none;
      }
      &:hover .iconfont {
        display: block;
      }
    }
    .backbtn {
      display: flex;
      justify-content: space-between;
      div {
        margin-right: 15px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: rgba($color: #adacac, $alpha: 0.2);
        }
      }
    }
  }
 
}
</style>
