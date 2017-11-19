<template lang="html">
  <div>
    <h1>WELCOME TO MUSIC PAGE</h1>
    <div class="star-box">
      <ul class="star-singer">
        <li>周杰伦</li>
        <li>林俊杰</li>
        <li>王力宏</li>
      </ul>
      <ul class="star-songs">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.params);
  }
}
</script>

<style lang="less" scoped>
  .star-box {
    display: flex;
    ul:nth-child(1) {
      flex-grow: 1
    }
    ul:nth-child(2) {
      flex-grow: 3;
      border: 1px solid blue;
    }
  }
</style>
