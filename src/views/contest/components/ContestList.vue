<template>

    <div class="problems">
        <el-table
        :data="tableData"
         style="width: 100%"
         :stripe="true"
         v-loading="loading"
        >
        <el-table-column prop="matchId" label="Id" width="50" />
        <el-table-column label="名称" width="180">
            <template #default="scope">
              <el-button type="text" style="color: #606266;" @click="rpush(scope.row.matchId)">{{ scope.row.matchName }}</el-button>
            </template>
          </el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="250" />
        <el-table-column prop="endTime" label="结束时间" width="250" />
        <el-table-column prop="userId" label="举办人" />
      </el-table>
    </div>
    <div class="bottom">
        <el-pagination background layout="prev, pager, next,jumper" :total="320" @current-change="changeSize()"  v-model:currentPage="pagesize"></el-pagination>
    </div>
</template>
<script lang="ts" setup>
    import {ref, reactive,onBeforeMount} from 'vue'
    import { getCurrentInstance,onMounted} from "vue";
    let { proxy } = getCurrentInstance();
    import { useRouter,useRoute } from "vue-router";
    const pagesize=ref(1);
    let tableData = ref([])
    const router = useRouter()
    const loading = ref(false)
    const rpush = (id)=>{
      router.push('/contest/'+id)
    }
    const changeSize = ()=>{
        proxy.$axios.get('match/getmatch?page='+pagesize.value).then(res=>{
          loading.value = true
          tableData.value = res.data.data
          loading.value = false
        })
    }
    onBeforeMount(() => {
        proxy.$axios.get('match/getmatch?page='+pagesize.value).then(res=>{
          loading.value = true
          tableData.value = res.data.data
          loading.value = false
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