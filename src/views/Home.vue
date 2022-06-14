<template>
    <el-container style="height: 100%;">
        <el-header><Navbar/></el-header>
        <h1 style="background-color: #fd9644!important;
        color: white;">Welcome To CodeTrain Online Judge</h1>
        <el-container >
          <el-aside>
            <Notice/>
            <Statistics/>
          </el-aside>
          <el-main>
            <Carousel/>
            <HomeBody/>
          </el-main>
        </el-container>
        <el-footer><h1 class="copyright">CodeTrain by <span style="color: #409EFF;">Liu</span></h1></el-footer>
      </el-container>
</template> 
<script setup lang="ts">
    import Navbar from '../components/Navbar.vue'
    import Notice from './help/components/Notice.vue'
    import Statistics from './help/components/Statistics.vue'
    import Carousel from './Home/components/Carousel.vue' 
    import HomeBody from './Home/components/HomeBody.vue'
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

.el-aside {
  margin-top: .9375rem;
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  width: 20%!important;
}

.el-main {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  width: 80%!important;
  padding: 10px!important;
}
</style>