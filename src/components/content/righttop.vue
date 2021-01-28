<template>
  <div class="righttop">
    <el-dropdown trigger="click">
      <div class="rightinput" >
      <i class="iconfont icon-sousuo"></i>
      <input type="text" class="el-dropdown-link" placeholder="搜索">
      </div>
      <el-dropdown-menu slot="dropdown">
        <search :topheigt="40"></search>
      </el-dropdown-menu>
    </el-dropdown>
    <el-popover placement="bottom" width="200" trigger="click">
      <div
        style="display: flex;
  justify-content: space-between;"
      >
        <div>
          <circlebox
            pushcolor="black"
            pushheight="25px"
            pushwidth="25px"
          ></circlebox>
          <p>深色</p>
        </div>
        <div>
          <circlebox
            pushcolor="#F6F6F6"
            pushheight="25px"
            pushwidth="25px"
          ></circlebox>
          <p>浅色</p>
        </div>
        <div>
          <circlebox pushheight="25px" pushwidth="25px"></circlebox>
          <p>红色</p>
        </div>
      </div>
      <div slot="reference">
        <btnstyle><i class="iconfont icon-pifu"></i></btnstyle>
      </div>
    </el-popover>
  </div>
</template>

<script>
import btnstyle from "components/common/btnstyle";
import circlebox from "components/common/circlebox.vue";
import search from 'components/common/search.vue';
export default {
  components: {
    btnstyle,
    circlebox,
    search,
  },
    data() {
    return {
      colorbox: false,
    };
  },
  methods: {
    },
};
</script>
<style lang="scss">
.righttop {
  margin-top: 10px;
  margin-right: 20px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  .rightinput {
    border-radius: 5px;
    width: 140px;
    height: 22px;
    line-height: 22px;
    padding-left: 4px;
    display: flex;
    background-color: #ededed;
    input {
      margin-left: 5px;
      width: 100%;
      outline: none;
      background-color: #ededed;
      color: #BEBEBE;
      border: none;
      font-size: 7px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>