<template>
  <div id="app">
    <div>
      <sf-button @click="$router.push({name: 'Hello'})">welcome</sf-button>
      <sf-button @click="goHome">home</sf-button>
      <sf-button @click="goAbout">about</sf-button>
      <sf-button @click="goProfile">profile</sf-button>
      <sf-test></sf-test>
    </div>
    <router-view class="out-router" />
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    goHome () {
      this.$router.push({
        name: 'Music',
        params: {
          id: 1
        }
      })
    },

    goAbout () {
      this.$router.push({
        name: 'About'
      })
    },

    goProfile () {
      this.$router.push({
        name: 'Profile'
      })
    }
  },

  mounted () {
    console.log(document.body.clientHeight)
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.out-router {
  border:1px solid #ccc;
  margin-top: 20px;
  padding: 20px;
  height: 550px;
}
</style>
