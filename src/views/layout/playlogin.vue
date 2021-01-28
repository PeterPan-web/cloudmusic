<template>
  <div class="login" v-show="this.$store.state.toglogin">
    <div class="logintop">
      <div>
        登录
      </div>
      <div @click="closelogin"> <i class="iconfont icon-cha"></i></div>
    </div>
    <div class="logincontent">
      <div>
       <el-input v-model="input" placeholder="请输入您的网易云uid"></el-input> 
      </div>
      <div class="words">
        <p>注：默认登陆的是我的id，想登陆你的就按下面的步骤来吧⬇</p>
        <p>1、<a href="http://music.163.com" target="_balnk">点我(http://music.163.com)</a>打开网易云音乐官网 </p>
        <p>2、点击页面右上角的“登录”</p>
        <p>3、点击您的头像，进入我的主页</p>
        <p>4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）</p>
      </div>
    </div>
    <div class="loginbtn">
      登录
    </div>
    </div>
</template>

<script>
export default {
data () {
  return {
     input: '386016891',
  }
},
methods: {
     closelogin(){
      this.$store.commit('changelogin')
     }
},

mounted (){

}
}
</script>

<style lang="scss" scoped>
.login{
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: #F9F9F9;
    transform: translate(-50%,-50%);
    width: 350px;
    height: 350px;
    .logintop{
      margin: 18px;
      display: flex;
      justify-content: space-between;
      :nth-child(2){
        cursor: pointer;
        &:hover{color: red;}
      }
    }
    .logincontent{
      padding:10px 30px 0 30px;
      :first-child{
        height: 20px;
        width: 300px;
      }
      .words{
        margin-top: 10px;
        font-size:15px ;
        a{
          color: red;
          margin-right: 5px;
        }
        p{
          height: 35px;
        }
      }
    }
    .loginbtn{
      margin: 30px 30px 0px 30px;
      height: 30px;
      border-radius: 20px;
      text-align: center;
      line-height: 30px;
      background-color: red;
      color: white;
      cursor: pointer;
    }
      }
</style>