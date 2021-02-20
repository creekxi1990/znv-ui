## Button 按钮

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#dai-tu-biao-de-an-niu" title="带图标"></znv-anchor-link>
        <znv-anchor-link href="#jin-yong-an-niu" title="禁用按钮"></znv-anchor-link>
        <znv-anchor-link href="#wen-zi-an-niu" title="文字按钮"></znv-anchor-link>
        <znv-anchor-link href="#an-niu-zu" title="按钮组"></znv-anchor-link>
        <znv-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></znv-anchor-link>
        <znv-anchor-link href="#jia-zai-zhuang-tai" title="加载状态"></znv-anchor-link>
        <znv-anchor-link href="#dian-ji-dong-hua" title="点击动画"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API">
            <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        </znv-anchor-link>
      </znv-anchor>
    </div>
</template>

常用的操作按钮。

### 基础用法

使用`type`可以设置不同类型的按钮样式，其中，`dashed`也可以单独设置

可以另外给按钮设置不同的按钮效果，如`plain`简约按钮，`round`圆角按钮，`dashed`虚线按钮和`transparent`透明按钮四种不同种类的按钮

::: demo
```html
<template>
    <div class="demo-button">
      <znv-button>Default</znv-button>
      <znv-button type="dashed">Dashed</znv-button>
      <znv-button type="primary">Primary</znv-button>
      <znv-button type="success">Success</znv-button>
      <znv-button type="info">Info</znv-button>
      <znv-button type="warning">Warning</znv-button>
      <znv-button type="danger">Danger</znv-button>
    </div>
    <div class="demo-button">
       <znv-button type="primary" plain>Primary</znv-button>
       <znv-button type="success" plain>Success</znv-button>
       <znv-button type="info" plain>Info</znv-button>
       <znv-button type="warning" plain>Warning</znv-button>
       <znv-button type="danger" plain>Danger</znv-button>
    </div>
    <div class="demo-button">
       <znv-button type="primary" round>Primary</znv-button>
       <znv-button type="success" round>Success</znv-button>
       <znv-button type="info" round>Info</znv-button>
       <znv-button type="warning" round>Warning</znv-button>
       <znv-button type="danger" round>Danger</znv-button>
    </div>
    <div class="demo-button">
      <znv-button dashed>Default</znv-button>
      <znv-button type="primary" dashed>Primary</znv-button>
      <znv-button type="success" dashed>Success</znv-button>
      <znv-button type="info" dashed>Info</znv-button>
      <znv-button type="warning" dashed>Warning</znv-button>
      <znv-button type="danger" dashed>Danger</znv-button>
    </div>
    <div class="demo-button" style="background: #cad4d4;padding: 10px;">
       <znv-button type="primary" transparent size="small">Primary</znv-button>
       <znv-button type="success" transparent size="small">Success</znv-button>
       <znv-button type="info" transparent size="small">Info</znv-button>
       <znv-button type="warning" transparent size="small">Warning</znv-button>
       <znv-button type="danger" transparent size="small">Danger</znv-button>
    </div>
</template>
```

:::

### 带图标的按钮

使用`icon`给按钮配置图标

::: demo
```html
<template>
    <div class="demo-button">
      <znv-button icon="ios-search">search</znv-button>
      <znv-button icon="ios-add-circle-outline">create</znv-button>
      <znv-button icon="ios-checkmark-circle-outline" type="primary">check</znv-button>
      <znv-button icon="ios-close-circle" type="danger">delete</znv-button>
    </div>
</template>
```
:::

### 禁用按钮

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

::: demo
```html
<template>
    <div class="demo-button">
      <znv-button disabled>Default</znv-button>
      <znv-button type="dashed" disabled>Dashed</znv-button>
      <znv-button type="primary" disabled>Primary</znv-button>
      <znv-button type="success" disabled>Success</znv-button>
      <znv-button type="info" disabled>Info</znv-button>
      <znv-button type="warning" disabled>Warning</znv-button>
      <znv-button type="danger" disabled>Danger</znv-button>
    </div>
    <div class="demo-button">
       <znv-button type="primary" plain disabled>Primary</znv-button>
       <znv-button type="success" plain disabled>Success</znv-button>
       <znv-button type="info" plain disabled>Info</znv-button>
       <znv-button type="warning" plain disabled>Warning</znv-button>
       <znv-button type="danger" plain disabled>Danger</znv-button>
    </div>
    <div class="demo-button">
       <znv-button type="primary" round disabled>Primary</znv-button>
       <znv-button type="success" round disabled>Success</znv-button>
       <znv-button type="info" round disabled>Info</znv-button>
       <znv-button type="warning" round disabled>Warning</znv-button>
       <znv-button type="danger" round disabled>Danger</znv-button>
    </div>
    <div class="demo-button">
      <znv-button dashed disabled>Default</znv-button>
      <znv-button type="primary" dashed disabled>Primary</znv-button>
      <znv-button type="success" dashed disabled>Success</znv-button>
      <znv-button type="info" dashed disabled>Info</znv-button>
      <znv-button type="warning" dashed disabled>Warning</znv-button>
      <znv-button type="danger" dashed disabled>Danger</znv-button>
    </div>
    <div class="demo-button" style="background: #cad4d4;padding: 10px;">
       <znv-button type="primary" transparent size="small" disabled>Primary</znv-button>
       <znv-button type="success" transparent size="small" disabled>Success</znv-button>
       <znv-button type="info" transparent size="small" disabled>Info</znv-button>
       <znv-button type="warning" transparent size="small" disabled>Warning</znv-button>
       <znv-button type="danger" transparent size="small" disabled>Danger</znv-button>
    </div>
</template>
```
:::

