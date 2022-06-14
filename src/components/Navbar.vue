<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router @select="handleSelect"
    background-color="#fa8231" text-color="#ffffff" active-text-color="#ffffff">
    <el-menu-item index="/">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>题目</template>
      <el-menu-item index="/problems/list">题目列表</el-menu-item>
      <el-menu-item index="/problems/showstatus">提交状态</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/contest/list">竞赛</el-menu-item>
    <el-menu-item v-show="username==null" index="/auth/login" style="left: 75%;">登录</el-menu-item>
    <el-menu-item v-show="username==null" index="/auth/register" style="left: 75%;">注册</el-menu-item>
    <el-menu-item v-show="username!=null" index="" style="left: 75%;">{{username}}</el-menu-item>
    <el-menu-item v-show="username!=null" index="" style="left: 75%;">
      <el-button type="text" @click="logout">退出</el-button>
    </el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import router from '../router'
  export default defineComponent({
    setup() {
      const activeIndex = ref('1')
      const handleSelect = (key, keyPath) => {
        // router.replace(key)
      }
      const username = ref(localStorage.getItem("User"))
      return {
        activeIndex,
        handleSelect,
        username
      }
    },
    methods: {
      logout() {
        let { token } = {};
        token = localStorage.getItem('Token')
        if (token != null) {
          this.$axios.post('/users/logout', { token }).then(res => {
            if (res.data.msg == "success") {
              this.$router.push('/')
              ElMessage({
                showClose: true,
                message: "退出成功",
                type: 'success',
                duration: 1000
              })
              localStorage.clear()
              this.username=null
              
            } else {
              ElMessage({
                showClose: true,
                message: "退出失败",
                type: 'error',
                duration: 1000
              })
            }
          })
        }
      }
    }
  })
</script>
<style>
  .el-menu-demo {
    width: 100%;
  }

  .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    min-width: 90px !important;
  }

  .el-menu--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: solid 1px #fa8231 !important;
    border-right: none;
  }
</style>