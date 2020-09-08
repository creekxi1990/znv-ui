## Grid 栅格

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#jian-ge" title="间隔"></znv-anchor-link>
        <znv-anchor-link href="#flex-gai-bian-zha-ge-shun-xu" title="flex改变栅格顺序"></znv-anchor-link>
        <znv-anchor-link href="#zha-ge-shun-xu" title="栅格顺序"></znv-anchor-link>
        <znv-anchor-link href="#zuo-you-pian-yi" title="左右偏移"></znv-anchor-link>
        <znv-anchor-link href="#flex-bu-ju" title="flex布局"></znv-anchor-link>
        <znv-anchor-link href="#xiang-ying-shi-bu-ju" title="响应式布局"></znv-anchor-link>
        <znv-anchor-link href="#row-props" title="Row Props"></znv-anchor-link>
        <znv-anchor-link href="#col-props" title="Col Props"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

我们采用了24栅格系统，将区域进行24等分，和大部分组件库类似，我们也引入两个组件，row和col，row表示行，col在row之内使用

### 基础用法

::: demo
```html
<template>
  <znv-row>
      <znv-col span="12">col-12</znv-col>
      <znv-col span="12">col-12</znv-col>
  </znv-row>
  <br>
  <znv-row>
      <znv-col span="8">col-8</znv-col>
      <znv-col span="8">col-8</znv-col>
      <znv-col span="8">col-8</znv-col>
  </znv-row>
  <br>
  <znv-row>
      <znv-col span="6">col-6</znv-col>
      <znv-col span="6">col-6</znv-col>
      <znv-col span="6">col-6</znv-col>
      <znv-col span="6">col-6</znv-col>
  </znv-row>
</template>
```
:::

### 间隔

可以设置gutter间隔

::: demo
```html
<template>
  <znv-row :gutter="20" class="gutter">
      <znv-col span="6"><div>col-6</div></znv-col>
      <znv-col span="6"><div>col-6</div></znv-col>
      <znv-col span="6"><div>col-6</div></znv-col>
      <znv-col span="6"><div>col-6</div></znv-col>
  </znv-row>
</template>
```
:::

### flex改变栅格顺序

::: demo
```html
<template>
  <znv-row type="flex">
      <znv-col span="6" order="4">1 | order-4</znv-col>
      <znv-col span="6" order="3">2 | order-3</znv-col>
      <znv-col span="6" order="2">3 | order-2</znv-col>
      <znv-col span="6" order="1">4 | order-1</znv-col>
  </znv-row>
</template>
```
:::

### 栅格顺序

通过设置push和pull来改变栅格的顺序。

::: demo
```html
<template>
  <znv-row>
      <znv-col span="14" push="10">col-14 | push="10"</znv-col>
      <znv-col span="10" pull="14">col-10 | pull="14"</znv-col>
  </znv-row>
</template>
```
:::

### 左右偏移

offset 可以设置偏移量

::: demo
```html
<template>
<znv-row>
  <znv-col span="8">col-8</znv-col>
  <znv-col span="8" offset="8">col-8 | offset-8</znv-col>
</znv-row>
<br>
<znv-row>
  <znv-col span="6" offset="8">col-6 | offset-8</znv-col>
  <znv-col span="6" offset="4">col-6 | offset-4</znv-col>
</znv-row>
<br>
<znv-row>
  <znv-col span="12" offset="8">col-12 | offset-8</znv-col>
</znv-row>
</template>
```
:::

### flex布局

::: demo
```html
<template>
<p>子元素向左排列</p>
<znv-row type="flex" justify="start" class="code-row-bg">
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
</znv-row>
<p>子元素向右排列</p>
<znv-row type="flex" justify="end" class="code-row-bg">
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
</znv-row>
<p>子元素居中排列</p>
<znv-row type="flex" justify="center" class="code-row-bg">
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
</znv-row>
<p>子元素等宽排列</p>
<znv-row type="flex" justify="space-between" class="code-row-bg">
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
</znv-row>
<p>子元素分散排列</p>
<znv-row type="flex" justify="space-around" class="code-row-bg">
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
    <znv-col span="4">col-4</znv-col>
</znv-row>
<p>顶部对齐</p>
<znv-row type="flex" justify="center" align="top" class="code-row-bg">
    <znv-col span="4"><p style="height: 80px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 30px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 100px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 60px">col-4</p></znv-col>
</znv-row>
<p>底部对齐</p>
<znv-row type="flex" justify="center" align="bottom" class="code-row-bg">
    <znv-col span="4"><p style="height: 80px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 30px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 100px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 60px">col-4</p></znv-col>
</znv-row>
<p>居中对齐</p>
<znv-row type="flex" justify="center" align="middle" class="code-row-bg">
    <znv-col span="4"><p style="height: 80px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 30px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 100px">col-4</p></znv-col>
    <znv-col span="4"><p style="height: 60px">col-4</p></znv-col>
</znv-row>
</template>
```
:::

### 响应式布局

预设六个响应尺寸：xs sm md lg xl xxl，详见 API。

::: demo
```html
<template>
<znv-row>
    <znv-col :xs="2" :sm="4" :md="6" :lg="8">znv-col</znv-col>
    <znv-col :xs="20" :sm="16" :md="12" :lg="8">znv-col</znv-col>
    <znv-col :xs="2" :sm="4" :md="6" :lg="8">znv-col</znv-col>
</znv-row>
</template>
```
:::

### Row props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| gutter     | 栅格间距，单位 px   | Number  |  —   |   0  |
| type    | 布局模式，在现代浏览器下有效   |  String |  flex或不选 |  —   |
| justify    | lex 布局下的水平排列方式  | String  |  —   |  —   |
| align    | flex 布局下的垂直对齐方式  | String  |  start、end、center、space-around、space-between  |  —   |
| class-name    | 自定义的class名称 | String  |  —  |  —   |

### Col props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| span     | 栅格的占位格数  为0 时，相当于display:none  | Number/String  |  0~24   | - |
| order     | 栅格的顺序  在flex布局模式下有效 | Number/String  |  -   | - |
| offset     | 栅格左侧偏移 | Number/String  | -  | - |
| push     | 栅格向右移动格数 | Number/String  | -  | - |
| pull     | 栅格向左移动格数 | Number/String  | -  | - |
| class-name     | 自定义的class | String  | -  | - |
| xs    | <576px 响应式栅格 响应式栅格 | Number / Object  | -  | - |
| sm    | (≥576px < 768px)≥576px 响应式栅格 响应式栅格 | Number / Object  | -  | - |
| md    | (≥768px < 992px) 响应式栅格 响应式栅格 | Number / Object  | -  | - |
| lg    | (≥992px < 1200px) 响应式栅格 响应式栅格 | Number / Object  | -  | - |
| xl    | (≥1200px < 1600px) 响应式栅格 响应式栅格 | Number / Object  | -  | - |
| xxl   | ≥1600px 响应式栅格 响应式栅格 | Number / Object  | -  | - |
