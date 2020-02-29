<template>
  <div>
      <h1>作用域插槽任务</h1>
      <slot name="header" :ccc="name"></slot>
      <!-- v-bind 变量名不可用name -->
      <slot name="body" :list="list"></slot>
  </div>
</template>

<script>
export default {
data(){
    return {
        name:"Hello World",
        list:["北京","上海","天津"]
    }
}
}
</script>

<style>

</style>