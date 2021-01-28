<template>
  <div class="playmenu">
      <div class="title" @click="loginshow">
        <i class="iconfont icon-ren"></i>
        未登录
      </div>
      <div class="menu-wrap">
        <menulist :showwords="this.words[0]" path="/find">
              <i class="iconfont icon-faxian"></i>
        </menulist>
        <menulist :showwords="this.words[1]" path="/recommend">
              <i class="iconfont icon-tuijian"></i>
        </menulist>
        <menulist :showwords="this.words[2]" path="/newmusic">
              <i class="iconfont icon-yinle"></i>
        </menulist>
        <menulist :showwords="this.words[3]" path="/newmv">
              <i class="iconfont icon-MV"></i>
        </menulist>
      </div>
      
    </div>
</template>

<script>
import menulist from './menulist.vue'
export default {
  components: { menulist},
  data () {
    return {
      words:["发现音乐","推荐歌单","最新音乐","最新MV",],
    }
  },
  methods: {
    loginshow(){
      this.$store.commit('changelogin')
      
    },
  }
}
</script>

<style lang="scss" scoped>
 .playmenu{
        width: 250px;
        display: flex;
        flex-direction: column;
        background-color: #EDEDED;
        height: 100%;
        // height: calc(100% - 100px);
        .title{
          cursor: pointer;
          padding-left: 35px;
          height: 44px;
          line-height: 44px;
          background-color:  #EDEDED;
          .iconfont{
            margin-right: 20px;
          }
        }
        .menu-wrap{
          flex: 1;
          height: 100%;
          overflow: hidden;
          overflow-y: auto;
          .iconfont{
              margin-right: 10px;
              }
        } 
      }
</style>