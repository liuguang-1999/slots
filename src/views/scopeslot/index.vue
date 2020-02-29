<template>
  <div>
    <h1>作用域插槽</h1>
    <child>
      <span slot-scope="name1">
        {{name1.name1}}
      </span>
    </child>
    <!-- 任务 -->
    <task>
      <span slot-scope="qwe" slot="header" style="font-size:48px; color:red;"> 
        <!-- qwe 随意命名 -->
        {{qwe.ccc}}
      </span>
      
        <template slot="body"  slot-scope="qqq">
          <span v-for="(item,index) in qqq.list" :key="index">{{qqq.list[index]}}</span>
        </template>
      
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
  },
  data(){
    return {
      name:'张三' 
    }
  }
};
</script>

<style>
</style>