## Drawer 抽屉

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#ji-chu-yong-fa" title="基础用法"></znv-anchor-link>
        <znv-anchor-link href="#zuo-ce-da-kai" title="左侧打开"></znv-anchor-link>
        <znv-anchor-link href="#inner-mo-shi" title="inner模式"></znv-anchor-link>
        <znv-anchor-link href="#xin-xi-yu-lan-kuang" title="信息预览框"></znv-anchor-link>
        <znv-anchor-link href="#bian-ji-chou-ti" title="编辑抽屉"></znv-anchor-link>
        <znv-anchor-link href="#qian-tao-chou-ti" title="嵌套抽屉"></znv-anchor-link>
        <znv-anchor-link href="#ke-tuo-zhuai-kuan-du" title="可拖拽宽度"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#events" title="Events"></znv-anchor-link>
        <znv-anchor-link href="#slot" title="Slot"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html
<template>
  <znv-button type="primary" @click="value1 = true">open</znv-button>
    <znv-drawer v-model="value1" title="抽屉标题" append-to-body :closable="false">
      <p>我是抽屉内容</p>
    </znv-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value1:false
            }
       }
    }
</script>
```
:::

### 左侧打开

设置 `placement="left"`为左侧打开

::: demo
```html
<template>
  <znv-button type="primary" @click="value2 = true">左侧打开</znv-button>
    <znv-drawer v-model="value2" title="抽屉标题" placement="left" append-to-body width="500px">
      <p>我是左侧的抽屉</p>
    </znv-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value2:false
            }
        }
    }
</script>
```
:::

### inner 模式

可以设置inner模式在某个容器内打开

::: demo
```html
<template>
<div style="position:relative;height:400px;background: #eee;border:1px solid #eee;z-index: 2;">
    <znv-button type="primary" @click="valueInner = true">内部抽屉</znv-button>
    <znv-drawer v-model="valueInner" title="内部抽屉" inner :z-index="10">
      <p>我是内部的抽屉</p>
    </znv-drawer>
</div>
</template>
<script>
    export default {
      data () {
        return {
          valueInner:false
        }
      }
    }
</script>
```
:::

### 信息预览框

::: demo 
```html
<template>
  <znv-button type="primary" @click="value3 = true">信息预览</znv-button>
    <znv-drawer v-model="value3" :closable="false" append-to-body width="640">
     <p :style="pStyle">用户信息</p>
     <p :style="pStyle">个人信息</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: creek</span><span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>城市: 徐州市</span><span>区: 鼓楼区</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>出生年月: 1990-04</span><span>职业: web前端</span>
        </p>
     </div>
     <znv-divider></znv-divider>
     <p :style="pStyle">公司</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: xxxx有限公司</span><span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>地址: 徐州市xx区xx街道88号</span><span>电话: +86 1762516xxxx</span>
        </p>
     </div>
     <znv-divider></znv-divider>
     <p :style="pStyle">联系我们</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Email: 004900****@znv.com</span><span>手机号: +86 1762516xxxx</span>
        </p>
     </div>
    </znv-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value3:false,
          pStyle: {
            fontSize: '16px',
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            marginBottom: '16px'
          }
        }
        }
    }
