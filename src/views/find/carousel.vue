<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img :src='item.imageUrl' class="banner-img">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { getbanners } from "network";
export default {

data () {
  return {
    banners:[]
  }
},
created () {
  
},
mounted () {
  getbanners().then(data => {
    this.banners=data.data.banners
  }
  )
},
methods: {
}
}
</script>
<style>
  .el-carousel__item h3 {
    color: #d3dce6;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner-img{
    width: 100%;
    height: 100%;
  }
</style>