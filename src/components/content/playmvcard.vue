<template>
  <div class="playwightcard">
    <div class="showcard">
      <div class="maskicon">
        <i class="iconfont icon-bofangbeifen13"></i>
      </div>
      <img :src="picUrl" alt="" />
    </div>
    <div class="namecontent">
      <p>{{ cdname }}</p>
      <p>{{ singer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cdname", "picUrl", "rangk", "id", "singer"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.playwightcard {
  padding: 5px;
  width: 25%;
  cursor: pointer;
  .showcard {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .maskicon {
      position: absolute;
      top: 40%;
      left: 40%;
      transition: all 0.3s;
      opacity: 0;
      .iconfont {
        color: red;
        font-size: 30px;
      }

    }
  }
  .namecontent{
    p{
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
    p:nth-child(2) {
      color:#BEBEBE;
    }
  }
  &:hover{
    .maskicon{
      opacity: 1;
    }
  }
}
</style>
