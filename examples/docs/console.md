## 控制台优化

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#suo-you-shi-li" title="所有实例"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

使用 `$log` 可以在控制台输出颜色信息

打开控制台查看输出效果
可以使用 $print快速输出，也可以使用 $log.primary这种进行精度输出
    
### 所有实例

::: demo
```html
<template>
    <div class="demo-button">
      <znv-button @click="$log.print('default print','#df85ff')">custom</znv-button>
      <znv-button @click="$log.print('default print')">default</znv-button>
      <znv-button @click="$log.print('primary print','primary')" type="primary">primary</znv-button>
      <znv-button @click="$log.print('success print','success')" type="success">success</znv-button>
      <znv-button @click="$log.print('warning print','warning')" type="warning">warning</znv-button>
      <znv-button @click="$log.print('danger print','danger')" type="danger">danger</znv-button>
    </div>
    <div class="demo-button">
      <znv-button @click="$log.print('primary print','primary',true)" type="primary">primary-back</znv-button>
      <znv-button @click="$log.print('success print','success',true)" type="success">success-back</znv-button>
      <znv-button @click="$log.print('warning print','warning',true)" type="warning">warning-back</znv-button>
      <znv-button @click="$log.print('danger print','danger',true)" type="danger">danger-back</znv-button>
    </div>
    <div class="demo-button">
      <znv-button @click="$log.print({name:'znv-ui',author:'creek'})" >object - log</znv-button>
      <znv-button @click="$log.pretty('title','pretty print','primary')" >pretty - primary</znv-button>
      <znv-button @click="$log.pretty('title','pretty print','success')" >pretty - success</znv-button>
      <znv-button @click="$log.pretty('title','pretty print','warning')" >pretty - warning</znv-button>
      <znv-button @click="$log.pretty('title','pretty print','danger')" >pretty - danger</znv-button>
    </div>
</template>
```
:::


### API：

    $print( 文字, 样式/颜色, 是否是背景模式 )
        
    $log.print( 文字, 样式/颜色, 是否是背景模式 )
    $log.print( 对象/数组 )
    
    $log.primary(文字, 是否是背景模式)
    $log.success(文字, 是否是背景模式)
    $log.warning(文字, 是否是背景模式)
    $log.danger(文字,  是否是背景模式)
    $log.pretty(文字, 文字2，样式/颜色)
