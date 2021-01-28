module.exports={
  configureWebpack:{
    resolve:{
      extensions:[],
      alias: {
        "assets":"@/assets",
        "components":"@/components",
        "common":"@/components/common",
        "content":"@/components/content",
        "views":"@/views",
        "router":"@/router",
        'network':'@/network',
        'utils':'@/utils',
      }
    }
  }
}