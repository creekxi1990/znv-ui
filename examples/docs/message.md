## Message 通知

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#pei-zhi-can-shu" title="配置参数"></znv-anchor-link>
        <znv-anchor-link href="#render-han-shu-diao-yong" title="render函数调用"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 基础用法

基本用法，默认在 3 秒后关闭

:::demo
```html
 <template>
     <znv-button
        @click="$message('this is default message')">默认提示</znv-button>
     <znv-button type="primary"
        @click="$message({type:'primary',content:'primary 的提示'})">primary</znv-button>
     <znv-button type="success"
        @click="$message({type:'success',content:'success 的提示'})">success</znv-button>
     <znv-button type="warning"
        @click="$message({type:'warning',content:'warning 的提示'})">warning</znv-button>
     <znv-button type="danger"
        @click="$message({type:'danger',content:'danger 的提示'})">danger</znv-button>
  </template>
```
:::

### 配置参数

可以设置配置参数来渲染

:::demo
```html
 <template>
     <znv-button type="default"
        @click="$message({content:'我10秒消失',duration:10})">我10秒消失</znv-button>
     <znv-button type="default"
        @click="$message({content:'我是可关闭的的提示', duration: 10, closable: true})">可关闭的</znv-button>
    <znv-button type="default"
            @click="$message({content:'我永远不会关闭除非手动', duration: 0, closable: true, zIndex:3000})">不会关闭</znv-button>
  </template>
```
:::

### render函数调用

render函数调用

:::demo
```html
 <template>
     <znv-button type="default"
        @click="renderFunc">render函数调用</znv-button>
  </template>
  <script>
      export default {
        methods: {
           renderFunc () {
              this.$message({
                  render: h => {
                      return h('span', [
                          'This is created by ',
                          h('a', 'render'),
                          ' function'
                      ])
                  }
              });
          }
        }
      }
  </script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$message('这是一条普通的提示')
    
    this.$message({type:'success',content:'success 的提示'})
        
    this.$message({content:'我10秒消失',duration:10})
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| content     |  提示内容   | String  | —  |
| type     |  提示类别(primary,info,success,warning,danger)   | String  | primary  |
| render     |  自定义描述内容，使用 Vue 的 Render 函数   | Function  | —  |
| duration     | 自动关闭的延时，单位秒，不关闭可以写 0 | Number |3  |
| onClose     | 关闭时的回调 | Function	 |  —  |
| closable     | 是否显示关闭按钮 | Boolean	 | false |
| zIndex     | 显示层级 | Number	 | 2000 |

