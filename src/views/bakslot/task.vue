<template>
  <div id="qwe">
    <h1>插槽后备内容-任务</h1>
    <p>
      用户名:
      <input type="text" />
    </p>
    <p>
      密码:
      <input type="password" />
    </p>
    <button><slot>登录</slot></button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#task {
  display: block;
  background-color: red;
}
</style>