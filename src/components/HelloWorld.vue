<template>
  <div class="hello box">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    {{$t('lang.hello')}}
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <p>good</p>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value1: ""
    };
  },
  mounted() {
    console.log(this.ElementUI);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  p {
    color: red;
  }
}
</style> 
