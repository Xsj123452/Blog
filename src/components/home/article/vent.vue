<template>
<!--    吐槽组件-->
    <div class="vent-article">
        <p class="qingqiu">随便对站长吐槽点什么吧...</p>
        <span>&nbsp;&nbsp;您的昵称：</span><el-input v-model="input" placeholder="请输入内容" size="small" style="width: 200px"></el-input>
        <span style="margin-left: 20px">您的邮箱：</span><el-input v-model="input" placeholder="请输入内容" size="small" style="width: 200px;type :email" ></el-input>
        <p style="margin: 0">留言内容：</p><el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="textarea">
    </el-input>
<!--        提交按钮-->
        <div class="submit-vent">
            <el-button type="primary">提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vent",
        data(){
            return{
                id:this.$route.params.id,
                input:'',
                textarea:'',
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/style/index";
        .vent-article{
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
            .w(850);
            font-size: 16px;
            .qingqiu{
                padding-top: 20px;
                margin: 20px 0 20px 10px;
            }
            span{
                margin: 10px 0 20px 10px;
            }
            /*p{*/
            /*    padding-top: 10px;*/
            /*    margin: 20px 0 20px 5px;*/
            /*}*/
            /*span{*/
            /*    margin-left: 5px;*/
            /*}*/
            p{
                padding-top: 20px;
                padding-left: 10px;
            }
            .submit-vent{
                margin: 20px 0 20px 0;
                .margin_l(750);
                padding-bottom: 20px;
            }
        }
</style>