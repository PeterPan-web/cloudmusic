<template>
  <div class="list" @click="changepath" :class="{active:isactive}">
        <slot></slot>
    {{showwords}}
  </div>
</template>

<script>
export default {
 props: {
    path:String,
    showwords:String
  },
  methods: {
    changepath(){
      this.$router.push(this.path)
    }

  },
  computed: {
      isactive(){
      return this.$route.path.indexOf(this.path) !==-1
    }  
  }
}
</script>

<style lang='scss' scoped>
.list{
  height: 50px;
  text-align: center;
  line-height: 50px;
  display: flex;
  padding-left: 35px;
  font-size:13px;
  cursor: pointer;
  color: #4A4A4A;
}
.active{
  color: #D33A31;
  background-color:#E2E2E2;
}
</style>