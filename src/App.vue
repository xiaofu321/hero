<template>
  <div id="app" class="box">
      <top></top>
      <div class="container-fluid">
        <div class="row">
          <side></side>
           <router-view/>
        </div>   
      </div>
  </div>
</template>

<script>
import top from './components/common/top.vue'
import side from './components/common/aside.vue'
export default {
  data(){
    return{

    }
  },
   components:{
      top,
      side
    }
}
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
