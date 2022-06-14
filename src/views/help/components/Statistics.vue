<template>
    <div class="root">
        <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span><h2>统计信息</h2></span>
              </div>
            </template>
            <span style="position: relative;left: -70px;" >本站共收录:3179道题<br></span>
            <span style="position: relative;left: -90px;" >本站共注册:3人<br></span>
            <span style="position: relative;left: -90px;" >本站共在线:1人<br></span>
            <span style="position: relative;left: -90px;" >本站共提交:6次<br></span>
          </el-card>
    </div>
    
  </template>
  <script lang="ts" setup>
  
  </script>
<style scoped>
    .root{
        position: absolute;
        top: 360px;
    }
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