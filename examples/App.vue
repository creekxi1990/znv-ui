<template>
  <div id="app" ref="scrollBox">
    <main-header></main-header>
    <div class="main-cnt">
      <side-nav class="nav"></side-nav>
      <div class="page-container">
        <znv-scrollbar style="height: 100%;">
          <router-view></router-view>
          <main-footer></main-footer>
        </znv-scrollbar>
      </div>
    </div>
    <znv-back-top></znv-back-top>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showBackToTop: false,
        componentScrollBar: null
      }
    },
    watch: {
      '$route.path'() {
        this.$nextTick(() => {
          if (this.$route.meta.desc) {
            this.$util.title(this.$route.meta.desc)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    width: 100%;
    min-height: 100vh;
  }
  .main-cnt {
    padding-top: 80px;
    width: 100%;
    height: 100%;
    position: absolute;
    .page-container {
      box-sizing: border-box;
      margin-left: 260px;
      background: #fff;
      height: 100%;
    }
    .znv-scrollbar__wrap{overflow-x:hidden;}
  }
</style>
