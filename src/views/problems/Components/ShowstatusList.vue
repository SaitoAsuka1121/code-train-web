<template>
    <div class="root">
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="题号" style="width: 8%;">
          <el-input v-model="formInline.problemId"></el-input>
        </el-form-item>
        <el-form-item label="用户名" style="width: 10%;">
            <el-input v-model="formInline.userName"></el-input>
        </el-form-item>
        <el-form-item label="运行结果" style="width: 15%;">
          <el-select v-model="formInline.resultS">
            <el-option label="All" value="All"></el-option>
            <el-option label="Accepted" value="Accepted"></el-option>
            <el-option label="Presenting Error" value="PE"></el-option>
            <el-option label="Time Limt Exceed" value="TLE"></el-option>
            <el-option label="Memory Limit Exceed" value="MLE"></el-option>
            <el-option label="Output Limit Exceed" value="OLE"></el-option>
            <el-option label="Wrong Answer" value="WA"></el-option>
            <el-option label="Complie Error" value="CE"></el-option>
            <el-option label="Runtime Error" value="RE"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="语言" style="width: 15%;">
            <el-select v-model="formInline.languageS">
                <el-option label="All" value="All"></el-option>
              <el-option label="C(gcc)" value="gcc"></el-option>
              <el-option label="C++(g++)" value="g++"></el-option>
              <el-option label="Java(javac)" value="javac"></el-option>
              <el-option label="Python(python2)" value="python2"></el-option>
              <el-option label="Python(python3)" value="python3"></el-option>
            </el-select>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form> -->
    </div>
    <div class="problems">
        <el-table
        :data="tableData"
         style="width: 100%"
         :stripe="true"
        >
        <!-- <el-table-column prop="id" label="记录Id" width="100" /> -->
        <el-table-column prop="userId" label="用户" width="180" />
        <el-table-column prop="problemId" label="题目" width="180" />
        <el-table-column prop="type" label="运行结果" />
        <el-table-column prop="language" label="语言" />
        <el-table-column prop="createdTime" label="提交时间" />
      </el-table>
    </div>
    <div class="bottom">
        <el-pagination background layout="prev, pager, next,jumper" :total="320" @current-change="changeSize()"  v-model:currentPage="pagesize"></el-pagination>
    </div>
</template>
<script lang="ts" setup>
    import {ref, reactive} from 'vue'
    import { useRouter,useRoute } from "vue-router";
    import { getCurrentInstance, onBeforeMount,onMounted} from "vue";
    let { proxy } = getCurrentInstance();
    const formInline = reactive({
        problemId: '',
        userName: '',
        resultS:'All',
        languageS:'All'
      })
      const route = useRoute()
    const onSubmit = ()=> {
      console.log('submit!')
    }
    const pagesize=ref(1);
    const tableData = ref([])
    const changeSize = ()=>{
      proxy.$axios.get('/submitlog/sub?page='+pagesize.value).then(res=>{
              tableData.value = res.data.data
            })
    }
    onBeforeMount(() => {
            proxy.$axios.get('/submitlog/sub?page='+pagesize.value).then(res=>{
              tableData.value = res.data.data
            })
        })  
</script>
<style scoped>
.root{
    margin-top: 15px;
}
.bottom{
    position: relative;
    top: 30px;
}
.problems{
    overflow: hidden!important;
    position: relative;
    width: 90%;
    left: 5%;
    top: 20px;
    height: 80%;
}
</style>