<template>
  <div>
    <h1>默认插槽</h1>
    <child>
      西瓜
      苹果
    </child>
    <!-- 任务 -->
    <task>
      <span style="color:red; font-weight:700;">黑马</span>
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