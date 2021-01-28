<template>
  <el-dropdown trigger="click" placement="top">
    <div class="el-dropdown-link">
      <i class="iconfont icon-liebiao"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <slot></slot>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {
    components: {
  },
};
</script>

<style>
.el-dropdown-menu{
  height: 87.5%;
}
</style>
