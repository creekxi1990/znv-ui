## Progress 进度条

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#wen-zi-nei-xian-shi" title="文字内显示"></znv-anchor-link>
        <znv-anchor-link href="#she-zhi-yang-shi" title="设置样式"></znv-anchor-link>
        <znv-anchor-link href="#dong-tai-jin-du" title="动态进度"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

展示操作或任务的当前进度，比如上传文件。

### 基础用法

Progress 组件设置 `percent` 属性即可，表示进度条对应的百分比，必填，必须在 0-100。

:::demo 可以设置 `status`配置状态
```html
<template>
   <znv-progress :percent="0"></znv-progress>
   <znv-progress :percent="70" status="text"><span>进度70</span></znv-progress>
   <znv-progress :percent="100" status="success"></znv-progress>
   <znv-progress :percent="50" status="exception"></znv-progress>
</template>
```
:::

### 文字内显示

可以设置文字内显示模式

:::demo 可以设置 `text-inside` 来配置属性
```html
<template>
   <znv-progress text-inside :stroke-width="20" :percent="0"></znv-progress>
   <znv-progress text-inside :stroke-width="20" :percent="70"></znv-progress>
   <znv-progress text-inside :stroke-width="20" :percent="80" color="rgba(142, 113, 199, 0.7)"></znv-progress>
   <znv-progress text-inside :stroke-width="20" :percent="100" status="success"></znv-progress>
   <znv-progress text-inside :stroke-width="20" :percent="50" status="exception"></znv-progress>
</template>
```
:::

### 设置样式

可以根据不同指标来设置样式

:::demo 可以设置 `color` 和 `radius`等 来配置属性
```html
<template>
   <znv-progress :percent="70" :show-text="false"></znv-progress>
   <znv-progress :percent="40" color="#76eeff"></znv-progress>
   <znv-progress text-inside :stroke-width="20" :percent="60" color="#df52ff"></znv-progress>
   <znv-progress radius="5px" :stroke-width="20" :percent="30" color="#ffcf2f"></znv-progress>
   <znv-progress radius="5px" :stroke-width="20" :percent="90" active></znv-progress>
   <znv-progress radius="5px" :stroke-width="20" :percent="90" bg-color="#fff"></znv-progress>
</template>
```
:::

### 动态进度

可以配合外部操作进度 通过开启active可以开启动画样式

::: demo 
```html
<template>
   <div class="demo-button">
    <znv-progress radius="5px" :stroke-width="20" :percent="percent" active  color="#ff86d8"></znv-progress>
    <br>
    <znv-button-group>
         <znv-button icon="ios-remove" @click="minus" size="mini"></znv-button>
         <znv-button icon="ios-add" @click="add" size="mini"></znv-button>
    </znv-button-group>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percent     | 百分比   | Number  |    —         |   0   |
| status   |  进度条状态   | String  |   text/success/exception   |  —    |
| stroke-width   |  进度环的线宽，单位 px   | Number  |   —   | 6   |
| text-inside  |  进度条显示文字内置在进度条内  | boolean  |   —   |  false   |
| show-text |  是否显示进度文字   | Boolean  |   —   |  true   |
| bg-color |  进度条背景颜色   | String  |   —   |  #f3f3f3   |
| color  |  进度条的颜色   | String  |   —   |  #2d8cf0   |
| radius |  进度条的圆角   | String  |   —   |  100px   |
| active |  进度条背景动画   | Boolean  |   —   |  false   |
