<template>
  <div class="findnewlist">
    <div class="title">
      <p>最新音乐</p>
    </div>
      <div class="content">
        <playwightcard
        v-for="(item, index) in newresult"
        :key="index"
        :cdname="item.name"
        :picUrl="item.picUrl"
        :rangk="index"
        :singer='item.song.artists | fitname'
        :id="item.id"
        ></playwightcard>
      </div>
  </div>
</template>

<script>
import playwightcard from "components/content/playwightcard.vue";

import { getnewsong } from "network";
export default {
  components: {
    playwightcard,
  },
  data() {
    return {
      newresult: [],
    };
  },
  props: {},
  mounted() {
    getnewsong().then((res) => {
      this.newresult=res.data.result
    });
  },
  filters: {
    fitname(value){
      if(value.length===1){
        return value[0].name
      }else{
        let namelist=value.map(item=>{
          return item.name
        })
        return namelist.join('/')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.findnewlist {
  margin-top: 15px;
  .title {
    margin-left: 7px;
    padding-bottom: 20px;
  }
  .content {
    padding: 0 5px 0 5px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
