<template>
  <div class="playwightcard">
    <div class="num">
      <p>{{ rangk +1 }}</p>
    </div>
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
  display: flex;
  width: 48%;
  cursor: pointer;
  &:hover{
    background-color: #F5F5F5;
  }
  .num {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .showcard {
    position: relative;
    width: 20%;
    img {
      width: 100%;
      height: 100%;
    }
    .maskicon {
      position: absolute;
top: 30%;
left: 30%;
      transition: all 0.3s;
      .iconfont {
        color: red;
        font-size: 20px;
      }
    }
  }
  .namecontent{
    margin-left: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
      font-size: 12px;
    }
  }
}
</style>
