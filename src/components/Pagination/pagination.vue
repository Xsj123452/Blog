<template>
<!--    分页器-->
    <div class="pagination">
    <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
    </div>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                currentPage4: 4
            };
        }
    }
</script>

<style scoped lang="less">
@import "./src/style/index";
    .pagination{
        .w(900);
        margin: 100px auto 0;
    }
</style>