<template>
  <div id="app">
    <router-link to="/defaultSlot">默认插槽</router-link>
    <router-link to="/bakslot">后备内容</router-link>
    <router-link to="/nameSlot">具名插槽</router-link>
    <router-link to="/scopeSlot">作用域插槽</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  comments: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin-left: 20px;
}
</style>
