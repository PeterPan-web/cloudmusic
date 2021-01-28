<template>
  <div
    id="circlebox"
    :style="{
      backgroundColor: pushcolor,
      width: pushwidth,
      height: pushheight,
    }"
  >
    <div class="icon"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    pushcolor: {
      type:String,
      default() {
        return "red";
      },
    },
    pushwidth: {
     type:String,
      default() {
        return "13px";
      },
    },
    pushheight: {
      type:String,
      default() {
        return "13px";
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#circlebox {
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  margin-right: 3px;
  cursor: pointer;
  .icon {
    text-align: center;
  }
}
</style>

