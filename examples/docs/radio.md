## Radio 单选框

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#zu-he-shi-yong" title="组合使用"></znv-anchor-link>
        <znv-anchor-link href="#jin-yong" title="禁用"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#radio-events" title="Radio events"></znv-anchor-link>
        <znv-anchor-link href="#radiogroup-slot" title="RadioGroup slot"></znv-anchor-link>
        <znv-anchor-link href="#radiogroup-methods" title="RadioGroup methods"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

### 基础用法

::: demo
```html
<template>
    <znv-radio v-model="single">Radio</znv-radio>
     <span style="color:#ff4511;">{{single}}</span>
</template>
<script>
export default {
    data () {
        return {
            single: false
        }
    }
}
</script>
```
:::

### 组合使用

::: demo
```html
<template>
    <znv-radio-group v-model="social">
       <znv-radio label="twitter">
           <span>Twitter</span>
       </znv-radio>
       <znv-radio label="facebook">
           <span>Facebook</span>
       </znv-radio>
       <znv-radio label="github">
           <span>Github</span>
       </znv-radio>
       <znv-radio label="snapchat">
           <span>Snapchat</span>
       </znv-radio>
   </znv-radio-group>
   <p style="color:#ff4511;margin: 5px 0;">{{social}}</p>
   <znv-radio-group v-model="fruit">
       <znv-radio label="香蕉"></znv-radio>
       <znv-radio label="苹果"></znv-radio>
       <znv-radio label="西瓜"></znv-radio>
   </znv-radio-group>
   <p style="color:#ff4511;margin: 5px 0;">{{fruit}}</p>
</template>
<script>
export default {
    data () {
        return {
            social: 'facebook',
            fruit: '苹果'
        }
    }
}
</script>
```
:::

### 禁用

::: demo
```html
<template>
    <znv-radio v-model="disabledSingle" disabled>Checkbox</znv-radio>
       <znv-radio-group v-model="disabledGroup">
           <znv-radio label="香蕉" disabled></znv-radio>
           <znv-radio label="苹果" disabled></znv-radio>
           <znv-radio label="西瓜"></znv-radio>
       </znv-radio-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '苹果'
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 只在单独使用时有效。可以使用 v-model 双向绑定数据   | Boolean  |  —   |   false  |
| label     | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中   | String/Number/Boolean  |  —   |    —   |
| disabled     | 是否禁用当前项  | Boolean  |  —   |   false  |
| indeterminate     | 设置 indeterminate 状态，只负责样式控制  | Boolean  |  —   |   false  |

### Radio events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| on-change     | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发  | ... |

### RadioGroup  props

| 事件名      | 说明    |类型      | 返回值  |
|---------- |-------- |---------- |--------- |
| value   | 指定选中项目的集合，可以使用 v-model 双向绑定数据  | String/ Number  | ...  |
| size   | 多选框组的尺寸，可选值为 large、small、default 或者不设置  |String  | — |

### RadioGroup  events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| on-change     | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | ... |

