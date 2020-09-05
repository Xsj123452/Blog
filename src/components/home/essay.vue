<template>
    <div class="essays">
        <ul class="essays-list">
            <li v-for="i in 9">
            <Article :id="i"></Article>
            </li>
        </ul>
    </div>
</template>

<script>
    import Article from './article/article'
    export default {
        name: "essay",
        components:{
            Article
        },

    }
</script>

<style scoped lang="less">
@import "src/style/index";
    .essays{
        margin:0 auto 0;
        .w(900);
        li{
            margin-top: 80px;
            list-style: none;
        }
    }
</style>