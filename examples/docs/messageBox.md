## MessageBox 弹框

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#mo-nialert" title="模拟alert"></znv-anchor-link>
        <znv-anchor-link href="#mo-niconfirm" title="模拟confirm"></znv-anchor-link>
        <znv-anchor-link href="#ke-yi-zi-ding-yi-nei-rong" title="可以自定义内容"></znv-anchor-link>
        <znv-anchor-link href="#api" title="API"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

弹窗是为了模拟快速创建模态框准备的，基于Modal框生成的窗口实例。

### 模拟alert

只有确定按钮，可以直接使用 `$alert` 也可以个设置type或者直接使用快捷方法

::: demo
```html
<template>
    <znv-button type="primary" 
    @click="$alert({title: '标题',content: '我是弹窗内容',width:500})">Info</znv-button>
    <znv-button type="success" 
    @click="$alert({type:'success',title: '标题',content: '我是弹窗内容'})">Success</znv-button>
    <znv-button type="warning" 
    @click="$alert.warning({title: '标题',content: '我是弹窗内容'})">Warning</znv-button>
    <znv-button type="danger" @click="showAlert">Danger</znv-button>
</template>
<script>
  export default {
    methods:{
      showAlert(){
        this.$alert({type:'danger',title: '标题',content: '我是弹窗内容',
        onOk:()=>{
          this.$message('点击了确定关闭弹窗')
        }})
      }
    }
  }
</script>
```
:::

### 模拟confirm

模拟confirm提交选择

::: demo
```html
<template>
    <znv-button type="default" 
      @click="$confirm({title: '标题',content: '我是弹窗内容'})">标准</znv-button>
    <znv-button type="default" 
      @click="$confirm({iconName:'success',title: '标题',content: '我是弹窗内容'})">更换图标</znv-button>
    <znv-button type="default" 
      @click="$confirm({iconName:'heart',iconType:'danger',title: '标题',content: '我是弹窗内容'})">更换图标颜色</znv-button>
    <znv-button type="default" 
      @click="$confirm({title: '标题',content: '改变按钮文字',okText: 'OK',okType: 'danger',cancelText: 'Cancel',cancelType: 'info'})">
      改变按钮样式
    </znv-button>
    <znv-button type="default" 
      @click="async">确定2s后关闭</znv-button>
</template>
<script>
  export default {
    methods:{
       async () {
          this.$confirm({
              title: '标题',
              content: '<p>这个弹窗会在点击2秒后关闭</p>',
              loading: true,
              onOk: () => {
                  setTimeout(() => {
                      this.$modal.remove();
                      this.$message('模态框已经关闭');
                  }, 2000);
              }
          });
      }
    }
  }
</script>
```
:::

### 可以自定义内容

可以使用 `render` 函数自定义内容

::: demo
```html
<template>
    <znv-button type="default" size="small" 
      @click="handleRender">自定义内容</znv-button>
</template>
<script>
  export default {
    methods:{
      handleRender () {
          this.$confirm({
              render: (h) => {
                  return h('div', {},'我是render函数渲染的')
              }
          })
      }
    }
  }
</script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$alert(config)
    this.$alert.success(config)
    this.$alert.warning(config)
    this.$alert.danger(config)
    this.$confirm(config)
    this.$modal
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| title     |  标题   | String /Element String  | —  |
| content  |  内容   | String /Element String  | —  |
| render  |  自定义内容，使用后不再限制类型   | Function  | —  |
| width  |  宽度，单位 px   | Number / String  |  416  |
| okText  |  确定按钮的文字   |   | 确定 |
| cancelText  |  取消按钮的文字，只在$confirm()下有效   | String  |取消  |
| loading  |  显示 loading 状态，需手动调用Modal.remove()来关闭对话框   | Boolean  | false  |
| scrollable  |  页面是否可以滚动   | Boolean  | false  |
| onOk  |  点击确定的回调   |Function  | —  |
| onCancel  |  点击取消的回调，只在Modal.confirm()下有效   | Function  | —  |
