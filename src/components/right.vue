<template>
    <div>
        <div class="sidebar-toggle">
            <div class="sidebar-toggle-line-wrap">
                <svg class="icon" aria-hidden="true" ref="open">
                    <use :xlink:href="show?'#icon-youbian':'#icon-zuobian'"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import rightTime from "./rightTime"
    export default {
        name: "right",
        components:{
            rightTime
        },
        methods:{
        },
        data(){
            return {
                show:false
            }
        },
        props:['showPanel'],
        watch:{
            showPanel(){
                this.show = this.showPanel
            }
        }
    }
</script>

<style scoped lang="less">
    .sidebar-toggle{
        position: fixed;
        bottom: 100px;
        right: 100px;
        height: 24px;
        width: 24px;
        padding: 5px;
        background-color: rgba(193, 179, 179, 0.3);
        .sidebar-toggle-line-wrap{
            height: 24px;
            position: relative;
            svg{
                position: absolute;
                top: 0;left:0;
                font-size: 25px;
                cursor: pointer;
            }
        }
    }
</style>