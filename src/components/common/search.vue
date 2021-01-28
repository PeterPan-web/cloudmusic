<template>
  <div class="search">
    <div class="title" :style="topheigtfc">
      <slot></slot>
    </div>
    <div class="content" :style="btmheigt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topheigt: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    topheigtfc() {
      const style = {};
      style.height = this.topheigt + "%";
      return style;
    },
    btmheigt() {
      const style = {};
      style.height = 100 - this.topheigt + "%";
      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;

  .title {
    width: 100%;
    background-color: wheat;
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
}
</style>
