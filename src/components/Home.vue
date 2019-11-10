<template>
    <div>
      <MHeader :back="true">首页</MHeader>
      <div class="content">
        <Swiper></Swiper>
      </div>

    </div>

</template>

<script>
  //1.引入组建2.注册组件3.使用组件
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import {getSliders} from "../api";

  export default {
        /*async created(){
          //给data取别名 对象中的属性名字必须和得到的结果名字一致
          let {data:sliders} = await getSliders();

          //将取到的数据放入sliders中
          this.sliders = sliders;
        },*/
        data() {
            return {msg:'hello'};
        },
        methods: {},
        computed: {},
        components: {
          MHeader,Swiper,
        },
    }
</script>

<style scoped>

</style>
