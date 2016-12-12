<template>
    <div class="panel panel-default">
        <div class="panel-heading">面板</div>
        <div class="panel-body">
            <form class="form-horizontal" validate @submit.prevent="save">
                <div class="form-group">
                    <label for="username" class="col-xs-3  control-label">姓名</label>
                    <div class="col-xs-5">
                        <input type="text" class="form-control"
                        v-model="username"
                        id="username" placeholder="姓名" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="age" class="col-xs-3  control-label">年龄</label>
                    <div class="col-xs-5">
                        <input type="number" class="form-control"
                        v-model="age" id="age" placeholder="年龄">
                    </div>
                </div>
                <div class="form-group">
                       <div class="col-xs-offset-3 col-xs-5">
                           <button class="btn btn-primary" type="submit">保存</button>
                       </div>                    
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        
        data () {
            return {
                username : '李林',
                age : 23
            }    
        },
        
        methods : {
            
            save () {
                console.log(JSON.stringify(this.$data))
            }
            
        }
        
    }
</script>