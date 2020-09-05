<template>
    <div class="rightTime">
        <el-drawer
                :visible.sync="drawer"
                :direction="direction"
                :append-to-body="true"
                :before-close="handleClose"
                :modal="false"
                size='310px'
        class="bgc">
            <el-calendar v-model="value">
            </el-calendar>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: "rightTime",
        data() {
            return {
                drawer: false,
                direction: 'rtl',
                value: new Date()
            };
        },
        methods: {
            handleClose(done) {
                this.$emit('closeRight')
                done()
            }
        },
        props:['show'],
        watch:{
            show(newValue,oldValue){
                console.log(newValue)
                if(newValue){
                    this.drawer=newValue
                }else{
                    this.drawer=false
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./src/style/index";
    .rightTime{
        font-size: @fs-s!important;
        display: none;
        .el-drawer rtl{
            background-color: #9a6e3a!important;
            /*background-image: url("../assets/sidebar-bg1.jpg");*/
        }
        .bgc{
            background-color: red;
        }

    }
</style>