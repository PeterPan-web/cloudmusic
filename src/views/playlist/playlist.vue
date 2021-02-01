<template>
  <div class="playlist">
    <playlistheader :playlist="playlist"></playlistheader>
    <playlistcontent></playlistcontent>
  </div>
</template>

<script>
import { getdetaildata, getsonglist } from "network";
import playlistheader from "./playlistcontent/playlistheader.vue";
import Playlistcontent from './playlistcontent/playlistcontent.vue';
export default {
  components: { playlistheader, Playlistcontent },
  data() {
    return {
      playlist: {},
      song: {},
    };
  },
  mounted() {
   const iid = this.$route.params.id;
    getdetaildata({ id: iid }).then((res) => {
      if (res.code === 200) {
         this.playlist = res.data.playlist;
         console.log(this.playlist);
      }else{
          this.playlist={}
      }
    })
    getsonglist(playlist).then(()=>{
        const trackIds=playlist.playlist.map((id)=>{
          return id
        })
        console.log(trackIds);
    }) 
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  padding: 30px;
  width: 100%;
}
</style>
