<template>
  <div class="qwe">
    <h1>具名插槽任务</h1>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.qwe {
  width: 500px;
  margin: 0 auto;
}
</style>