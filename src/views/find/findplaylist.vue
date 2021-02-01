<template>
  <div class="findpalylist">
    <div class="title">
    <p>推荐歌单</p>  
    </div>
    <div class="content">
      <playlistcard v-for="(items,index) in result" :key="index" 
      :words='items.name' 
      :copywriter='items.copywriter'
      :picUrl='items.picUrl'
      :id="items.id"
      ></playlistcard>
    </div>
  </div>
</template>

<script>
import playlistcard from 'components/content/playlistcard.vue'

import { getRecommend } from "network";
export default {
  components: { 
    playlistcard,
    },
  data () {
    return {
      result:[]
    }
  },
  props:{
  },
  mounted () {
    getRecommend().then((res)=>{
     this.result=res.data.result;
    }
    )
  }
}
</script>

<style lang="scss" scoped>
.title{
  margin-left: 7px;
  padding-bottom: 20px;
}
.content{
  padding: 0 5px 0 5px;
 display: flex;
 flex-wrap: wrap;
}
</style>