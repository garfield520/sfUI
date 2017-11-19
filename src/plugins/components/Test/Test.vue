<template lang="html">
  <div>
    <div class="test">
      hello world
    </div>
  </div>
</template>

<script>

export default {
  name: 'sfTest'
}
</script>

<style lang="less" scoped>
  @import url('../../less/index.less');

  .test {
    background: @dangerColor;
    color: @bgColor;
  }
</style>
