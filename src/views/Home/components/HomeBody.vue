<template>
    <div class="root">
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
            <el-tab-pane label="竞赛信息" name="first">
              <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">竞赛是一个经管理员挑选的题目,组成的题集,一般用于针对性的训练</el-tag><br>
              <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">您可以点击竞赛查看正在进行中的竞赛，或查看已结束竞赛进行训练</el-tag>
            </el-tab-pane>
            <el-tab-pane label="新手须知" name="second">
                <div>
                    <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">
                        为了循序渐进学习，您可以按题目难度顺序解答题目，有问题请在讨论版中提问;
                </el-tag>
                <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">
                    系统具有代码抄袭评判功能，请您远离抄袭。有关积分用途详见积分规则和平时分转换方法，C开放课程期待你加入
            </el-tag>
                </div>
                
            </el-tab-pane>
            <el-tab-pane label="平台简介" name="third">
              <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">CodeTrain是一个在线判题网站,题目类型多样,题目来源于ZOJ</el-tag><br>
              <el-tag type="success" style="margin-top: 15px;margin-left: 15px;">CodeTrain并不是一个真正的OJ,它只能题目内容的集成平台</el-tag><br>
            </el-tab-pane>
          </el-tabs>
    </div>
    
  </template>
  <script lang="ts">
  export default {
    data() {
      return {
        activeName: 'first',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
    },
  }
  </script>
  <style scoped>
      .root{
          margin-left: 5%;
          margin-top: 15px;
          width: 90%;
      }
  </style>