## Menu导航菜单

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#shu-xiang-she-zhi" title="竖向设置"></znv-anchor-link>
        <znv-anchor-link href="#wai-lian" title="外链"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API">
            <znv-anchor-link href="#menu-props" title="Menu props"></znv-anchor-link>
            <znv-anchor-link href="#menu-events" title="Menu events"></znv-anchor-link>
            <znv-anchor-link href="#menu-methods" title="Menu methods"></znv-anchor-link>
            <znv-anchor-link href="#menuitem-props" title="MenuItem props"></znv-anchor-link>
            <znv-anchor-link href="#submenu-props" title="Submenu props"></znv-anchor-link>
            <znv-anchor-link href="#submenu-slot" title="Submenu slot"></znv-anchor-link>
            <znv-anchor-link href="#menugroup" title="MenuGroup"></znv-anchor-link>
        </znv-anchor-link>
      </znv-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
    <div>
        <znv-menu mode="horizontal" :theme="theme1" active-name="1">
           <znv-menu-item name="1"><znv-icon name="ios-home"></znv-icon>首页</znv-menu-item>
           <znv-submenu name="2">
             <template slot="title"><znv-icon name="ios-apps"></znv-icon>我的工作台</template>
             <znv-menu-item name="2-1"><znv-icon name="ios-bowtie"></znv-icon>选项1</znv-menu-item>
             <znv-submenu name="2-2">
                 <template slot="title">
                     <znv-icon name="ios-bulb"></znv-icon>选项2
                 </template>
                 <znv-menu-item name="2-2-1"><znv-icon name="ios-color-fill"></znv-icon>选项2-2-1</znv-menu-item>
                 <znv-menu-item name="2-2-2"><znv-icon name="ios-calendar"></znv-icon>选项2-2-2</znv-menu-item>
              </znv-submenu>
             <znv-menu-item name="2-3"><znv-icon name="ios-cloud"></znv-icon>选项3</znv-menu-item>
           </znv-submenu>
           <znv-submenu name="3">
                <template slot="title"><znv-icon name="ios-bookmarks"></znv-icon>统计分析</template>
                <znv-menu-group title="使用">
                    <znv-menu-item name="3-1">新增和启动</znv-menu-item>
                    <znv-menu-item name="3-2">活跃分析</znv-menu-item>
                    <znv-menu-item name="3-3">时段分析</znv-menu-item>
                </znv-menu-group>
           </znv-submenu>
           <znv-menu-item name="4"><znv-icon name="ios-cog"></znv-icon>系统设置</znv-menu-item>
        </znv-menu>
    </div>
    <br>
     <znv-radio-group v-model="theme1">
         <znv-radio label="light"></znv-radio>
         <znv-radio label="dark"></znv-radio>
     </znv-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        theme1: 'light',  
        theme2: 'light',
        isCollapse: true
      };
    }
  }
</script>
```
:::

### 竖向设置

::: demo
```html
<template>
<znv-menu :theme="theme2" active-name="1" accordion>
   <znv-menu-item name="1"><znv-icon name="ios-home"></znv-icon>首页</znv-menu-item>
   <znv-submenu name="2">
     <template slot="title"><znv-icon name="ios-apps"></znv-icon>我的工作台</template>
     <znv-menu-item name="2-1"><znv-icon name="ios-bowtie"></znv-icon>选项1</znv-menu-item>
     <znv-submenu name="2-2">
         <template slot="title">
             <znv-icon name="ios-bulb"></znv-icon>选项2
         </template>
         <znv-menu-item name="2-2-1"><znv-icon name="ios-color-fill"></znv-icon>选项2-2-1</znv-menu-item>
         <znv-menu-item name="2-2-2"><znv-icon name="ios-calendar"></znv-icon>选项2-2-2</znv-menu-item>
      </znv-submenu>
     <znv-menu-item name="2-3"><znv-icon name="ios-cloud"></znv-icon>选项3</znv-menu-item>
   </znv-submenu>
   <znv-submenu name="3">
        <template slot="title"><znv-icon name="ios-bookmarks"></znv-icon>统计分析 </template>
        <znv-menu-group title="使用">
            <znv-menu-item name="3-1">新增和启动</znv-menu-item>
            <znv-menu-item name="3-2">活跃分析</znv-menu-item>
            <znv-menu-item name="3-3">时段分析</znv-menu-item>
        </znv-menu-group>
   </znv-submenu>
   <znv-menu-item name="4"><znv-icon name="ios-cog"></znv-icon>系统设置</znv-menu-item>
</znv-menu>
<br>
<znv-radio-group v-model="theme2">
  <znv-radio label="light"></znv-radio>
  <znv-radio label="dark"></znv-radio>
</znv-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        theme2: 'light'
      };
    }
  }
</script>
```
:::


### 外链

::: demo
```html
<template>
<znv-menu :theme="theme2" active-name="1" accordion>
   <znv-menu-item name="1"><znv-icon name="ios-home"></znv-icon>首页</znv-menu-item>
   <znv-menu-item name="2" to="https://www.baidu.com" target="_blank">
      <znv-icon name="ios-bookmarks"></znv-icon>编辑器
   </znv-menu-item>
   <znv-menu-item name="3" to="https://www.baidu.com" target="_blank">
      <znv-icon name="ios-analytics"></znv-icon>图表组件
   </znv-menu-item>
</znv-menu>
</template>
```
:::

### API

### Menu props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 菜单类型   | string  |  horizontal（水平） 和 vertical（垂直）  |   vertical  |
| theme     | 主题   | string  |  light、dark  |  light  |
| active-name  | 激活菜单的 name 值   | String/ Number  | -  |  -  |
| open-names  | 展开的 Submenu 的 name 集合  | Array  | -  |  [] |
| expand-all  | 展开所有的 Submenu 的  | Boolean  | -  |  false |
| accordion  | 是否开启手风琴模式  | Boolean	  | -  |  false |
| width  | 导航菜单的宽度，只在 mode="vertical" 时有效  | String  | -  |  240px |

### Menu events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-select    | 选择菜单（MenuItem）时触发   | name  |
| on-open-change    |  展开/收起 子菜单时触发  | 当前展开的 Submenu 的 name 值数组  |

### Menu methods

| 方法名      | 说明    | 参数      |
|---------- |-------- |---------- |
| updateOpened   | 手动更新展开的子目录，注意要在 $nextTick 里调用 | 无  |
| updateActiveName   |  手动更新当前选择项，注意要在 $nextTick 里调用  | 无 |

### MenuItem props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 菜单项的唯一标识，必填   | String/Number  | -  |   -  |
| to     | 跳转的链接，支持 vue-router 对象  | String / Object  | -  |   -  |
| replace     | 路由跳转时，开启 replace 将不会向 history 添加新记录  | Boolean	  | -  |  false |
| target     | 相当于 a 链接的 target 属性  | String	 | -  |  	_self |

### Submenu props 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 子菜单的唯一标识，必填   | String/Number  | -  |   -  |
| transfer | 子菜单是否移动至body ,需配合menu的scrollable属性使用  | Boolean  | -  |   -  |

### Submenu slot

| 名称      | 说明    |
|---------- |-------- |
| 无     | 菜单项  |
| title     | 子菜单标题  |

### MenuGroup

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题  | String  | -  | 空 |
