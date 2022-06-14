<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span><h2>通知公告</h2></span>
        <el-button class="button" type="text">更多</el-button>
      </div>
    </template>
    <span style="position: relative;left: -103px;" >本站新开<br></span>
    <span style="position: relative;left: -103px;" >详情通知<br></span>
    <span style="position: relative;left: -103px;" >疑问解答<br></span>
    <span style="position: relative;left: -103px;" >关于我们<br></span> 
  </el-card>
</template>
<script lang="ts" setup>

</script>

<style scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    margin-left: 5px !important;
  }

  .el-card {
    min-width: 300px;
    margin-right: 20px;
    margin-left: 3px;
    margin-top: 5px;
    transition: all .5s;
    padding: 0px;
  }

  .el-card:hover {
    margin-top: -5px;
  }
</style>