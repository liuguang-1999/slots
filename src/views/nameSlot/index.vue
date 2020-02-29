<template>
  <div>
    <h1>具名插槽</h1>
    <child>
      <span slot="wum">迪丽热巴</span>
      <span slot="man">张翰</span>
    </child>
    <!-- 具名插槽任务 第一个实例 -->
    <task>
      <div style="height: 20px;background-color: blue;" slot="header">我是111header</div>
      <div style="color:yellow" slot="body">我是123body</div>
      <div style="color:green" slot="footer">我是是footer</div>
    </task>
    <!-- 具名插槽任务 第二个实例 -->
    <task>
      <div style="height:40px;background:yellow" slot="header">我是235111header</div>
      <div style="color:green" slot="body">我是123body</div>
      <div style="color:red" slot="footer">我是是footer</div>
    </task>
  </div>
</template>

<script>
import child from "./child";
import task from "./task";
export default {
  components: {
    child,
    task
  }
};
</script>

<style>
</style>