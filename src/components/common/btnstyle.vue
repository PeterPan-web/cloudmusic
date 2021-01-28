<template>
  <div class="btnstyle" @click="goclick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gonumber: {Number,
    default:0}
  },
  methods: {
    goclick() {
      if (this.gonumber === 0) {
      } else {
        this.$router.go(this.gonumber);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btnstyle {
  margin-right: 15px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: rgba($color: #adacac, $alpha: 0.2);
  }
}
</style>
