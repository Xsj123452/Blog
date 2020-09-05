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
                    问题描述:

                    项目中所有的资源放在/www/jianshu/public/storage中,希望通过url的方式将其展示出来，如下是配置

                    eg: http://demo.test.com/storage/img/1.png
                    server
                    {
                    listen 80;
                    listen [::]:80;
                    server_name demo.test.com;
                    index index.php index.html index.htm default.php default.htm default.html;
                    root /www/test/public;

                    #PHP-INFO-START  PHP引用配置，可以注释或修改
                    include enable-php-74.conf;
                    #PHP-INFO-END

                    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
                    include /server/vhost/rewrite/demo.test.com.conf;

                    #REWRITE-END
                    if (!-e $request_filename) {
                    rewrite  ^(.*)$  /index.php?s=/$1  last;
                    break;
                    }

                    #禁止访问的文件或目录
                    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
                    {
                    return 404;
                    }

                    #一键申请SSL证书验证目录相关设置
                    location ~ \.well-known{
                    allow all;
                    }

                    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
                    {
                    expires      30d;
                    error_log off;
                    access_log /dev/null;
                    }

                    location ~ .*\.(js|css)?$
                    {
                    expires      12h;
                    error_log off;
                    access_log /dev/null;
                    }
                    access_log  /wwwlogs/demo.test.com.log;
                    error_log  /wwwlogs/demo.test.com.error.log;
                    }
                    按照如上配置访问时，返回404

                    解决问题
                    新增资源访问配置

                    location ^~ /storage/ {
                    alias  /www/test/public/storage/;
                    }
                    总结
                    root响应的路径：配置的路径（root指向的路径）+完整访问路径(location的路径）+静态文件

                    alias响应的路径：配置路径+静态文件(去除location中配置的路径)

                    s
                </p>
            </div>
        </div>
        <div class="reward-container">
            <el-button type="danger">打赏</el-button>
        </div>
        <div class="article-copyright">
            <p>本文作者： </p>
            <p>本文连接： </p>
            <p>版权声明： </p>
        </div>
        <div class="article-thank">
            <p>-------------本文结束<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-collection"></use>
            </svg>感谢您的阅读-------------</p>
        </div>
        <div class="article-tags">
            <ul>
                <li v-for="t in 3"><a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-biaoqian"></use>
                    </svg>t
                </a></li>
            </ul>
        </div>
        <div style="clear: left"></div>
        <div class="article-share">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-haoyoufenxiang"></use>
            </svg>
        </div>
        <Vent :id="id"></Vent>
    </div>
</template>

<script>
    import Vent from '../../components/home/article/vent'
    export default {
        name: "detail",
        components:{
            Vent
        },
        data(){
            return{
                id:this.$route.params.id
            }
        },
    }
</script>

<style scoped lang="less">
    @import "src/style/index";
    .article{
        margin: 60px auto 0;
        padding: 25px;
        .w(850);
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
                /*height: 64px;*/
                font-size: 16px;
                margin-top:30px ;
                line-height: 35px;
            }
        }
        .reward-container{
            .w(765);
            text-align: center;
        }
        .article-copyright{
            margin: 32px 0 0 0;
            border-left: #9a6e3a 3px solid;
            background-color: #eae7e7;
            padding: 8px 16px;
            .w(815);
            font-size: 16px;
            color: #555555;
        }
        .article-thank{
            text-align: center;
            .w(850);
            font-size: 16px;
        }
        .article-tags{
            .w(850);
            margin: 40px 0 0;
            color: #555555;
            font-size: 16px;
            ul{
                list-style: none;
                li {
                    a {
                        background-color: #f5f5f5;
                        .w(35);
                        float: left;
                        margin-left: 10px;
                        text-decoration: none;
                    }
                }
            }
        }
        .article-share{
            text-align: center;
            font-size: 16px;
            margin: 30px 0;
            padding: 20px 0;
            border-top: #d0cece 1px dashed;
            border-bottom: #d0cece 1px dashed;
        }

    }

</style>