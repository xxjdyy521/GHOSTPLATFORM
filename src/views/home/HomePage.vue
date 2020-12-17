<template>
  <div>
    <span style="font-size: 20px">my homepage!</span>
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
