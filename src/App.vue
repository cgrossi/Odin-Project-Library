<template>
  <div id="app">
    <Library/>
  </div>
</template>

<script>
import Library from "./components/Library.vue";

export default {
  name: "app",
  components: {
    Library
  }
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(232, 63%, 40%);
  margin-top: 20px;
}
</style>
