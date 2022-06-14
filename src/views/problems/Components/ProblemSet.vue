<template>
    <el-scrollbar height="600px">
    <div class="bottom">
        <el-pagination background layout="prev, pager, next,jumper" 
        :total="320" 
        @current-change="changeSize()"  
        v-model:currentPage="pagesize"
        :pager-count="15"></el-pagination>
    </div>
    <div class="problems">
        <el-table
        :data="tableData"
         style="width: 100%"
         :stripe="true"
         v-loading="loading"
        >
        <el-table-column prop="Solved" label="Solved" width="70" />
        <el-table-column prop="id" label="Id" width="100" />
        <!-- <el-table-column prop="title" label="Label" width="500" /> -->
        <el-table-column label="Label" width="550">
            <template #default="scope">
              <el-button type="text" style="color: #606266;" @click="findProblem(scope.row.id)">{{ scope.row.title }}</el-button>
            </template>
          </el-table-column>
        <el-table-column prop="accepts" label="Accepts" />
        <el-table-column prop="submits" label="Submits" />
      </el-table>
    </div>
</el-scrollbar>
</template>
<script lang="ts" setup>
    import {ref, reactive} from 'vue'
    import { useRouter } from "vue-router";
    import { getCurrentInstance, onBeforeMount,onMounted} from "vue";
    let { proxy } = getCurrentInstance();
    const router = useRouter()
    const pagesize=ref(1);
    let loading = ref(false)
    const changeSize = ()=>{
        proxy.$axios.get('problemset/problemspage?page='+pagesize.value).then(res=>{
          loading.value = true
          tableData.value = res.data.data
          loading.value=false
        })
    }
    const findProblem=(id)=>{
        router.push('/problem/'+id)
    }
    let tableData = ref([])
    onBeforeMount(() => {
        proxy.$axios.get('problemset/problemspage?page='+pagesize.value).then(res=>{
          loading.value = true
          tableData.value = res.data.data
          loading.value = false
        })
    })
</script>
<style scoped>
.bottom{
    position: relative;
    top: 10px;
    left: -10%;
}
.problems{
    position: relative;
    margin-top: 10px;
    width: 80%;
    left: 10%;
    top: 20px;
}
</style>