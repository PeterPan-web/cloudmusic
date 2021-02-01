<template>
  <div class="findnewlist">
    <div class="title">
      <p>推荐MV</p>
    </div>
      <div class="content">
        <playmvcard
        v-for="(item, index) in newresult"
        :key="index"
        :cdname="item.name"
        :picUrl="item.picUrl"
        :rangk="index"
        :id="item.id"
        :singer='item.artistName'
        ></playmvcard>
      </div>
  </div>
</template>

<script>
import playmvcard from "components/content/playmvcard.vue";

import { getnewmv } from "network";
export default {
  components: {
    playmvcard,
  },
  data() {
    return {
      newresult: [],
    };
  },
  props: {},
  mounted() {
    getnewmv().then((res) => {
      this.newresult=res.data.result
    });
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
