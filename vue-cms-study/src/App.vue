<template>
  <div id="app">
    <mt-header fixed title="黑马程序员"></mt-header>

    <!-- <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <router-link to="/home">
          <span slot="icon" class="iconfont icon-shouye"></span>
          首页
        </router-link>
      </mt-tab-item>

      
        <mt-tab-item id="会员">
          <router-link to="/member">
            <span slot="icon" class="iconfont icon-huiyuan"></span>
            会员
          </router-link>
        </mt-tab-item>
      

      
        <mt-tab-item id="购物车">
          <router-link to="/shopcar">
            <span class="dot">0</span>
            <span slot="icon" class="iconfont icon-gouwuche"></span>
            购物车
          </router-link>
        </mt-tab-item>
      

      
        <mt-tab-item id="搜索">
          <router-link to="/search">
            <span slot="icon" class="iconfont icon-sousuo"></span>
            搜索
          </router-link>
        </mt-tab-item>
      
    </mt-tabbar>-->

    <transition>
      <router-view/>      
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "首页"
    };
  }
};
</script>

<style lang="less">
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
  }
  .mint-tabbar {
    a {
      text-decoration: none;
      color: #333;
      display: block;
    }
  }
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all .5s ease;
}

</style>
