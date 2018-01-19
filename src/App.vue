<template>
  <div id="app">
    <img src="./assets/logo.png">
    <main>
      <v-container style="min-height: auto; margin-top: 80px;">
        <router-view></router-view>
      </v-container>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
