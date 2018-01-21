<template>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main con">
                    <h2 class="sub-header">Section title</h2> 
                    <div class="table-responsive">
                        <router-link to="/tab/add">
                            <a href="javascript:;" class="btn btn-success">添加</a>
                        </router-link> 
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>id</th> 
                                    <th>姓名</th> 
                                    <th>定位</th> 
                                    <th>性别</th> 
                                    <th>操作</th>
                                </tr>
                            </thead> 
                                <tbody>
                                    <tr v-for="item in list" :key='item.id'>
                                        <td>{{item.id}}</td> 
                                        <td>{{item.name}}</td> 
                                        <td>坦克</td> 
                                        <td>{{item.gender}}</td> 
                                        <td>
                                            <a href="#" @click="set(item.id)">编辑</a> 
                                            <a href="#" @click="del(item.id)">删除</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        
         <!-- <router-link to="/tab/add">
            <button type="button" class="btn btn-success">添加</button>
         </router-link> -->
</template>
<script>
     export default {
        data(){
            return{
               list:[]
            }
        },
        created () {
            this.getSection()
        },
        methods: {
            async getSection(){
                let {data}  = await this.$http.get('')
                console.log(data)
                this.list = data
            },
            set(id){
                console.log(id)
            },
            async del(id){
                let {data} = await this.$http.get('/'+id)
                console.log(data)
            }
        }
    }

</script>
<style scoped>
    .sub-header {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
    .main {
    padding: 20px;
  }
  
  @media (min-width: 768px) {
    .main {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  
  .main .page-header {
    margin-top: 0;
  }
</style>
