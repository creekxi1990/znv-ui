## Cascade 级联选择

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#she-zhi-mo-ren-zhi" title="设置默认值"></znv-anchor-link>
        <znv-anchor-link href="#xuan-ting-zhan-kai" title="悬停展开"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-xian-shi" title="自定义显示"></znv-anchor-link>
        <znv-anchor-link href="#jin-yong-he-jin-yong-xiang" title="启用和禁用项"></znv-anchor-link>
        <znv-anchor-link href="#ji-ke-xiang-ying" title="即刻响应"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-xian-shi-xuan-xiang" title="自定义显示选项"></znv-anchor-link>
        <znv-anchor-link href="#chi-cun" title="尺寸"></znv-anchor-link>
        <znv-anchor-link href="#dong-tai-jia-zai-xuan-xiang" title="动态加载选项"></znv-anchor-link>
        <znv-anchor-link href="#ke-yi-sou-suo" title="可以搜索"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
        <znv-anchor-link href="#slot" title="Slot"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。

### 基础用法

级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，下一级使用 children

value 为当前选择的数据的 value 值的数组，比如 ['xuzhou', 'tongshan'] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。
::: demo 
```html
<template>
<znv-row :gutter="20" type="flex" align="middle"> 
    <znv-col span="6">
      <znv-cascader :data="data" v-model="value1"></znv-cascader>
    </znv-col>
    <znv-col span="6">
      <span>{{value1}}</span>
    </znv-col>
</znv-row>
</template>
<script>
export default {
     data () {
         return {
             value1: [],
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     }
}
</script>
```
:::

### 设置默认值

指定 value 默认值，组件会在初始化时选定数据。

::: demo 
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data" v-model="value2"></znv-cascader>
</div>
</template>
<script>
export default {
    data () {
        return {
            value2: ['xuzhou', 'tongshan'],
            data: [
                {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
                },
                {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
                }
            ]
        }
    }
}
</script>
```
:::

### 悬停展开

设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。

::: demo
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data" trigger="hover"></znv-cascader>
</div>
</template>
<script>
export default {
    data () {
         return {
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
    }
}
</script>
```
:::

### 自定义显示

设置 slot 可以自定义显示内容，不局限于输入框。

::: demo
```html
<template>
<div>
    <div>{{ text }}</div>
    <div style="width:240px;">
      <znv-cascader :data="data" @on-change="handleChange">
        <a href="javascript:void(0)">选择</a>
      </znv-cascader>
    </div>
</div>
</template>
<script>
export default {
     data () {
         return {
             text: '未选择',
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     },
      methods: {
          handleChange (value, selectedData) {
              this.text = selectedData.map(o => o.label).join(', ');
          }
      }
}
</script>
```
:::

### 禁用和禁用项

设置属性 `disabled` 可以禁用组件。给某项数据设置 `disabled: true` 可以禁用某一项。

::: demo
```html
<template>
<div flex="main:justify" style="width: 500px;">
    <div style="width:240px;">
      <znv-cascader :data="data" v-model="value1" disabled></znv-cascader>
    </div>
    <div style="width:240px;">
      <znv-cascader :data="data2" v-model="value1"></znv-cascader>
    </div>
</div>
</template>
<script>
export default {
     data () {
         return {
             value1: [],
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ],
             data2: [
               {
                 value: 'nanjing',
                 label: '南京',
                 disabled: true,
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
            
         }
     },
      methods: {
          handleChange (value, selectedData) {
              this.text = selectedData.map(o => o.label).join(', ');
          }
      }
}
</script>
```
:::

### 即刻响应

设置属性 `change-on-select` 点任何一级都可以选择。

