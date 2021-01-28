<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
import layout from "views/layout/layout";
export default {
  name: "app",
  components: {
    layout,
  },
  mounted() {
    window.addEventListener("keydown",this.KeyDown, true); // 监听按键事件
  },
  methods: {
    KeyDown(event) {
      if (event.keyCode === 122) {
        event.returnValue = false;
        this.$store.commit("handleFullScreen"); //触发全屏的按钮
      }
    },

  },
};
</script>
<style>
@import '~assets/scss/reset.scss';
@import '~assets/scss/element.scss';
#app {
  height: 100%;
}

</style>
