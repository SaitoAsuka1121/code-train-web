<template>
    <span class="logintext">注册</span>
    <span class="regtext">
        <router-link to="/auth/login">
            <el-button type="text">已有账号?</el-button>
        </router-link>
    </span>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="login-panle">
        <el-form-item prop="username">
            <el-input v-model="ruleForm.username" type="username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="nickname">
            <el-input v-model="ruleForm.nickname" type="username" autocomplete="off" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.repassword" type="password" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
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
                } else {
                    if (value != this.ruleForm.repassword) {
                        callback(new Error('两次密码输入不一致'))
                    } else {
                        if (!(value.length >= 8 && value.length <= 12)) {
                            callback(new Error('密码长度应在8-12位'))
                        } else {
                            callback()
                        }
                    }
                }
            }
            const validateREPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码!'))
                } else {
                    if (value != this.ruleForm.password) {
                        callback(new Error('两次密码输入不一致'))
                    } else {
                        if (!(value.length >= 8 && value.length <= 12)) {
                            callback(new Error('密码长度应在8-12位'))
                        } else {
                            callback()
                        }
                    }
                }
            }
            const validateNickname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入昵称!'))
                } else {
                    if (!(value.length >= 3 && value.length <= 8)) {
                        callback(new Error('昵称长度应在3-8位'))
                    } else {
                        callback()
                    }
                }
            }
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    repassword: '',
                    nickname: ''
                },
                rules: {
                    username: [{ validator: validateUsername, trigger: 'blur' }],
                    nickname: [{ validator: validateNickname, trigger: 'blur' }],
                    password: [{ validator: validatePassword, trigger: 'blur' }],
                    repassword: [{ validator: validateREPassword, trigger: 'blur' }]
                },
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                            nickname: this.ruleForm.nickname
                        }
                        this.$axios.post("/users/register",data).then(res=>{
                            if (res.data.data != null) {
                                localStorage.setItem("User", data.username)
                                localStorage.setItem("Token", res.data.data)
                                this.$router.push('/')
                                ElMessage({
                                    showClose: true,
                                    message: "注册成功,并已登录",
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
                            duration: 1000
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