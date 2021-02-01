<!-- 组件说明 -->
<template>
<div class="layout">
  <playheader></playheader>
  <div class="main">
    <playlogin></playlogin>
    <playmenu></playmenu>
    <div class="content">
        <router-view></router-view>   
    </div>
  </div>
  <player></player>
</div>
</template>

<script>
import player from './player.vue';
import playmenu from 'components/content/playmenu.vue';
import playheader from './playheader.vue';
import playlogin from './playlogin.vue';
  export default {
    components: {
      player,
      playmenu,
      playheader,
      playlogin,
    },
   data (){
      return {
      };
    },
    methods: {},
    mounted(){
        }
    }
</script>

<style lang="scss" scoped>
.layout{
  height: 100%;

  .main{
      display: flex;
       height: calc(100% - 50px);
  }

  .content{
        height: calc(100% - 50px);
        flex: 1;
        overflow-y: auto;
      }
}

</style>