## Tag 标签

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#ke-yi-chu-biao-qian" title="可移除标签"></znv-anchor-link>
        <znv-anchor-link href="#dot-mo-shi" title="dot 模式"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-yang-shi" title="自定义样式"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

显示标签

### 基础用法

由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。

::: demo 
```html
<template>
    <znv-tag type="primary">标签二</znv-tag>
    <znv-tag type="success">标签二</znv-tag>
    <znv-tag type="info">标签三</znv-tag>
    <znv-tag type="warning">标签四</znv-tag>
    <znv-tag type="danger">标签五</znv-tag>
</template>
```
:::

### 可移除标签

 设置`closable`属性可以定义一个标签是否可移除。

::: demo
```html
<template>
    <znv-tag type="primary" closable>标签二</znv-tag>
    <znv-tag type="success" closable>标签二</znv-tag>
    <znv-tag type="info" closable>标签三</znv-tag>
    <znv-tag type="warning" closable>标签四</znv-tag>
    <znv-tag type="danger" closable>标签五</znv-tag>
</template>
```
:::

### dot 模式

dot 模式简单显示

::: demo 设置`dot`属性可以定义一个标签是否可移除。
```html
<template>
    <znv-tag dot>dot</znv-tag>
    <znv-tag type="primary" no-border dot>no-border-dot</znv-tag>
    <znv-tag type="success" dot no-border>type dot</znv-tag>
    <znv-tag color="#13c2c2" closable dot>color dot</znv-tag>
</template>
```
:::

### 动态编辑标签

::: demo 设置`closable`属性可以定义一个标签是否可移除。
```html
<template>
    <div>
      <znv-button class="button-new-tag" size="small" @click="addOne">+ New Tag</znv-button>
        <p>
            <znv-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              @on-close="handleCloseTag(tag)">
              {{tag}}
            </znv-tag>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                count: 0
            }
        },
        methods: {
            handleCloseTag(tag) {
              this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
            },
            addOne() {
                this.count++
                this.dynamicTags.push('new tag'+this.count);
            }
        }
    }
</script>
```
:::

### 自定义样式

具有多种自定义样式的方式可供选择

::: demo 
```html
<template>
    <znv-tag color="#ffa2d3">Custom Color</znv-tag>
    <znv-tag type="primary" no-border font-size="14px">No Border</znv-tag>
    <znv-tag :tag-style="{backgroundColor: '#5AFAFC',color:'#606266'}">Style</znv-tag>
    <znv-tag closable>Default</znv-tag>
    <znv-tag size="small" closable>Small</znv-tag>
    <znv-tag size="mini" closable>Mini</znv-tag>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable     | 是否可关闭   | boolean  |   —            |    false    |
| type     | 主题   | string  |   success/info/warning/danger     |    —         |
| dot     |  是否显示是小圆点   | boolean  |   —         |    false       |
| no-border     |  是否关闭边框   | boolean  |   —         |    false       |
| color    |  背景颜色(可自定义)   | String  |   —         |    —          |
| size    |  尺寸   | String  |   medium / small / mini       |    —          |
| fontSize    |  字体大小   | String  |    —      |    —          |
| tag-style    |  标签样式(完全控制，尽量不要设置)   | String  |    —      |    —          |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close    | 关闭事件回调   | 无  |
| on-click    | 点击事件回调   | 无  |
