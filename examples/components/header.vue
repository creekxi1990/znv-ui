<template>
  <header class="page-header">
    <div class="header-container" flex="main:justify">
      <div class="left" style="width: 480px;" flex="main:justify cross:center">
        <div class="logo"></div>
        <znv-select style="width: 220px;" placeholder="查询组件" filterable v-model="current"
                  @on-change="handleComponentChange" clearable>
          <znv-option v-for="item in components" :value="item.value" :key="item.value">{{ item.label }}</znv-option>
        </znv-select>
      </div>
      <div class="link">
        <router-link :to="{name: 'guide'}" class="active">指南</router-link>
        <router-link :to="{name: 'button'}" class="active">组件</router-link>
      </div>
    </div>
  </header>
</template>

<script>
  import navConf from '../nav.config.json'

  export default {
    name: 'MainHeader',
    data() {
      return {
        components: [],
        current: ''
      }
    },
    created() {
      this.getComponentsOptions()
    },
    watch: {
      $route: {
        handler() {
          setTimeout(() => {
            this.current = ''
          }, 300)
        },
        immediate: true
      }
    },
    methods: {
      goTo(url) {
        this.$util.open(url, true)
      },
      getComponentsOptions() {
        let routes = []
        Object.keys(navConf).forEach((header) => {
          routes = routes.concat(navConf[header])
        })

        let addComponent = (router) => {
          router.forEach((route) => {
            if (route.items) {
              addComponent(route.items)
              routes = routes.concat(route.items)
            } else {
              // 如果是组件路由
              if (['guide', 'install', 'start', 'theme', 'logs'].indexOf(route.name) === -1) {
                this.components.push({
                  value: route.path,
                  label: route.desc
                })
              }
            }
          })
        }
        addComponent(routes)
      },
      handleComponentChange(val) {
        if (!val || val.length === 0) {
          return
        }
        if (this.$route.path !== val) {
          this.$router.push(val)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .page-header {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container {
      width: 100%;
      margin: 0 auto;
      height: 80px;
      .logo {
        color: #409EFF;
        text-transform: uppercase;
        font-weight: bold;
        font-family: helvetica;
        text-align: center;
        font-size: 40px;
        margin-left: 30px
        width: 200px;
        height: 100px;
        background: url("../assets/top_logo.png") no-repeat 0 0
        background-size: 100% 100%;
      }
      .link {
        padding: 0 20px;
        line-height: 80px;
        a {
          text-decoration: none;
          color: #1989fa;
          display: inline-block;
          line-height: 1.5;
          padding: 0 22px;
          font-size: 15px;
          &.github {
            color: #636363;
          }
        }
        .znv-dropdown {
          line-height: 1.5;
        }
      }
    }
    .znv-select-single .znv-select-selection {
      border-color: transparent;
      .znv-select-arrow {
        opacity: 0;
      }
    }
  }
</style>
