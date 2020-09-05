<template>
    <div class="allTags">
        <div class="tag-detail">
            <h2 class="tags-title">标签</h2>
        </div>
        <div class="tag-count">
            <p>目前共计48个标签</p>
        </div>
        <div class="tags-show">
            <ul>
                <li class="oneTag" v-for="i in 100"><a v-text="i"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tags",
    }
</script>

<style scoped lang="less">
    @import "./src/style/index";
    .allTags{
        color: #555555;
        width: 100vw;
        .tag-detail{
            overflow-x: auto;
            margin: 100px auto 0;
            .w(900);
            /*height: 600px;*/
            /*background-color: #9a6e3a;*/
            .tags-title{
                font-weight: 400;
                text-align: center;
                font-size: 26px;
                margin: 20px 0 15px;
            }

        }
        .tag-count{
            text-align: center;
            margin: 50px auto 0;
            .w(900);
            p {
                font-size: 16px
            }
        }
        .tags-show{
            .w(900);
            margin: 50px auto 0;
            /*background-color: red;*/
            text-align: center;
            font-size: 16.5px;
            /*display: inline;*/
            ul {
                list-style: none;
                .oneTag {
                    display: inline;
                    a {
                        display: inline-block;
                        .w(55);
                        /*height: 34px;*/
                        margin: 10px;
                        padding-bottom: 10px;
                    }
                }
            }
        }

    }
</style>