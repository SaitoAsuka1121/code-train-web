<template>
  <div class="root">
    <Navbar/>
    <div class="panle">
      <div class="autoplay">
       
        <el-carousel :interval="5000" arrow="always" height="30rem">
          <el-carousel-item>
              <el-image
             class="el-image__inner1"
              src="https://image.nwanna.cn/20211.png"
              fit="fit"
            ></el-image>
              
            </el-carousel-item>
            <el-carousel-item>
              <el-image
              class="el-image__inner2"
              src="https://x-static.lanqiao.cn/upload/202111/courseimg/2562d4eb-1fc7-41a6-ab78-b0ed688c71cd.jpg"
              fit="cover"
            ></el-image>
              
            </el-carousel-item>
      </el-carousel>

      </div>
      <div class="register-panle">
        <RegisterPanle></RegisterPanle>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import RegisterPanle from './components/RegisterPanle.vue'
    import Navbar from '../../components/Navbar.vue'
</script>

<style scoped>
.panle {
  position: absolute;
    width: 50rem;
    height: 30rem;
    /* background-color: red; */
    top: 15%;
    left: 25%;
    box-shadow: 2px 2px 10px#909090;
}
.autoplay {
    width: 60%;
    height: 100%;
     /* background-color: rgb(0, 0, 0); */
    border-right: 1px solid rgba(0,0,0, 0.2);
  }
.register-panle {
    margin-left: 60%;
    margin-top: -28rem;
    width: 40%;
    height: 70%;
    /* background-color: rgb(70, 66, 66); */
  }
.el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 30rem;
      margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #ffffff;
}
.el-image__inner1{
    margin-top: 120px!important;
}
.el-image__inner2{
  margin-top: 170px!important;
}
</style>