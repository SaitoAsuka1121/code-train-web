<template>
    <el-container style="height: 100%;">
        <el-header><Navbar/></el-header>
            <el-scrollbar height="680px">
            <el-main>
                <el-card class="box-card">
                    <template #header>
                      <div>
                        <h1 style="font-size: 30px;">{{body.title}}</h1>
                      </div>
                      <div>Memory Limit:{{body.memory}} &nbsp;&nbsp;&nbsp;Time Limit:{{body.memory}}</div>
                    </template>
                  <div v-html='body.body' id="Content" style="text-align: left;"></div>
                  <div class="button" style="margin-top: 10px;"> <el-button plain  type="primary" @click="centerDialogVisible = true">提交</el-button></div>
                  </el-card>
                  <el-dialog v-model="centerDialogVisible" title="提交代码" width="50%" center>
                    <div>
                        <el-form :data="fromData">
                            <el-form-item label="语言" style="width: 50%;">
                                <el-select v-model="formData.language">
                                  <el-option label="C(gcc)" value="GCC"></el-option>
                                  <el-option label="C++(g++)" value="GXX"></el-option>
                                  <el-option label="Java(javac)" value="JAVAC"></el-option>
                                  <el-option label="Python(python2)" value="PYTHON2"></el-option>
                                  <el-option label="Python(python3)" value="PYTHON3"></el-option>
                                </el-select>
                              </el-form-item>
                              <el-form-item label="代码" style="width: 10%;">
                                <el-input v-model="formData.code" :rows="10"
                                type="textarea" class="textarea"></el-input>
                            </el-form-item>
                            <el-form-item style="text-align: center;">
                                <el-button type="primary" @click="submitForm()">提交</el-button>
                                <el-button @click="centerDialogVisible = false">关闭</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                  </el-dialog>
            </el-main>
            </el-scrollbar>
      </el-container>
</template>
<script lang="ts" setup>
    import {ref, reactive} from 'vue'
    import { useRouter,useRoute } from "vue-router";
    import { getCurrentInstance, onBeforeMount,onMounted} from "vue";
    let { proxy } = getCurrentInstance();
    import Navbar from '../../../components/Navbar.vue'
    import { ElNotification } from 'element-plus'
    const route = useRoute()
    const centerDialogVisible= ref(false);
    let body = ref({})
    const formData = ref({
        language:'GCC',
        code:'',
    })
    let loading = ref(false)
    const submitForm = ()=>{
        let data = {
            problemId:body.value.pid+'',
            compiler:formData.value.language,
            program:formData.value.code
        }
        ElNotification.info({
        title: 'Info',
        message: '你刚刚提交了一份代码,请等待结果',
        showClose: false,
      })
        proxy.$axios.post('/problemset/problems/submits',data).then(res=>{
                if(res.data.data==null){
                  ElNotification.error({
                    title: '严重错误',
                    message: '请检查代码的可行性',
                    showClose: false,
                  })
                }else{  
                  console.log(res.data);
                  if(res.data.data['submission']['status']=='ACCEPTED'){
                    ElNotification.success({
                    title: '通过',
                    message: '你的代码通过了验证:'+ res.data.data['submission']['status'],
                    showClose: false,
                  })
                  }else{
                    ElNotification.warning({
                    title: '严重错误',
                    message: '你的代码存在错误:'+ res.data.data['submission']['status'],
                    showClose: false,
                  })
                  }
                }
        })
        centerDialogVisible.value=false
        
    }
    onBeforeMount(() => {
            proxy.$axios.get('/problemset/problems/'+route.params.id).then(res=>{
              loading.value = true
                body.value = res.data.data
                loading.value = false
            })
        })  
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
.el-main {
  background-color: rgb(150, 127, 127);
  color: var(--el-text-color-primary);
  text-align: center;
  width: 100%!important;
  padding: 10px!important;
}
#Content >>> pre{
    display: block;
font-size: 87.5%;
color: #212529;
margin-top: 0;
margin-bottom: 1rem;
overflow: auto;
    padding: 6px 12px;
background: hsl(0, 0%, 97%);
border: 1px solid hsl(0, 0%, 91%);
border-radius: 3px;
word-break: break-all;
}
.textarea >>> .el-textarea__inner{
 font-family:"Microsoft" !important;
 font-size:20px !important;
 width: 599px !important;
}
</style>