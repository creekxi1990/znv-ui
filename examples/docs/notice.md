## Notice 通知

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#dai-tu-biao" title="带图标"></znv-anchor-link>
        <znv-anchor-link href="#render-han-shu-diao-yong" title="render函数调用"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
     <znv-button @click="open(false)">提醒</znv-button>
     <znv-button @click="open(true)">打开提醒(仅标题)</znv-button>
     <znv-button @click="time">自定义时长</znv-button>
</template>
<script>
  export default {
    methods: {
       open (nodesc) {
           this.$notice.open({
               title: 'Notice 标题',
               desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
           });
       },
        time () {
            this.$notice.open({
               title: 'Notice 标题',
               desc: '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.',
               duration: 0
            })
        }
    }
  }
</script>
```

:::

### 带图标

::: demo
```html
<template>
<div>
<div style="padding: 5px 0;">带描述</div>
     <znv-button @click="info(false)">Info</znv-button>
     <znv-button @click="success(false)">Success</znv-button>
     <znv-button @click="warning(false)">Warning</znv-button>
     <znv-button @click="danger(false)">danger</znv-button>
<div style="padding: 5px 0;">仅标题</div>
     <znv-button @click="info(true)">Info</znv-button>
     <znv-button @click="success(true)">Success</znv-button>
     <znv-button @click="warning(true)">Warning</znv-button>
     <znv-button @click="danger(true)">danger</znv-button>
</div>
</template>
<script>
  export default {
    methods: {
       info (nodesc) {
           this.$notice.info({
               title: 'Notice 标题',
               desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
           });
       },
       success (nodesc) {
           this.$notice.success({
               title: 'Notice 标题',
               desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
           });
       },
       warning (nodesc) {
           this.$notice.warning({
               title: 'Notice 标题',
               desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
           });
       },
       danger (nodesc) {
           this.$notice.danger({
               title: 'Notice 标题',
               desc: nodesc ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
           });
       }
    }
  }
</script>
```
:::

### render函数调用

render函数调用

:::demo
```html
 <template>
     <znv-button type="default"
        @click="renderFunc">render函数调用</znv-button>
  </template>
  <script>
      export default {
        methods: {
           renderFunc () {
             this.$notice.info({
                title: '标题',
                desc: '使用render函数时会忽略desc',
                render: h => {
                    return h('span', [
                        'This is created by ',
                        h('a', 'render'),
                        ' function'
                    ])
                }
            });
          }
        }
      }
  </script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$notice.open(config)
    this.$notice.info(config)
    this.$notice.success(config)
    this.$notice.warning(config)
    this.$notice.error(config)
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| title     |  通知提醒的标题   | String  | —  |
| desc     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式   | String  | —  |
| render     |  自定义描述内容，使用 Vue 的 Render 函数   | Function  | —  |
| duration     | 自动关闭的延时，单位秒，不关闭可以写 0 | Number |3  |
| onClose     | 关闭时的回调 | Function	 |  —  |
| name     | 当前通知的唯一标识 | String  | —  |
