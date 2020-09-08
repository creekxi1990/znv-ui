## Tooltip 提示

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#duo-chong-xuan-ting-wei-zhi" title="多种悬停位置"></znv-anchor-link>
        <znv-anchor-link href="#bu-tong-zhu-ti" title="不同主题"></znv-anchor-link>
        <znv-anchor-link href="#duo-xing" title="多行"></znv-anchor-link>
        <znv-anchor-link href="#chang-wen-ben" title="长文本"></znv-anchor-link>
        <znv-anchor-link href="#ke-yi-yan-shi-he-guan-bi-ti-shi" title="可以延时和关闭提示"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
        <znv-anchor-link href="#slot" title="Slot"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。

### 基础用法

::: demo
```html
<template>
  <znv-tooltip  content="这是tooltip悬停文字">这是一段文字，鼠标经过其上时会显示tooltip</znv-tooltip>
</template>
```
:::

### 多种悬停位置

::: demo
```html
<template>
    <div class="top">
        <znv-tooltip content="Top Left text" placement="top-start">
            <znv-button>上左</znv-button>&nbsp;&nbsp;
        </znv-tooltip>
        <znv-tooltip content="Top Center text" placement="top">
            <znv-button>上边</znv-button>&nbsp;&nbsp;
        </znv-tooltip>
        <znv-tooltip content="Top Right text" placement="top-end">
            <znv-button>上右</znv-button>
        </znv-tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <znv-tooltip content="Left Top text" placement="left-start">
                <znv-button>左上</znv-button> 
            </znv-tooltip><br><br>
            <znv-tooltip content="Left Center text" placement="left">
                <znv-button>左边</znv-button> 
            </znv-tooltip><br><br>
            <znv-tooltip content="Left Bottom text" placement="left-end">
                <znv-button>左下</znv-button>
            </znv-tooltip>
        </div>
        <div class="center-right">
            <znv-tooltip content="Right Top text" placement="right-start">
                <znv-button>右上</znv-button>
            </znv-tooltip><br><br>
            <znv-tooltip content="Right Center text" placement="right">
                <znv-button>右边</znv-button>
            </znv-tooltip><br><br>
            <znv-tooltip content="Right Bottom text" placement="right-end">
                <znv-button>右下</znv-button>
            </znv-tooltip>
        </div>
    </div>
    <div class="bottom">
        <znv-tooltip content="Bottom Left text" placement="bottom-start">
            <znv-button>下左</znv-button>&nbsp;&nbsp;
        </znv-tooltip>
        <znv-tooltip content="Bottom Center text" placement="bottom">
            <znv-button>下边</znv-button>&nbsp;&nbsp;
        </znv-tooltip>
        <znv-tooltip content="Bottom Right text" placement="bottom-end">
            <znv-button>下右</znv-button>
        </znv-tooltip>
    </div>
</template>
```
:::

### 不同主题

::: demo
```html
<template>
  <znv-tooltip content="light" theme="light" >
     <znv-button>light</znv-button>&nbsp;&nbsp;
  </znv-tooltip>
  <znv-tooltip content="Dark" theme="dark">
    <znv-button>Dark(default)</znv-button>
  </znv-tooltip>
</template>
```
:::

### 多行

::: demo
```html
<template>
  <znv-tooltip placement="top">
  <znv-button>多行</znv-button>
    <div slot="content">
      <div>这是多行文字</div>
      <div>这是多行文字</div>
    </div>
  </znv-tooltip>
</template>
```
:::

### 长文本

::: demo
```html
<template>
  <znv-tooltip placement="top" max-width="200" content="我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本">
    <znv-button>长文本</znv-button>
  </znv-tooltip>
</template>
```
:::

### 可以延时和关闭提示

::: demo
```html
<template>
  <znv-tooltip  content="延时一秒显示悬停文字" :delay="1000">
   <znv-button>延时一秒</znv-button>&nbsp;&nbsp;
  </znv-tooltip>
   <znv-tooltip  content="关闭和隐藏提示" :disabled="disabled">
     <znv-button @click="disabled=!disabled">{{ disabled ? '关闭提示':'开启提示'}}</znv-button>
   </znv-tooltip>
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

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| delay     | 延迟显示   |  Number	 |  —   |   100   |
| always     | 是否总是可见   |  Boolean  |  —   |   false   |
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| max-width	     | 最大宽度，超出最大值后，文本将自动换行   |  string/number  | — |   —    |
| offset    | 出现位置的偏移量   |  Number |  — |  	0     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| options    | 自定义 popper.js 的配置项具体参考popper.js   | Object  |  —   |   —    |

### Events 

| 名称      | 事件名    | 返回值    |
|---------- |-------- |-------- |
| on-popper-show     | 在提示框显示时触发   | 无    |
| on-popper-hide    | 在提示框消失时触发   | 无    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
