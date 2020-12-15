<template>
  <div>
    <p>aaaaaaaaaaaaaaa</p>
    <a-button @click="test2">测试2</a-button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    methods:{
      test2(){
        this.$router.push({path:'/test2'})
      }
    }
  }
</script>

<style scoped>

</style>
