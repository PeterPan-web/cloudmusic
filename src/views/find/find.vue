<template>
<div class="find">
  <carousel></carousel>
  <findplaylist></findplaylist>
  <findnewmusic></findnewmusic>
  <findnewmv></findnewmv>
</div>
  
</template>

<script>
import carousel from 'views/find/carousel';
import findplaylist from './findplaylist.vue';
import findnewmusic from './findnewmusic.vue';
import findnewmv from './findnewmv.vue';
export default {
components: {
  carousel,
  findplaylist,
  findnewmusic,
  findnewmv
},
}
</script>

<style lang="scss" scoped>
.find{
  padding:20px;
}
</style>