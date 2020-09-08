## Badge 徽标

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-ti-shi-nei-rong" title="自定义提示内容"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title=" Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

用于提示当前条目数量等

### 基础用法

基础的徽标用法

::: demo
```html
<template>
   <znv-badge :value="12" class="item">
     <znv-button>普通按钮</znv-button>
   </znv-badge>
   <znv-badge :value="3" class="item">
     <znv-button>回复</znv-button>
   </znv-badge>
   <znv-badge :value="1" class="item" type="primary">
     <znv-button>primary徽标</znv-button>
   </znv-badge>
   <znv-badge :value="2" class="item" type="warning">
     <znv-button>warning徽标</znv-button>
   </znv-badge>
   <znv-badge :value="200" :max="99" class="item">
     <znv-button>最大数值</znv-button>
   </znv-badge>
</template>
```
:::

### 自定义提示内容

可以提示非数字的徽标

::: demo
```html
<template>
   <znv-badge value="hot" class="item">
     <znv-button>热点</znv-button>
   </znv-badge>
   <znv-badge value="new" class="item">
     <znv-button>回复</znv-button>
   </znv-badge>
   <znv-badge is-dot class="item">红点模式</znv-badge>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 显示值   | string, number  |  —   |    —     |
| max     | 最大值，超过最大值会显示 '{max}+'   |  number  |  —   |    —     |
| is-dot     | 小圆点   |  boolean  |  —   |false|
| hidden     | 隐藏 badge   |  boolean  |  —   |false|
| type     | 类型   |  string  |  primary / success / warning / danger / info  | — |
