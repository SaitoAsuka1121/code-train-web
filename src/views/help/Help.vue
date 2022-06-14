<template>
    <el-container style="height: 100%;">
        <el-header><Navbar/></el-header>
        <h1 style="background-color: #fd9644!important;
        color: white;">Welcome To CodeTrain Online Judge</h1>
        <el-container >
          <el-main>
          <pre>
              
          </pre>
          </el-main>
        </el-container>
        <el-footer><h1 class="copyright">CodeTrain by <span style="color: #409EFF;">Liu</span></h1></el-footer>
      </el-container>
</template>
<script lang="ts" setup>
    import Navbar from '../../components/Navbar.vue'
</script>
<style scoped>
        .el-header {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0!important;
}
.el-footer {
  background-color: #000;
  line-height: 74px;
  color: white;
  text-align: center;
  width: 100%!important;
  height: 10%!important;
}
</style>