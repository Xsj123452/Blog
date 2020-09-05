<template>
    <div class="nav">
        <div class="menu">
            <div class="menu-author">
                <span>Mr.Xu</span>
            </div>
            <div class="menu-option">
                <ul>
                    <li class="one-menu-option" v-for="i in list" @click="toPage(i.path)">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="i.symbol"></use>
                        </svg>
                        <p v-text="i.name" ></p>
                    </li>
                </ul>
            </div>
            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
            return {
                list:[
                    {
                        name:'首页',
                        path:'/home',
                        symbol:'#icon-shouye'
                    },{
                        name: '标签',
                        path: '/tags',
                        symbol: '#icon-biaoqian'
                    },{
                        name: '分类',
                        path: '/category',
                        symbol:'#icon-fenlei'
                    }, {
                        name: 'Dic',
                        path: '/dic',
                        symbol: '#icon-guidang'
                    },{
                        name: '互动',
                        path: '/interact',
                        symbol: '#icon-biaoqiankuozhan_hudong-184'
                    },{
                        name: '友链',
                        path: '/friendly',
                        symbol: '#icon-haoyoufenxiang'
                    },{
                        name: '关于',
                        path: '/about',
                        symbol: '#icon-guanyuwomen'
                    }
                ]
            }
        },methods:{
            toPage(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/style/index";
    .nav{
        width: 100vw;
        height: 85px;
        background-image: url("../assets/headbg.jpg");
        .menu{
            display: flex;
            margin:0 auto 0;
            .w(900);
            height: 85px;
            /*background-color: red;*/
            align-items: center;
            svg{
                position: absolute;
                float: right;
            }
            .menu-author{
                .w(80);
                line-height: 85px;
                font-size: @fs-l;
            }
            .menu-option{
                .w(800);
                height: 32px;
                margin: 0 auto 0;
                text-align: center;
                ul {
                    display: flex;
                    justify-content: space-around;
                    line-height: 32px;
                    li {
                        display: flex;
                        list-style: none;
                        font-size: @fs-s;
                        float: left;
                        color: #555555;
                        width: 55px;
                        cursor: pointer;
                        P {
                            margin-left: 15px;
                        }
                        svg{
                            margin-top: 8px;
                            /*margin-left: -15px;*/
                        }
                    }
                }
            }

        }

    }

</style>