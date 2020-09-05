<template>
<!--   博客分类-->
    <div class="blog-category">
        <h2 class="category-title">分类</h2>
        <div class="all-category-info">
        <div class="category-count">
            <p>目前共计{{list.length}}个分类</p>
        </div>
            <div class="all-category-list">
                    <ul>
                        <li v-for="i in list">
                            <a>{{i.category}}</a><span v-text="'('+i.count+')'"></span>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category",
        data(){
            return{
                list:[
                    {
                        category:'Git',
                        count:1
                    },{
                        category:'Linux',
                        count:8
                    },{
                        category:'MongoDB',
                        count:1
                    },{
                        category:'Mysql',
                        count:4
                    },{
                        category:'Nginx',
                        count:4
                    },{
                        category: 'PHP',
                        count:21
                    },{
                        category:'Python',
                        count:14
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./src/style/index";
    .blog-category{
        .w(900);
        margin: 100px auto 0;
        text-align: center;
        .category-title{
            font-size: 26px;
            font-weight: 400;
            color: #555555;
        }
        .all-category-info {
            .w(900);
            .category-count {
                color: #555555;
                font-size: 16px;
                margin-top: 50px;
            }
            .all-category-list{
                .w(900);
                ul{
                    text-align: left;
                    margin-top: 40px;
                    li {
                        margin: 20px;
                        display: block;
                        font-size: 16px;
                        color: #555555;
                        list-style: none;
                        a{
                            /*cursor: pointer;*/
                            margin-right: 5px;
                            border-bottom: #555555 1px dashed;
                        }
                        span{
                            color: #bbbbbb;
                        }
                    }
                }
            }
        }
    }
</style>