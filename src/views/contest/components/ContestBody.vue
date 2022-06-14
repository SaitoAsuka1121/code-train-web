<template>
    <el-container style="height: 100%;">
        <el-header><Navbar/></el-header>
        <el-container >
          <el-main>
            <div class="card">
                <el-card class="box-card">
                    <template #header>
                      <div>
                        <h1 style="font-size: 30px;">{{body.matchName}}</h1>
                      </div>
                      <div><b>开始时间:</b>{{body.startTime}} &nbsp;&nbsp;&nbsp;<b>结束时间:</b>{{body.endTime}}</div>
                    </template>
                    <span style="margin-left: -28.5rem;">题目id</span><br>
                  <span v-for="(item,index) in pros" style="margin-left: -30rem;margin-top: 100px!important;" @click="rputh(item)"> <el-tag type="success">{{item}}</el-tag><br></span>
                  </el-card>
            </div>
          </el-main>
        </el-container>
        <el-footer><h1 class="copyright">CodeTrain by <span style="color: #409EFF;">Liu</span></h1></el-footer>
      </el-container>
</template>
<script lang="ts" setup>
import Navbar from '../../../components/Navbar.vue'
import {ref,getCurrentInstance,onMounted,onBeforeMount} from 'vue'
let { proxy } = getCurrentInstance();
import { useRouter,useRoute } from "vue-router";
let body = ref([])
let pros = ref([])
const route = useRoute()
const router = useRouter()
const rputh = (item)=>{
    router.push('/problem/'+item)
}
onBeforeMount(() => {
        proxy.$axios.get('/match/contest/'+route.params.id).then(res=>{
          body.value = res.data.data
          pros.value = body.value.problemsId.split(',')
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

.el-aside {
  margin-top: .9375rem;
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  width: 20%!important;
}

.el-main {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  width: 80%!important;
  padding: 10px!important;
}
.card{
    margin-top: 120px;
}
</style>