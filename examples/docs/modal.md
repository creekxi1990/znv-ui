## Modal 模态框

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-yang-shi" title="自定义样式"></znv-anchor-link>
        <znv-anchor-link href="#yi-bu-guan-bi" title="异步关闭"></znv-anchor-link>
        <znv-anchor-link href="#jin-yong-guan-bi" title="禁用关闭"></znv-anchor-link>
        <znv-anchor-link href="#zi-ding-yi-wei-zhi" title="自定义位置"></znv-anchor-link>
        <znv-anchor-link href="#quan-ping" title="全屏"></znv-anchor-link>
        <znv-anchor-link href="#ke-tuo-zhuai" title="可拖拽"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
        <znv-anchor-link href="#slot" title="Slot"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

对话框/弹窗，在浮层中显示，引导用户进行相关操作。

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html
<template>
  <znv-button type="primary" @click="modal1 = true">显示弹窗</znv-button>
  <znv-modal v-model="modal1" title="普通的模态框标题"
    @on-ok="$log.print('ok click')"  @on-cancel="$log.print('cancel click','success')">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
  </znv-modal>
</template>
<script>
    export default {
      data () {
            return {
                modal1: false
            }
        }
    }
</script>
```
:::

### 自定义样式

Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。

::: demo 注：参数内容都包含在第一个示例中
```html
<template>
  <znv-button  @click="modal2 = true">自定义页头页脚</znv-button>
  <znv-button  @click="modal3 = true">不带标题栏和页脚</znv-button>
  <znv-button  @click="modal4 = true">设置宽</znv-button>
  <znv-modal v-model="modal2">
     <p slot="header" style="color:#f60;text-align:center">
         <span>自定义页头</span>
      </p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <div slot="footer">
          <znv-button type="danger"  @click="$log.print('delete click','danger')" >Delete</znv-button>
      </div>
  </znv-modal>
  <znv-modal v-model="modal3" footer-hide>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
  </znv-modal>
  <znv-modal v-model="modal4"
   title="自定义宽度"
          width="300">
        <p> 自定义宽度，单位 px，默认 520px。
           对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>
    </znv-modal>
</template>
<script>
    export default {
      data () {
            return {
                modal2: false,
                modal3: false,
                modal4: false
            }
        }
    }
</script>
```
:::

### 异步关闭

给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，
需要手动关闭对话框，常用于表单提交。 这里建议自定义footer以达到更精确的按钮控制

::: demo
```html
<template>
  <znv-button type="primary" @click="showModal">显示弹窗</znv-button>
  <znv-modal v-model="modal5" title="普通的模态框标题"
          :loading="loading"
          @on-ok="asyncOK">
      <znv-form :model="formInline" ref="form" :rules="ruleValidate" :label-width="80">
        <znv-form-item label="用户名" prop="name">
          <znv-input v-model="formInline.name" placeholder="请输入"></znv-input>
        </znv-form-item>
      </znv-form>
  </znv-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal5: false,
                loading: true,
                formInline: {
                  name: ''
                },
                ruleValidate: {
                   name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
                }
            }
        },
         methods: {
            showModal(){
              this.modal5 = true
              this.loading = true
              this.formInline.name=''
              this.$refs.form.resetFields();
            },
            asyncOK () {
                this.$refs.form.validate((valid) => {
                  if (valid) {
                    setTimeout(() => {
                        this.$message({type:'success',content:'表单提交成功'});
                        this.modal5 = false;
                    }, 2000);
                  } else {
                    this.$message({type:'danger',content:'表单校验失败'});
                    this.loading = false 
                    setTimeout(() => {
                        this.loading = true 
                    }, 200);
                  }
                })
            }
         }
    }
</script>
```
:::

### 禁用关闭

可以禁用关闭和遮罩层关闭。

::: demo
```html
<template>
    <znv-button @click="modal6 = true">禁用右上角关闭</znv-button>
    <znv-button @click="modal7 = true">禁用mask关闭</znv-button>
    <znv-modal v-model="modal6" title="普通的模态框标题" :closable="false">
      <p>禁用右上角关闭</p>
    </znv-modal>
    <znv-modal v-model="modal7" title="普通的模态框标题"  :mask-closable="false">
      <p>禁用mask关闭</p>
    </znv-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                modal7: false
            }
        }
    }
</script>
```
:::

### 自定义位置

可以自定义对话框的位置。

::: demo
```html
<template>
    <znv-button @click="modal8 = true">距离顶部200px</znv-button>
    <znv-button @click="modal9 = true">垂直居中</znv-button>
    <znv-modal v-model="modal8" title="距离顶部" :styles="{top: '200px'}">
      <p>距离顶部200px</p>
    </znv-modal>
    <znv-modal v-model="modal9" title="垂直居中" class-name="vertical-center-modal">
      <p>垂直居中的模态框</p>
    </znv-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal8: false,
                modal9: false
            }
        }
    }
