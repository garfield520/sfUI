<template>
  <div>
    <h2>hello, this is home page</h2>
    <sf-button @click="$router.push({name: 'Music', params: {id: 1}})">MUSIC</sf-button>
    <sf-button @click="$router.push({name: 'Movie'})">MOIVE</sf-button>
    <router-view class="router" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .router {
      border: 1px solid green;
      padding: 10px;
  }
</style>
