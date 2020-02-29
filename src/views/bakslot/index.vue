<template>
  <div>
    <h1>后备内容</h1>
    <child>张翰</child>
    <child>张翰</child>
    <child>张翰</child>
    <child>张翰</child>
    <child>张翰</child>
    <child>张翰</child>
    <child>张翰</child>
    <child></child>
    <!-- 任务 -->
    <task>注册</task>
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