::: demo
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data" change-on-select></znv-cascader>
</div>
</template>
<script>
export default {
     data () {
         return {
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     }
}
</script>
```
:::

### 自定义显示选项

对于显示的结果，可以通过 `render-format` 接收一个函数来自定义。

其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。

::: demo 
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data" :render-format="format"></znv-cascader>
</div>
</template>
<script>
export default {
     data () {
         return {
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     },
      methods: {
          format (labels, selectedData) {
              const index = labels.length - 1;
              const data = selectedData[index] || false;
              if (data && data.value) {
                  return labels[index] + ' - ' + data.value;
              }
              return labels[index];
          }
      }
}
</script>
```
:::

### 尺寸

通过设置size属性为large和small,mini

::: demo
```html
<template>
<div flex="cross:center">
    <div style="width:120px;">
      <znv-cascader :data="data" size="mini"></znv-cascader>
    </div>
    <div style="width:120px;margin-left: 5px;">
      <znv-cascader :data="data" size="small"></znv-cascader>
    </div>
    <div style="width:120px;margin-left: 5px;">
      <znv-cascader :data="data"></znv-cascader>
    </div>
    <div style="width:120px;margin-left: 5px;">
      <znv-cascader :data="data" size="large"></znv-cascader>
    </div>
</div>
</template>
<script>
export default {
     data () {
         return {
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     }
}
</script>
```
:::

### 动态加载选项

使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。

::: demo
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data4" :load-data="loadData"></znv-cascader>
</div>
</template>
<script>
export default {
   data () {
       return {
           data4: [
               {
                   value: 'nanjing',
                   label: '南京',
                   children: [],
                   loading: false
               },
               {
                   value: 'xuzhou',
                   label: '徐州',
                   children: [],
                   loading:false
               }
             ]
       }
   },
   methods: {
       loadData (item, callback) {
           item.loading = true;
           setTimeout(() => {
               if (item.value === 'nanjing') {
                   item.children = [
                         {
                             value: 'xuanwu',
                             label: '玄武区'
                         },
                         {
                             value: 'gulou',
                             label: '鼓楼区'
                         },
                         {
                             value: 'jianye',
                             label: '建邺区'
                         }
                   ];
               } else if (item.value === 'xuzhou') {
                   item.children = [
                         {
                             value: 'tongshan',
                             label: '铜山区'
                         },
                         {
                             value: 'gulou',
                             label: '鼓楼区'
                         },
                         {
                             value: 'yunlong',
                             label: '云龙区'
                         },
                         {
                             value: 'jiawang',
                             label: '贾汪区'
                         }
                   ];
               }
               item.loading = false;
               callback();
           }, 1000);
       }
   }
}
</script>
```
:::

### 可以搜索

使用属性 `filterable` 可直接搜索选项并选择。

::: demo
```html
<template>
<div style="width:240px;">
  <znv-cascader :data="data" filterable></znv-cascader>
</div>
</template>
<script>
export default {
     data () {
         return {
             data: [
               {
                 value: 'nanjing',
                 label: '南京',
                 children: [
                     {
                         value: 'xuanwu',
                         label: '玄武区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'jianye',
                         label: '建邺区'
                     }
                 ]
               },
               {
                 value: 'xuzhou',
                 label: '徐州',
                 children: [
                     {
                         value: 'tongshan',
                         label: '铜山区'
                     },
                     {
                         value: 'gulou',
                         label: '鼓楼区'
                     },
                     {
                         value: 'yunlong',
                         label: '云龙区'
                     },
                     {
                         value: 'jiawang',
                         label: '贾汪区'
                     }
                 ]
               }
             ]
         }
     }
}
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 可选项的数据源，格式参照示例说明   | Array	  |  —   |  []  |
| value     | 当前已选项的数据，格式参照示例说明   | Array	  |  —   |  []  |
| disabled    | 是否禁用  | Boolean		  |  —   | false  |
| clearable    | 是否支持清除  | Boolean		  |  —   | true  |
| placeholder    | 输入框占位符  | String	 |  —   | 请选择  |
| change-on-select    | 开启改变即时选择  | Boolean |  —   | false  |
| trigger    | 菜单展开方式  | String	 |  click 或 hover  | click  |
| size    | 选择器大小  | String	 |  large/small/default  | default  |
| load-data    | 动态获取数据，数据源需标识 loading  | Function |   — |  —  |
| render-format     | 选择后展示的函数，用于自定义显示格式   | Function		  |  —   |  label => label.join(' / ')  |
| filterable    | 是否支持搜索   | Boolean |  —   |  	false  |
| not-found-text   | 当搜索列表为空时显示的内容   | String |  —   |  	暂无匹配数据  |
| transfer   | 是否将弹层放置于 body 内   | Boolean |  —   |	false  |
| element-id   | 给表单元素设置 id，详见 Form 用法   | String |  —   |  —    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change    | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据   | value, selectedData  |
| on-visible-change    |展开和关闭弹窗时触发   | 显示状态，Boolean  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 自定义替换掉选择   |
