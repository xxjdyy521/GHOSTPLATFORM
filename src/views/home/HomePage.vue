<template>
  <div>
    <el-carousel :interval="3000" type="card" height="475px">
      <el-carousel-item :key="1" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src1"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="2" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src2"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="3" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src3"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="4" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src4"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="5" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src5"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="6" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src6"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="7" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src7"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="8" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src8"></el-image>
      </el-carousel-item>

      <el-carousel-item :key="9" style="width:840px">
        <el-image
          style="width: 100%; height: 100%"
          :src="src9"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data(){
      return{
        src1:require('@/images/pic/a.jpg'),
        src2:require('@/images/pic/b.jpg'),
        src3:require('@/images/pic/c.jpg'),
        src4:require('@/images/pic/d.jpg'),
        src5:require('@/images/pic/e.jpg'),
        src6:require('@/images/pic/f.jpg'),
        src7:require('@/images/pic/g.jpg'),
        src8:require('@/images/pic/h.jpg'),
        src9:require('@/images/pic/i.jpg'),
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
