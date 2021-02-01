<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="歌曲列表" name="first"><slot name="fristwrap"></slot></el-tab-pane>
    <el-tab-pane label="评论" name="second" ><slot name="secondwrap"></slot></el-tab-pane>
    </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  };
</script>
<style>

</style>