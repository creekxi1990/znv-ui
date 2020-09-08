## Dropdown 下拉菜单

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#hong-fa-fang-shi" title="触发方式"></znv-anchor-link>
        <znv-anchor-link href="#dui-qi-fang-xiang" title="对齐方向"></znv-anchor-link>
        <znv-anchor-link href="#qian-tao-yong-fa" title="嵌套用法"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API">
            <znv-anchor-link href="#dropdown-props" title="Dropdown props"></znv-anchor-link>
            <znv-anchor-link href="#dropdown-events" title="Dropdown events"></znv-anchor-link>
            <znv-anchor-link href="#dropdown-methods" title="Dropdown slot"></znv-anchor-link>
            <znv-anchor-link href="#dropdown-item-props" title="Dropdown Item props"></znv-anchor-link>
        </znv-anchor-link>
      </znv-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
<div>
    <znv-dropdown>
       <a href="javascript:void(0)">
          下拉菜单
          <znv-icon name="ios-arrow-down"></znv-icon>
       </a>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item disabled>炸酱面</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
          <znv-dropdown-item divided>地锅鸡</znv-dropdown-item>
          <znv-dropdown-item>街边烧烤</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown> 
    <znv-dropdown style="margin-left: 20px;">
       <znv-button type="primary">
          下拉菜单
          <znv-icon name="ios-arrow-down"></znv-icon>
       </znv-button>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item disabled>炸酱面</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
          <znv-dropdown-item divided>地锅鸡</znv-dropdown-item>
          <znv-dropdown-item>街边烧烤</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown> 
</div>
</template>
```
:::

### 触发方式
   
::: demo
```html
<template>
<div>
   <znv-dropdown @on-click="handleClick">
      <a href="javascript:void(0)">
         hover 触发
         <znv-icon name="ios-arrow-down"></znv-icon>
      </a>
      <znv-dropdown-menu slot="list">
         <znv-dropdown-item name="驴肉火烧" selected >驴肉火烧</znv-dropdown-item>
         <znv-dropdown-item name="炸酱面" disabled >炸酱面</znv-dropdown-item>
         <znv-dropdown-item name="牛肉板面" >牛肉板面</znv-dropdown-item>
         <znv-dropdown-item name="地锅鸡" divided >地锅鸡</znv-dropdown-item>
         <znv-dropdown-item name="街边烧烤" >街边烧烤</znv-dropdown-item>
      </znv-dropdown-menu>
   </znv-dropdown> 
   <znv-dropdown trigger="click"  style="margin-left: 20px;">
      <a href="javascript:void(0)">
         click 触发
         <znv-icon name="ios-arrow-down"></znv-icon>
      </a>
      <znv-dropdown-menu slot="list">
         <znv-dropdown-item selected>驴肉火烧</znv-dropdown-item>
         <znv-dropdown-item disabled>炸酱面</znv-dropdown-item>
         <znv-dropdown-item>牛肉板面</znv-dropdown-item>
         <znv-dropdown-item divided>地锅鸡</znv-dropdown-item>
         <znv-dropdown-item>街边烧烤</znv-dropdown-item>
      </znv-dropdown-menu>
   </znv-dropdown> 
   <znv-dropdown trigger="contextMenu"  style="margin-left: 20px;">
      <a href="javascript:void(0)">
         右键 触发
         <znv-icon name="ios-arrow-down"></znv-icon>
      </a>
      <znv-dropdown-menu slot="list">
         <znv-dropdown-item>返回</znv-dropdown-item>
         <znv-dropdown-item style="color: #ed4014">删除</znv-dropdown-item>
      </znv-dropdown-menu>
   </znv-dropdown> 
   <znv-dropdown trigger="custom"  style="margin-left: 20px;" :visible="visible">
      <a href="javascript:void(0)" @click="handleOpen">
         custom 触发
         <znv-icon name="ios-arrow-down"></znv-icon>
      </a>
      <znv-dropdown-menu slot="list">
           <div style="padding: 15px 5px;">常用于各种自定义下拉内容的场景。</div>
           <div style="text-align: right;margin: 0 10px;">
               <znv-button type="primary" @click="handleClose">关闭</znv-button>
           </div>
      </znv-dropdown-menu>
   </znv-dropdown> 
</div>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
                console.log('open')
            },
            handleClose () {
                this.visible = false;
            },
            handleClick(name){
              this.$message(name)
            }       
        }
    }
</script>
```
:::

### 对齐方向

::: demo
```html
<template>
<div>
    <znv-dropdown placement="bottom-start">
       <a href="javascript:void(0)">
          菜单(左)
          <znv-icon name="ios-arrow-down"></znv-icon>
       </a>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown> 
    <znv-dropdown placement="top" style="margin-left: 20px;">
       <a href="javascript:void(0)">
          菜单(上边居中)
          <znv-icon name="ios-arrow-down"></znv-icon>
       </a>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown> 
    <znv-dropdown placement="bottom-end" style="margin-left: 20px;">
       <a href="javascript:void(0)">
          菜单(右)
          <znv-icon name="ios-arrow-down"></znv-icon>
       </a>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown> 
</div>
</template>
```
:::

### 嵌套用法

可嵌套实现级联效果，注意嵌套时候的展开方向

::: demo
```html
<template>
<div>
    <znv-dropdown trigger="click">
       <a href="javascript:void(0)">
          徐州小吃
          <znv-icon name="ios-arrow-down"></znv-icon>
       </a>
       <znv-dropdown-menu slot="list">
          <znv-dropdown-item>驴肉火烧</znv-dropdown-item>
          <znv-dropdown-item>牛肉板面</znv-dropdown-item>
            <znv-dropdown placement="right-start">
               <znv-dropdown-item>
                  特色菜系
                  <znv-icon name="ios-arrow-forward"></znv-icon>
               </znv-dropdown-item>
               <znv-dropdown-menu slot="list">
                  <znv-dropdown-item>地锅鸡</znv-dropdown-item>
                  <znv-dropdown-item>狗肉</znv-dropdown-item>
                  <znv-dropdown-item>把子肉</znv-dropdown-item>
               </znv-dropdown-menu>
            </znv-dropdown>  
          <znv-dropdown-item>过桥米线</znv-dropdown-item>
       </znv-dropdown-menu>
    </znv-dropdown>  
</div>
</template>
```
:::

### API

### Dropdown props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  |  hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用  |  hover   |
| visible     | 触发方式   | Boolean  |  手动控制下拉框的显示 |  false   |
| placement     | 下拉菜单出现的位置   |  String	  |  top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end |  bottom   |
| appendToBody     | 是否将弹层放置于 body 内, 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果   |  Boolean		  |   |  false   |
| transfer-class-name     | 开启 transfer 时，给浮层添加额外的 class 名称  |  String		  | -  |  -   |

### Dropdown events 

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-click     | 点击菜单项时触发   | DropdownItem 的 name 值,需要设置name才可以统一监听  |
| on-visible-change    | 菜单显示状态改变时调用   | visible  |
| on-click-outside     | 点击外部关闭下拉菜单时触发   | event  |

### Dropdown Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 主体内容   |
| list     | 列表内容，一般由 znv-dropdown-menu 填充   |

### Dropdown Item props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 用来标识这一项   | String	  |  -  |  -   |
| disabled     | 禁用该项   | Boolean  |  - |  false   |
| divided     | 显示分割线   | Boolean  |  - |  false   |
| selected     | 标记该项为选中状态   | Boolean  |  - |  false   |