</script>
```
:::

### 编辑抽屉

::: demo 
```html
<template>
  <znv-button type="primary" @click="value4 = true">编辑抽屉</znv-button>
    <znv-drawer v-model="value4" title="编辑对象" width="720" append-to-body :mask-closable="false">
      <znv-form :model="formInline" ref="form" label-position="top">
        <div flex="box:mean">
            <znv-form-item label="用户名" prop="name" class="mr-15">
              <znv-input v-model="formInline.name" placeholder="用户名"></znv-input>
            </znv-form-item>
            <znv-form-item label="邮箱" prop="mail">
              <znv-input v-model="formInline.mail" placeholder="邮箱"></znv-input>
            </znv-form-item>
        </div>
        <div flex="box:mean">
            <znv-form-item label="用户名" prop="name" class="mr-15">
              <znv-input v-model="formInline.name" placeholder="用户名"></znv-input>
            </znv-form-item>
            <znv-form-item label="邮箱" prop="mail">
              <znv-input v-model="formInline.mail" placeholder="邮箱"></znv-input>
            </znv-form-item>
        </div>
        <div flex="box:mean">
            <znv-form-item label="出生日期" prop="birthday" class="mr-15">
               <znv-date-picker type="date" v-model="formInline.birthday" placeholder="选择出生日期"></znv-date-picker>
            </znv-form-item>
            <znv-form-item label="时间" prop="time">
               <znv-time-picker v-model="formInline.time" placeholder="选择时间"></znv-time-picker>
            </znv-form-item>
        </div>
        <div flex="box:mean">
            <znv-form-item label="城市" prop="city" class="mr-15">
              <znv-select v-model="formInline.city" clearable>
                <znv-option value="beijing" label="北京"></znv-option>
                <znv-option value="shanghai" label="上海"></znv-option>
                <znv-option value="xuzhou" label="徐州"></znv-option> 
              </znv-select>
            </znv-form-item>
            <znv-form-item label="地址" prop="mail">
              <znv-input v-model="formInline.address" placeholder="地址"></znv-input>
            </znv-form-item>
        </div>
        <znv-form-item label="描述" prop="desc">
            <znv-input v-model="formInline.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></znv-input>
        </znv-form-item>
      </znv-form>
      <div slot="footer">
        <znv-button @click="value4 = false">取 消</znv-button>
        <znv-button type="primary" @click="value4 = false">提 交</znv-button>
      </div>
    </znv-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value4:false,
          formInline: {
            name: '',
            mail: '',
            birthday:'',
            time:'',
            city:'',
            address:'',
            desc:''
          }
        }
      }
    }
</script>
```
:::

### 嵌套抽屉

抽屉可以互相嵌套，但一般不推荐这么使用避免层级过多影响用户交互

::: demo 
```html
<template>
    <znv-button type="primary" @click="value5 = true">打开抽屉</znv-button>
    <znv-drawer title="一级抽屉" width="512" append-to-body :closable="false" v-model="value5">
        <znv-button @click="value6 = true" type="primary">打开二层抽屉</znv-button>
    </znv-drawer>
    <znv-drawer title="二级抽屉" :closable="false" v-model="value6" append-to-body >
        这是第二层抽屉
    </znv-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value5:false,
          value6:false
        }
      }
    }
</script>
```
:::

### 可拖拽宽度

可以设置拖拽抽屉

::: demo
```html
<template>
    <znv-button type="primary" @click="value7 = true">open</znv-button>
    <znv-drawer v-model="value7" title="抽屉标题" append-to-body draggable>
      <p>我是抽屉内容</p>
    </znv-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value7:false
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
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |     —       |     —     |
| placement | 方向   | String  |    left/right      |     right    |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  false  |
| width     | 抽屉宽度 | Number  |      —      | 300 |
| footer-hide     | 不显示底部 | Boolean  |      —      | false |
| mask-closable    | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| mask  | 是否有mask遮罩 | Boolean  |      —      | true |
| styles  | 抽屉中间层的样式 | Object  |      —      |  — |
| inner  | 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 append-to-body 属性 | Boolean  |      —      | false |
| draggable  | 是否开启拖拽调整宽度 | Boolean  |      —      |  false |
| before-close  | 关闭前事件,返回 Promise 可以阻止关闭 | Function  |      —      |  — |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close     | 关闭抽屉触发   | 无  |
| on-resize-width   | 调整宽度   | 无  |
| on-visible-change    | 显示状态发生变化时触发   | true / false  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| header    | 自定义页头 |
| close     | 关闭按钮   |
| default     | 抽屉主体内容   |
