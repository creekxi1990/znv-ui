## Breadcrumb 面包屑

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#fen-ge-fu" title="分隔符"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API">
            <znv-anchor-link href="#breadcrumb-attributes" title="Breadcrumb Attributes"></znv-anchor-link>
            <znv-anchor-link href="#breadcrumb-item-attributes" title="Breadcrumb Item Attributes"></znv-anchor-link>
        </znv-anchor-link>
      </znv-anchor>
    </div>
</template>

显示当前页面的路径，快速返回之前的任意页面或者跳转链接

### 基础用法

面包屑的用法，separator设置分隔符 :to表示当前为router a标签引用

::: demo
```html
<template>
 <znv-breadcrumb separator="/">
   <znv-breadcrumb-item :to="{ path: '/' }">首页</znv-breadcrumb-item>
   <znv-breadcrumb-item><a href="/">组件</a></znv-breadcrumb-item>
   <znv-breadcrumb-item>面包屑</znv-breadcrumb-item>
 </znv-breadcrumb>
</template>
```
:::

### 分隔符

可以设置分隔符

::: demo
```html
<template>
 <znv-breadcrumb separator-icon="ios-arrow-forward">
   <znv-breadcrumb-item :to="{ path: '/' }">首页</znv-breadcrumb-item>
   <znv-breadcrumb-item><a href="/">组件</a></znv-breadcrumb-item>
   <znv-breadcrumb-item>面包屑</znv-breadcrumb-item>
 </znv-breadcrumb>
 <br>
 <znv-breadcrumb separator-icon="ios-arrow-round-forward">
   <znv-breadcrumb-item :to="{ path: '/' }">首页</znv-breadcrumb-item>
   <znv-breadcrumb-item><a href="/">组件</a></znv-breadcrumb-item>
   <znv-breadcrumb-item>面包屑</znv-breadcrumb-item>
 </znv-breadcrumb>
</template>
```
:::

### API

### Breadcrumb Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| separator     | 分隔   | string  |  —   |   '/'   |
| separator-icon| 图标分隔符icon  | string  |  —   |   —    |

### Breadcrumb Item Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| to     | 路由跳转对象，同 vue-router 的 to   | string/object  |  —   |   —    |
| replace| 不向 history 添加新记录 | boolean  |  —   |   false  |
