<template>
    <span class="logintext">登录</span>
    <span class="regtext">
        <router-link to="/auth/register">
            <el-button type="text">还没注册?</el-button>
        </router-link>
    </span>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="login-panle">
        <el-form-item prop="username">
            <el-input v-model="ruleForm.username" type="username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
    import { ElMessage } from 'element-plus'
    export default {
        data() {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名!'))
                } else {
                    if (!(value.length >= 3 && value.length <= 8)) {
                        callback(new Error('用户名长度应在3-8位'))
                    } else {
                        callback()
                    }
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码!'))
                }
                callback()
            }
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{ validator: validateUsername, trigger: 'blur' }],
                    password: [{ validator: validatePassword, trigger: 'blur' }],
                },
            }
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password
                        }
                        this.$axios.post('/users/login', data).then(res => {
                            if (res.data.data != null) {
                                localStorage.setItem("User", data.username)
                                localStorage.setItem("Token", res.data.data)
                                this.$router.push('/')
                                ElMessage({
                                    showClose: true,
                                    message: "登录成功",
                                    type: 'success',
                                    duration:1000
                                })
                            } else {
                                ElMessage({
                                    showClose: true,
                                    message: res.data.msg,
                                    type: 'error',
                                    duration:1000
                                })
                            }
                        })
                    } else {
                        ElMessage({
                                    showClose: true,
                                    message: '请按照要求输入',
                                    type: 'warning',
                                    duration:1000
                                })
                        return false
                    }
                })
            },
        },
    }

</script>
<style scoped>
    .logintext {
        position: relative;
        left: -65px;
        top: 38px;
        font-size: 21px;
        font-weight: bold;
    }

    .regtext {
        position: relative;
        left: 65px;
        top: 39px;
        font-size: 14px;
        font-weight: bold;
    }

    .login-panle {
        position: relative;
        top: 54px;
        left: -79px;
        width: 114%;
        height: 70%;
    }
</style>