</script>
```
:::

### 嵌套

弹窗嵌套一般情况下不推荐嵌套，但也可以这么使用

::: demo
```html
<template>
<div>
    <znv-button @click="modal1 = true">显示弹窗一</znv-button>
    <znv-button @click="modal3 = true">显示全屏弹窗</znv-button>
    <znv-button @click="openModal5">自定义弹窗</znv-button>
    <znv-modal v-model="modal1" title="弹窗一" footer-hide width="600">
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <znv-button type="primary" @click="modal2 = true">打开嵌套弹窗</znv-button>
        <znv-modal v-model="modal2" title="嵌套弹窗">
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
        </znv-modal>
    </znv-modal>
    <znv-modal v-model="modal3" title="全屏弹窗" footer-hide fullscreen>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <znv-button type="primary" @click="modal4 = true">打开嵌套弹窗</znv-button>
        <znv-modal v-model="modal4" title="全屏嵌套弹窗">
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
        </znv-modal>
    </znv-modal>

  <transition name="fade-scale-move">
    <div v-show="modal5" 
        style="
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          box-sizing: border-box;
          z-index: 1000;
          background-color: #fff;">
      自定义弹窗内容
      <znv-button @click="closeModal5">关闭自定义弹窗</znv-button>
        <znv-button type="primary" @click="modal4 = true">打开嵌套弹窗</znv-button>
        <znv-modal v-model="modal4" title="全屏嵌套弹窗" stop-remove-scroll>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
          <p>我是弹窗内容...</p>
        </znv-modal>
    </div>
  </transition>
</div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods:{
          openModal5(){
                this.modal5=true
                // 模拟移除滚动条
                document.body.style.paddingRight = '15px'
                document.body.style.overflow = 'hidden'
          }, 
          closeModal5(){
                this.modal5=false
                  this.timer = setTimeout(() => {
                    // 添加滚动条
                    document.body.style.paddingRight = ''
                    document.body.style.overflow = ''
                  }, 300)
          }
        }
    }
</script>
```
:::

### 全屏

设置属性 `fullscreen` 可以全屏显示。属性 `footer-hide` 可以隐藏底部内容。

::: demo
```html
<template>
    <znv-button @click="modal10 = true">显示全屏对话框</znv-button>
    <znv-modal v-model="modal10" title="全屏标题" fullscreen>
      <p  v-for="i in 100" :key="i">我是全屏的内容{{i}}...</p>
    </znv-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal10: false
            }
        }
    }
</script>
```
:::

### 可拖拽

设置属性 `draggable` 对话框可以进行拖拽移动。

::: demo
```html
<template>
    <znv-button @click="modal11 = true">打开弹窗1</znv-button>
    <znv-button @click="modal12 = true">打开弹窗2</znv-button>
    <znv-modal v-model="modal11" title="弹窗1" draggable>
      <p>弹窗1内容</p>
    </znv-modal>
    <znv-modal v-model="modal12" title="弹窗2" draggable>
      <p>弹窗2内容</p>
    </znv-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal11: false,
                modal12: false
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 是否显示，可使用 v-model 双向绑定数据。   | Boolean  |    —       |    false    |
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |    —    |     —     |
| closable     | 右上角的关闭按钮 | Boolean  |      —      | true |
| mask-closable     | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| loading     | 确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框 | Boolean  |      —      | false |
| fullscreen     | 是否全屏显示 | Boolean  |      —      | false |
| draggable     | 是否可以拖拽移动 | Boolean  |      —      | false |
| mask     | 是否显示遮罩层，开启 draggable 时，强制不显示 | Boolean  |      —      | true |
| ok-text     | 确定按钮文字 | String  |      —      | 确定 |
| cancel-text     | 取消按钮文字 | String  |      —      | 取消 |
| width     | 对话框宽度 | Number/ String  |      —      | 520 |
| footer-hide     | 不显示底部 | Boolean  |      —      | false |
| styles    | 设置浮层样式，调整浮层位置等 | Object  |      —      |  —  |
| body-styles    | 设置body的样式,多用于设置自定义内边距 | Object  |      —      |  —  |
| class-name    | 设置对话框容器的类名 | String  |      —      |  —  |
| z-index    | 层级 | Number  |      —      |  2000  |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  false  |
| stop-remove-scroll | 是否阻止模态窗释放body滚动，多应用于多层嵌套 | Boolean  |      —      |  false  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-ok     | 点击确定的回调   | 无  |
| on-cancel    | 点击取消的回调   | 无  |
| on-visible-change    | 显示状态发生变化时触发   | true / false  |
| on-opened    | 打开动画完成事件   | 无  |
| on-hidden    | 关闭动画结束事件   | 无  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| header     | 自定义页头   |
| footer     | 自定义页脚内容   |
| close     | 自定义右上角关闭内容   |
