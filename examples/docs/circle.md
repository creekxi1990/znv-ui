## Circle 进度环

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#dong-tai-jin-du" title="动态进度"></znv-anchor-link>
        <znv-anchor-link href="#she-zhi-yang-shi" title="设置样式"></znv-anchor-link>
        <znv-anchor-link href="#yi-biao-pan-mo-shi" title="仪表盘模式"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

显示环形图，可以显示任务百分比或者是统计某些数据的占比情况

### 基础用法

查看代码来查看配置信息

::: demo 
```html
<template>
   <div flex="main:justify" style="width:400px;">
       <znv-circle :percent="80">
          <span class="demo-circle-inner" style="font-size:24px">80%</span>
       </znv-circle>
       <znv-circle :percent="100" stroke-color="#5cb85c">
           <znv-icon name="check" size="30" style="color:#5cb85c"></znv-icon>
       </znv-circle>
       <znv-circle :percent="35" stroke-color="#ff5500">
           <span class="demo-circle-inner">
               <znv-icon name="close" size="30" style="color:#ff5500"></znv-icon>
           </span>
       </znv-circle>
  </div>
</template>
```
:::

### 动态进度

可以配合外部操作进度

::: demo 
```html
<template>
   <div flex="main:justify" style="width:300px;" class="demo-button">
    <znv-circle :percent="percent" :stroke-color="color">
        <znv-icon name="check" size="50" style="color:#5cb85c" v-if="percent === 100"></znv-icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </znv-circle>
    <znv-button-group>
         <znv-button icon="ios-remove" @click="minus"></znv-button>
         <znv-button icon="ios-add" @click="add"></znv-button>
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
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent === 100) {
                    color = '#5cb85c';
                }
                return color;
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

### 设置样式

可以配置更多的自定义样式

::: demo 
```html
<template>
    <znv-circle
        :size="250"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </znv-circle>
</template>
```
:::

### 仪表盘模式

通过设置属性 `dashboard`，可以很方便地实现仪表盘样式。

::: demo 
```html
<template>
       <znv-circle :percent="80" dashboard>
          <span class="demo-circle-inner" style="font-size:24px">80%</span>
       </znv-circle>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percent     | 百分比   | Number  |    —         |   0   |
| size     | 图表的宽度和高度，单位 px   | Number  |    —    |  120   |
| stroke-linecap     |  进度环顶端的形状   | String  |   square（方）/round（圆）      | round   |
| stroke-width   |  进度环的线宽，单位 px   | Number  |   —   | 6   |
| stroke-color  |  进度环的颜色   | String  |   —   |  #2db7f5   |
| trail-width  |  进度环背景的线宽，单位 px   | Number  |   —   |  5   |
| trail-color |  进度环背景的颜色   | String  |   —   |  #eaeef2   |
| dashboard|  是否显示为仪表盘   | Boolean  |   —   |  false   |
