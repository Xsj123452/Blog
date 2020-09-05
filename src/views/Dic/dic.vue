<template>
<!--    归档页面-->
    <div>
        <time-line></time-line>
        <Pag></Pag>
    </div>
</template>

<script>
    import timeLine from '../../components/timeLine/timeLine'
    import Pag from '../../components/Pagination/pagination'
    export default {
        name: "dic",
        components:{
            timeLine,
            Pag
        }
    }
</script>

<style scoped>

</style>