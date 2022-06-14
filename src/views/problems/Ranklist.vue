<template>
    <el-container style="height: 100%;">
        <el-header><Navbar/></el-header>
        <el-container>
          <el-aside width="200px"><LeftNav/></el-aside>
          <el-container>
            <el-main><UserRankList/></el-main>
            <el-footer>其他网站</el-footer>
          </el-container>
        </el-container>
      </el-container>
</template>
<script lang="ts" setup>
    import Navbar from '../../components/Navbar.vue'
    import LeftNav from './Components/LeftNav.vue'
    import UserRankList from './Components/UserRankList.vue'
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: rgb(238, 238, 238);
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: white;
  color: black!important;
  text-align: center;
  line-height: 200px;
  padding: 0px;
  border-right:solid 1px #e6e6e6!important
}
.el-table{
    line-height: 81px!important;
}
.el-main {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  overflow:hidden;
  padding: 0px;
}
</style>