<template>
    <div class="article">
        <div class="article-header">
            <div class="article-header-title"><a href="#">404</a></div>
            <div class="article-header-info">
                <span><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rili"></use>
                        </svg></span>
                <span>发表于：</span><span>2020-1-1</span>
                <span>| &nbsp;</span>
                <span><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rili1"></use>
                        </svg></span>
                <span>更新于：</span><span>2020-7-29</span>
                <span>| &nbsp;</span>
                <span><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-guidang"></use>
                        </svg></span>
                <span>分类：</span><span>web</span>
                <span>| &nbsp;</span>
                <span><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon_word"></use>
                        </svg></span>
                <span>本文字数：</span>
                <span>4.5k</span>
                <span>| &nbsp;</span>
                <span><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shizhong"></use>
                        </svg></span>
                <span>阅读时长 ≈</span>
                <span>1分钟</span>
            </div>
        </div>
        <div class="article-body">
            <div class="article-body-desc">
                <p>
                    问题描述项目中所有的资源放在/www/jianshu/public/storage中,希望通过url的方式将其展示出来，如下是配置 eg: http://demo.test.com/storage/img/1.png server{ listen 80; listen [::] ...
                </p>
            </div>
            <div class="article-body-toDetail">
                <a href="javascript:;" @click="todetail(id)">阅读全文 »</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        props:['id'],
        methods:{
            todetail(id){
                this.$router.push('/essay/'+id)
            }
        }
    }
</script>

<style scoped lang="less">
@import "src/style/index";
    .article{
        padding: 25px;
        .w(850);
        height: 236px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        color: #dc5a92;
        .article-header {
            .w(850);
            text-align: center;
            a{
                text-decoration: none;
                color: #555555;
            }

            .article-header-title {
                font-size: 26px;
            }

            .article-header-info {
                margin-top: 20px;
                .w(850);
                    font-size: 12px;
            }
        }
        .article-body{
            .article-body-desc{
                color: #555555;
                .w(850);
                height: 64px;
                font-size: 16px;
                margin-top:30px ;
                line-height: 35px;
            }
            .article-body-toDetail{
                .w(850);
                height: 34px;
                margin-top: 30px ;
                font-size: 16px;
                a{
                    color: #555555;
                    text-decoration: none;
                }
            }
        }
    }
</style>