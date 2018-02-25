<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './common.scss';
@import './assets/style.css';
@import './normalize.css';

html, body{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Josefin Sans', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
