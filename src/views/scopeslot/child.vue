<template>
  <div>
    我的名字是
    <slot :name1="name"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:'李四'
    };
  }
};
</script>

<style>
</style>