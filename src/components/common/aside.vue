<template>
               <div class="col-sm-3 col-md-2 sidebar">
                   <ul class="nav nav-sidebar">
                        <li>
                            <router-link to="/tab/home">
                                首页
                            </router-link>
                        </li> 
                         
                        <li>
                            <router-link to="/tab/hero">
                                英雄管理
                            </router-link>
                        </li> 
                       <li>
                            <router-link to="/tab/foo">
                                Foo 
                            </router-link>
                        </li> 
                        <li>
                            <router-link to="/tab/bar">
                                Bar 
                            </router-link>
                        </li> 
                    </ul> 
                </div>
</template>
<script>
    export default {
        data(){
            return{
                num:100
            }
        }
    }
</script>
<style scoped>
.sidebar {
    display: none;
  }
    .nav-sidebar {
    margin-right: -21px;
    /* 20px padding + 1px border */
    margin-bottom: 20px;
    margin-left: -20px;
  }
  
  .nav-sidebar>li>a {
    padding-right: 20px;
    padding-left: 20px;
  }
  
  .nav-sidebar>li>a.active,
  .nav-sidebar>li>a.active:hover, 
  .nav-sidebar>li>a.active:focus {
    color: #fff;
    background-color: #428bca;
  }
  
    @media (min-width: 768px) {
    .sidebar {
      position: fixed;
      top: 50px;
      bottom: 0;
      left: 0;
      z-index: 1000;
    display: inline-block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      /* Scrollable contents if viewport is shorter than content. */
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
    }
  }
</style>
