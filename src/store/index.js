import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toglogin:false,
      // 全屏变量，标识当前是否为全屏状态
    fullscreen: false,
  },
  mutations: {
    //改变login的显示
    changelogin(state){
      state.toglogin=!state.toglogin
    },
    //设置全屏
    handleFullScreen(state){
      let element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
      }
      state.fullscreen = !state.fullscreen;
    },
    //退出全屏
    closeFullScreen(state){
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      state.fullscreen = !state.fullscreen;
    },
  },
  actions: {
  },
  modules: {
  }
})
