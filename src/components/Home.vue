<template>
  <a-layout>
    <div>cccccccc</div>
    <a-button @click="test">测试</a-button>
    <router-view/>
  </a-layout>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return{
      }
    },
    methods:{
      test(){
        this.$router.push({path:'/homepage'})
      }
    }
  }
</script>

<style scoped>

</style>
