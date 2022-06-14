<template>
    <el-carousel :interval="4000" type="card" height="250px">
     
      <el-carousel-item>
        <el-image
       
        src="https://image.nwanna.cn/20211.png"
        fit="fit"
      ></el-image>
        
      </el-carousel-item>
      <el-carousel-item>
        <el-image
       
        src="https://x-static.lanqiao.cn/upload/202111/courseimg/2562d4eb-1fc7-41a6-ab78-b0ed688c71cd.jpg"
        fit="cover"
      ></el-image>
        
      </el-carousel-item>
      <el-carousel-item>
        <el-image
       
        src="https://x-static.lanqiao.cn/upload/202111/courseimg/469896c1-1673-4fb3-bcd1-f51c4230ef89.jpg"
        fit="cover"
      ></el-image>
        
      </el-carousel-item>
      <el-carousel-item>
        <el-image
       
        src="https://x-static.lanqiao.cn/upload/202112/courseimg/5ecc510f-cd90-45c7-b34e-339712bdb962.jpg"
        fit="cover"
      ></el-image>
        
      </el-carousel-item>
      
    </el-carousel>
  
  </template>
  
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #ffffff;
  }
  </style>
  