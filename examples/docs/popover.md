## Popover 气泡弹窗

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

气泡类型的弹窗,用于放置更多信息或询问流程等

### 基础用法

::: demo
```html
<template>
<div>
  <znv-popover trigger="hover" title="Title" content="content">
      <znv-button>Hover</znv-button>
  </znv-popover>
  <znv-popover trigger="click" title="Title" content="content">
      <znv-button>Click</znv-button>
  </znv-popover>
  <znv-popover trigger="focus" title="Title" content="content">
      <znv-button>Focus</znv-button>
  </znv-popover>
</div>
</template>
```
:::

### 多种悬停位置

::: demo
```html
<template>
    <div class="top">
        <znv-popover title="Title" content="Top Left text" placement="top-start">
            <znv-button>上左</znv-button>&nbsp;&nbsp;
        </znv-popover>
        <znv-popover title="Title" content="Top Center text" placement="top">
            <znv-button>上边</znv-button>&nbsp;&nbsp;
        </znv-popover>
        <znv-popover title="Title" content="Top Right text" placement="top-end">
            <znv-button>上右</znv-button>
        </znv-popover>
    </div>
    <div class="center">
        <div class="center-left">
            <znv-popover title="Title" content="Left Top text" placement="left-start">
                <znv-button>左上</znv-button> 
            </znv-popover><br><br>
            <znv-popover title="Title" content="Left Center text" placement="left">
                <znv-button>左边</znv-button> 
            </znv-popover><br><br>
            <znv-popover title="Title" content="Left Bottom text" placement="left-end">
                <znv-button>左下</znv-button>
            </znv-popover>
        </div>
        <div class="center-right">
            <znv-popover title="Title" content="Right Top text" placement="right-start">
                <znv-button>右上</znv-button>
            </znv-popover><br><br>
            <znv-popover title="Title" content="Right Center text" placement="right">
                <znv-button>右边</znv-button>
            </znv-popover><br><br>
            <znv-popover title="Title" content="Right Bottom text" placement="right-end">
                <znv-button>右下</znv-button>
            </znv-popover>
        </div>
    </div>
    <div class="bottom">
        <znv-popover title="Title" content="Bottom Left text" placement="bottom-start">
            <znv-button>下左</znv-button>&nbsp;&nbsp;
        </znv-popover>
        <znv-popover title="Title" content="Bottom Center text" placement="bottom">
            <znv-button>下边</znv-button>&nbsp;&nbsp;
        </znv-popover>
        <znv-popover title="Title" content="Bottom Right text" placement="bottom-end">
            <znv-button>下右</znv-button>
        </znv-popover>
    </div>
</template>
```
:::

### 浮层内关闭

::: demo
```html
<template>   
<znv-popover v-model="visible">
  <a style="margin-left: 30px;">Click</a>
  <div slot="title">标题slot</div>
  <div slot="content">
      <a @click="close">关闭</a>
  </div>
</znv-popover>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>
```
:::

### 更多内容

::: demo
```html
<template>
<div>
  <znv-popover placement="top" width="200" word-wrap>
    <znv-button>长文本</znv-button>
    <div slot="content">
      <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
    </div>
  </znv-popover>
  <znv-popover placement="right" width="300">
    <znv-button>更多内容</znv-button>
    <div slot="content">
      <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
      <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
    </div>
  </znv-popover>
</div>
</template>
```
:::

### 确认气泡框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

::: demo
```html
<template>
<div style="padding-left:50px;">
   <znv-popover
      confirm
      title="确认删除此项吗?"
      @on-ok="ok"
      @on-cancel="cancel">
      <znv-button type="danger" plain>删 除</znv-button>
  </znv-popover>&nbsp;&nbsp;
   <znv-popover
      confirm
      title="Are you sure delete this item?"
      ok-text="Yes" cancel-text="No"
      @on-ok="ok"
      @on-cancel="cancel">
      <znv-button type="danger" plain>自定义文字</znv-button>
  </znv-popover>&nbsp;&nbsp;
   <znv-popover
      confirm icon-name="ios-trash" :icon-styles="{color:'#f5222d'}"
      title="Are you sure delete this item?"
      @on-ok="ok"
      @on-cancel="cancel">
      <znv-button type="danger" plain>自定义图标</znv-button>
  </znv-popover>
</div>
</template>
<script>
    export default {
       methods: {
           ok () {
               this.$message('点击了确定');
           },
           cancel () {
               this.$message('点击了取消');
           }
       }
   }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  | hover（悬停）click（点击）focus（聚焦） |  click  |
| title     | 标题   | string  |  —   |   —   |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| width	     | 宽度  |  string/number  | — |   —    |
| confirm    | 是否开启对话框模式   |  Boolean |  — |  	false     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| ok-text    | 确定按钮文字   | string  |  —   |   确 定    |
| cancel-text    | 取消按钮文字 | string  |  —   |   取 消    |
| popper-class   | 给 Popover 设置 class-name，在使用 transfer appendToBody  | string  |  —   |   —    |
| padding	   | 自定义间距值 | string  |  —   |  8px 16px     |
| icon-name	   | 自定义图标名称 | string  |  —   |   —      |
| icon-styles    | 自定义图标样式 | Object  |  —   |   —    |

### Events 

| 名称      | 事件名    | 返回值    |
|---------- |-------- |-------- |
| on-popper-show     | 在提示框显示时触发   | 无    |
| on-popper-hide    | 在提示框消失时触发   | 无    |
| on-ok	 | 点击确定的回调 ,只在 confirm 模式下有效  | 无    |
| on-cancel   | 点击取消的回调,只在 confirm 模式下有效   | 无    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 提示框标题，定义此 slot 时，会覆盖 props title。   |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
