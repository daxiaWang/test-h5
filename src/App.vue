<template>
  <div id="app">
    <div style="position: fixed;top: 0;z-index: 999;width: 100%">
    <!-- <div style="width: 100%"> -->
      <van-nav-bar
        :title="title"
        @click-left="onClickLeft"
        left-arrow
        v-if="needHeader && isShow"
        :style="{backgroundColor: isThemeColor ? '#3296FA' : '#F7F7F7', color: isThemeColor ? '#fff !important' : '' }"
      >
      <template #left>
        <van-icon name="arrow-left" :color="isThemeColor ? '#fff' : ''" />
      </template>
      <template #title>
        <span :style="{ color: isThemeColor ? '#fff !important' : '' }">{{title}}</span>
      </template>
      </van-nav-bar>
    </div>
    <div v-if="needHeader && isShow" style="height: 46px"></div>
    <div class="router_box">
      <keep-alive :include="catchList">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      catchList: this.$store.getters.catchList
    }
  },
  watch: {
    $route: {
      //监听路由变化
      handler: function(to, from) {
        this.catchList = this.$store.getters.catchList
      }
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    },
    isShow() {
      const path = this.$route.path
      const whitePath = []
      // console.log("whitePath.includes(path)", whitePath.includes(path))
      return !whitePath.includes(path)
    },
    isThemeColor() {
      return this.$route.meta.isThemeColor
    },
    needHeader() {
      return window.snBaseConfig.needHeader
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  height: 100%;
  // border: 1px solid;
  .router_box{
    height: calc( 100% - 46px );
    // height: calc( 100vh - 46px );
    // height: 100%;
    // padding-top: 46px;
    // border: 1px solid;
  }
}
  /deep/ .van-nav-bar{
    .van-icon{
      color: #111111;
    }
	}
</style>
