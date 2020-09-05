<template>
  <div id="app">
    <!--      导航栏-->
    <Nav></Nav>
    <transition enter-active-class='animated bounceIn' leave-active-class='animated bounceOut'>
    <router-view></router-view>
    </transition>
    <!--    右抽屉日历按钮-->
    <Right @openRight="closeRight()" :showPanel="show" @click.native="show = !show"></Right>
    <!--      右边日历-->
    <RightTime :show="show" @closeRight="closeRight"></RightTime>
  </div>
</template>
<script>
  import Nav from './components/nav'
  import Right from './components/right'
  import RightTime from './components/rightTime'
export default {
  components:{
    Nav,
    RightTime,
    Right
  },
  data(){
    return{
      show:false
    }
  },methods:{
    closeRight(){
      this.show=false
    }
  }
}
</script>

<style>
*{
margin: 0;
  padding: 0;
}
</style>
