## Switch 开关

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#da-xiao-ji-yan-se" title="大小及颜色"></znv-anchor-link>
        <znv-anchor-link href="#wen-zi-huo-tu-biao" title="文字或图标"></znv-anchor-link>
        <znv-anchor-link href="#jin-yong" title="禁用"></znv-anchor-link>
        <znv-anchor-link href="#qie-huan-qian-lan-jie" title="切换前拦截"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
        <znv-anchor-link href="#slot" title="Slot"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

在两种状态间切换时用到的开关选择器。

### 基础用法

::: demo
```html
<template>
  <znv-switch v-model="switch1" @on-change="change"></znv-switch>
</template>
<script>
export default {
    data () {
        return {
            switch1: false
        }  
    },
    methods: {
        change (status) {
            this.$message('开关状态：' + status);
        }
    }
}
</script>
```
:::

### 大小及颜色

::: demo
```html
<template>
    <znv-switch size="large"></znv-switch>&nbsp;
    <znv-switch></znv-switch>&nbsp;
    <znv-switch size="small"></znv-switch>&nbsp;
    <znv-switch active-color="#13ce66" inactive-color="#ff4949"></znv-switch>
</template>
```
:::

### 文字或图标

::: demo
```html
<template>
    <znv-switch>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </znv-switch>&nbsp;
    <znv-switch>
        <znv-icon name="ios-checkmark" slot="open"></znv-icon>
        <znv-icon name="ios-close" slot="close"></znv-icon>
    </znv-switch>
    <br><br>
    <znv-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </znv-switch>&nbsp;
    <znv-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </znv-switch>
</template>
```
:::

### 禁用

::: demo
```html
<template>
  <znv-switch :disabled="disabled"></znv-switch>&nbsp;
  <znv-button type="primary" @click="disabled = !disabled" size="mini">Toggle Disabled</znv-button>
</template>
<script>
export default {
    data () {
        return {
            disabled: false
        }  
    }
}
</script>
```
:::

### 切换前拦截

可以通过设置`confirm`来设置切换前拦截，并通过`confirm-txt`来自定义切换文字提示。

::: demo
```html
<template>
  <znv-switch  confirm></znv-switch>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 指定当前是否选中，可以使用 v-model 双向绑定数据   | Boolean  |  —   |  false   |
| size     | 开关的尺寸。建议开关如果使用了2个汉字的文字，使用 large。   | String  |  large、small、default   |  default   |
| disabled     | 禁用开关	   | Boolean  |  —   |  false   |
| true-value     | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用	   | String, Number, Boolean  |  —   |  true   |
| false-value	 | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用	   | String, Number, Boolean  |  —   |  false   |
| active-color	 | switch 打开时的背景色	   | string |  —   |   —    |
| inactive-color | switch 关闭时的背景色	   | string |  —   |   —    |
| confirm | 开启切换前拦截功能  | Boolean  |  —   |  false   |
| confirm-txt | 切换拦截文字   | string |  —   |   —    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change     | 开关变化时触发，返回当前的状态   | true、false  |

### Slot

| 事件名      | 说明    |
|---------- |-------- |
| open  | 自定义显示打开时的内容  |
| close  | 自定义显示关闭时的内容  |
