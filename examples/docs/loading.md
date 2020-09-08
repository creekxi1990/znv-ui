## 加载进度

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#ju-zhong-gu-ding" title="居中固定"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-nei-rong" title="自定义内容"></znv-anchor-link>
        <znv-anchor-link href="#qie-huan-xian-shi-zhuang-tai" title="切换显示状态"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title=" Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

获取数据或加载中时显示，提示用户正在等待中。

### 基础用法

最简单的Loading

:::demo 

```html
<template>
   <znv-loading></znv-loading>
</template>
```
:::

### 居中固定

可以在父级元素中居中固定

:::demo 
```html
<template>
  <div class="demo-loading">
    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
   <znv-loading fix></znv-loading>
  </div>
</template>
```
:::

### 自定义内容

可以自定义文字和内容

:::demo 
```html
<template>
  <div class="demo-loading">
   <znv-loading fix>加载中</znv-loading>
  </div>
  <div class="demo-loading">
   <znv-loading fix show-text="loading"></znv-loading>
  </div>
  <div class="demo-loading">
   <znv-loading fix show-text="loading" show-icon="loading"></znv-loading>
  </div>
</template>
```
:::

### 切换显示状态

切换显示状态

:::demo 
```html
<template>
<div class="demo-loading">
 <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
 <znv-loading fix v-if="spinShow"></znv-loading>
</div>
<div>
 <znv-button @click="spinShow=true">加载</znv-button>
 <znv-button type="danger" @click="spinShow=false">停止</znv-button>
</div>
</template>
<script>
  export default {
      data () {
          return {
              spinShow: true
          }
      }
  }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showIcon     |  显示加载图标   | String  |   loading        |   —   |
| showText   |  显示加载的文字   | String  |   loading  |  —    |
| fix   |  是否固定于父级中心   | Boolean  |   —   | false   |
| size  |  文字显示的大小  | Number  |   —   |  —    |
