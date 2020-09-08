## InputNumber 数字输入

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#xiao-shu" title="小数"></znv-anchor-link>
        <znv-anchor-link href="#ke-yi-ge-shi-hua" title="可以格式化"></znv-anchor-link>
        <znv-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></znv-anchor-link>
        <znv-anchor-link href="#duo-chong-zhuang-tai" title="多种状态"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

用于输入数字

### 基础用法

::: demo
```html
<template>
    <znv-input-number :max="10" :min="1" v-model="value1"></znv-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
```
:::

### 小数

::: demo
```html
<template>
    小数步长：<znv-input-number :max="10" :min="1" v-model="value2" :step="0.2"></znv-input-number>
    精度范围：<znv-input-number v-model="value3" :precision="2"></znv-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1,
                value3: null
            }
        }
    }
</script>
```
:::

### 可以格式化

::: demo
```html
<template>
    <div>
        <znv-input-number
            :max="10000"
            v-model="value3"
            :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="value => value.replace(/$s?|(,*)/g, '')"></znv-input-number>&nbsp;&nbsp;
        <znv-input-number
            :max="100"
            v-model="value4"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></znv-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: 1,
                value4: 1
            }
        }
    }
</script>
```
:::

### 不同尺寸

提供三种额外不同尺寸

::: demo
```html
<template>
    <div>
      <znv-input-number v-model="value5" size="mini"></znv-input-number>&nbsp;
      <znv-input-number v-model="value5" size="small"></znv-input-number>&nbsp;&nbsp;
      <znv-input-number v-model="value5"></znv-input-number>&nbsp;&nbsp;
      <znv-input-number v-model="value5" size="large"></znv-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value5: 1
            }
        }
    }
</script>
```
:::

### 多种状态

禁用，只读和不可编辑三种状态

::: demo
```html
<template>
    <div>
      <znv-input-number v-model="value6" disabled></znv-input-number>&nbsp;&nbsp;
      <znv-input-number v-model="value6" readonly></znv-input-number>&nbsp;&nbsp;
       <znv-input-number v-model="value6" :editable="false"></znv-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value6: 1
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|max|	最大值	|Number	|-  |Infinity|
|min	|最小值|	Number|	- |Infinity|
|value|	当前值，可以使用 v-model 双向绑定数据|	Number| - |	1|
|step|	每次改变的步伐，可以是小数|	Number| - |	1|
|size	|输入框尺寸|String| large、small、default或者不填|	- |
|disabled|	设置禁用状态	|Boolean| - |	false|
|placeholder|	占位文本|	String| -|	- |
|formatter	|指定输入框展示值的格式|	Function| -|	-|
|parser	|指定从 formatter 里转换回数字的方式，和 formatter 搭配使用|	Function| - |	-|
|readonly	|是否设置为只读|	Boolean|-|	false|
|editable	|是否可编辑|	Boolean| |	true|
|precision	|数值精度|	Number| |	-|
|active-change|	是否实时响应数据|	Boolean| |	true|

### Events 

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
|on-change|	数值改变时的回调|返回当前值	当前值|
|on-focus|	聚焦时触发|	event|
|on-blur|	失焦时触发|	-|
