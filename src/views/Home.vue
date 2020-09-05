<template>
  <div class="home" ref="wrapper">
    <div class="content">
<!--      文章浏览区-->
      <Essay></Essay>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import nav from '../components/nav'
import Nav from '../components/nav'
import Essay from '../components/home/essay'
import Right from '../components/right'
import RightTime from '../components/rightTime'
export default {
  name: 'Home',
  components: {

    Essay,
  },
    data(){
      return {
          show: false
      }
    },
    methods:{
    }
}
</script>
<style lang="less">
  .home{
    width: 100vw;
    height: 100vh;
  }
</style>
