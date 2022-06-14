<template>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          style="height: 100%;"
          router
        >
          <el-menu-item index="/problems/list">
            <span >题目</span>
          </el-menu-item>
          <el-menu-item index="/problems/showstatus">
            <span >提交状态</span>
          </el-menu-item>
        </el-menu>
  </template>
  
  <script lang="ts" setup>
      import { ref } from 'vue'
      const leftindex = ref(1);
  </script>
  <style scoped>
   
  </style>