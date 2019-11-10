<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-xihuan"></i>
        <span>收藏</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {};
        },
        methods: {},
        computed: {},
        components: {},
    }
</script>
<!--router-link-exact-active router-link-active-->

<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    a{
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
      align-items: center;
      color: black;
      &.router-link-active{
        color:deepskyblue;
      }
    }
  }
</style>
