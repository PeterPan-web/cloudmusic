<template>
  <div>
    <eltable>
        <div class="songplay" slot="fristwrap">

  </div>
  <div class="talkplay" slot="secondwrap">

  </div>
    </eltable>
  </div>
</template>

<script>
import eltable from "components/content/eltable.vue";

export default { 
  components: { eltable } 
  };
</script>

<style lang="scss" scoped>
.songplay{
  width: 100%;
  height: 100%;
  background-color: sandybrown;
}
.talkplay{
    width: 100%;
  height: 100%;
  background-color: seagreen;
}
</style>