### 文字按钮

没有边框和背景色的按钮。 

::: demo 注意，文字按钮无法使用样式变量进行覆盖，可自主设置颜色值来改变
```html
<template>
<div class="demo-button">
    <div>
       <znv-button type="text">文字按钮</znv-button>
       <znv-button type="text" text-color="primary">Primary</znv-button>
       <znv-button type="text" text-color="success">Success</znv-button>
       <znv-button type="text" text-color="info">Info</znv-button>
       <znv-button type="text" text-color="warning">Warning</znv-button>
       <znv-button type="text" text-color="danger">Danger</znv-button>
       <znv-button type="text" text-color="#b37feb">多彩按钮</znv-button>
       <znv-button type="text" text-color="#f759ab">多彩按钮2</znv-button>
    </div>
    <div>
       <znv-button type="text" disabled>禁用按钮</znv-button>
       <znv-button type="text" text-color="primary" disabled>Primary</znv-button>
       <znv-button type="text" text-color="success" disabled>Success</znv-button>
       <znv-button type="text" text-color="info" disabled>Info</znv-button>
       <znv-button type="text" text-color="warning" disabled>Warning</znv-button>
       <znv-button type="text" text-color="danger" disabled>Danger</znv-button>
       <znv-button type="text" text-color="#f759ab" disabled>多彩按钮</znv-button>
       <znv-button type="text" text-color="#f759ab" disabled>多彩按钮2</znv-button>
    </div>
    <div>
       <znv-button type="text" icon="heart" :icon-style="{fontSize:'20px'}"/>
       <znv-button type="text" icon="ios-create" text-color="success" :icon-style="{fontSize:'20px'}"/>
       <znv-button type="text" icon="ios-warning" text-color="warning"  :icon-style="{fontSize:'20px'}"/>
       <znv-button type="text" icon="ios-close-circle-outline" text-color="danger" :icon-style="{fontSize:'20px'}"/>
       <znv-divider type="vertical"></znv-divider>
       <znv-button type="text" icon="heart" :icon-style="{fontSize:'20px'}" disabled/>
       <znv-button type="text" icon="ios-create" text-color="success" :icon-style="{fontSize:'20px'}" disabled/>
       <znv-button type="text" icon="ios-warning" text-color="warning"  :icon-style="{fontSize:'20px'}" disabled/>
       <znv-button type="text" icon="ios-close-circle-outline" text-color="danger" :icon-style="{fontSize:'20px'}" disabled/>
    </div>
</div>
</template>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。使用`<znv-button-group>`标签来嵌套你的按钮。

::: demo
```html
<template>
    <div class="demo-button">
       <znv-button-group>
         <znv-button type="primary" icon="ios-arrow-back">上一页</znv-button>
         <znv-button type="primary">下一页<i class="znv-iconfont icon-ios-arrow-forward"></i></znv-button>
       </znv-button-group>
       <znv-button-group>
         <znv-button type="success" icon="ios-basketball"></znv-button>
         <znv-button type="info" icon="ios-barcode"></znv-button>
         <znv-button type="danger" icon="favorfill"></znv-button>
       </znv-button-group>
    </div>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo
```html
<template>
    <div class="demo-button">
       <znv-button size="large">Large</znv-button>
       <znv-button>Default</znv-button>
       <znv-button size="small">Small</znv-button>
       <znv-button size="mini">Mini</znv-button>
    </div>
    <div class="demo-button">
       <znv-button size="large" round>Large</znv-button>
       <znv-button round>Default</znv-button>
       <znv-button size="small" round>Small</znv-button>
       <znv-button size="mini" round>Mini</znv-button>
    </div>
</template>
```
:::

### 加载状态

可以添加加载状态

::: demo
```html
<template>
    <div class="demo-button">
       <znv-button loading>default</znv-button>
       <znv-button type="primary" :loading="loading" icon="ios-checkmark-circle-outline"
          @click="loading=true">Click me!</znv-button>
       <znv-button type="primary" :loading="loading1" loading-icon="loading1"
          @click="loading1=true">Click me!</znv-button>
       <znv-button type="primary" :loading="loading2" loading-icon="loading2"
          @click="loading2=true">Click me!</znv-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      loading: false,
      loading1: false,
      loading2: false
    }     
  }
}
</script>
```
:::

### 点击动画

可以设置两种不同的点击动画['click','waves'] ,默认为click

::: demo
```html
<template>
    <div class="demo-button">
       <znv-button>Click me!</znv-button>
       <znv-button type="danger">Click me!</znv-button>
       <znv-button animation-type="waves">Wave Click!</znv-button>
       <znv-button type="success" animation-type="waves">Wave Click!</znv-button>
    </div>
</template>
```
:::

### API

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| transparent | 是否是透明按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| text-color  | 文字按钮颜色，默认禁用文字颜色增加亮度区分 | string  | primary / success / warning / danger / info / text / 自定义色值  |  —  |
| icon-style  | 图标样式,可设置图标大小，字体对其等，可依托text-color设置颜色，也可以自定义 | Object   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
| animation-type | 点击动画 | string | click / waves | click |


