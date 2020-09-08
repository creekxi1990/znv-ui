## Form 表单

<template>
    <div class="global-anchor">
      <znv-anchor :scroll-offset="100">
        <znv-anchor-link href="#xing-nei-biao-dan" title="行内表单"></znv-anchor-link>
        <znv-anchor-link href="#biao-dan-tou-dui-qi-fang-shi" title="表单头对齐方式"></znv-anchor-link>
        <znv-anchor-link href="#ji-ben-xiao-yan" title="基本校验"></znv-anchor-link>
        <znv-anchor-link href="#dan-ge-yuan-su-de-xiao-yan" title="单个元素的校验"></znv-anchor-link>
        <znv-anchor-link href="#attributes" title="Attributes"></znv-anchor-link>
        <znv-anchor-link href="#methods" title="Methods"></znv-anchor-link>
        <znv-anchor-link href="#formitem-props" title="FormItem props"></znv-anchor-link>
      </znv-anchor>
    </div>
</template>

具有校验和提交功能的表单，暂时只包含输入框，单选，多选，文本域 ，开关组件，后期完善。

### 行内表单

::: demo
```html
<template>
  <div style="width:600px;">
      <znv-form :model="formInline" ref="form" :rules="ruleValidate" inline>
        <znv-form-item prop="name">
          <znv-input v-model="formInline.name" placeholder="用户名"></znv-input>
        </znv-form-item>
        <znv-form-item prop="mail">
          <znv-input v-model="formInline.mail" placeholder="邮箱"></znv-input>
        </znv-form-item>
      </znv-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>
```
:::

### 表单头对齐方式

设置 label-position 可以设置表单头的对齐方式 可选top left right，并可设置label-width宽度

::: demo
```html
<template>
  <div style="width:500px;">  
    <div class="mb-10">表头对其方式：
      <znv-radio-group v-model="type" style="display: inline-block;">
        <znv-radio label="top">top</znv-radio>
        <znv-radio label="left">left</znv-radio>
        <znv-radio label="right">right</znv-radio>
      </znv-radio-group>
    </div>
      <znv-form :model="formInline" ref="form" :label-position="type" :label-width="labelWidth">
        <znv-form-item label="用户名" prop="name">
          <znv-input v-model="formInline.name" placeholder="用户名"></znv-input>
        </znv-form-item>
        <znv-form-item label="邮箱" prop="mail">
          <znv-input v-model="formInline.mail" placeholder="邮箱"></znv-input>
        </znv-form-item>
      </znv-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        type: 'top',
        formInline: {
          name: '',
          mail: ''
        }
      }
    },
    computed:{
      labelWidth(){
        return this.type==='top' ? null : 80
      }
    } 
  }
</script>
```
:::

### 基本校验

::: demo
```html
<template>
  <div style="width:600px;">
      <znv-form :model="formValidate" ref="form" :rules="ruleValidate" :label-width="100">
        <znv-form-item label="用户名" prop="name">
          <znv-input v-model="formValidate.name"></znv-input>
        </znv-form-item>
        <znv-form-item label="邮箱" prop="mail">
          <znv-input v-model="formValidate.mail"></znv-input>
        </znv-form-item>
        <znv-form-item label="年龄" prop="age">
          <znv-input-number v-model="formValidate.age"></znv-input-number>
        </znv-form-item>
        <znv-form-item label="进度" prop="jindu">
          <znv-slider v-model="formValidate.jindu"></znv-slider>
        </znv-form-item>
        <znv-form-item label="性别" prop="gender">
            <znv-radio-group v-model="formValidate.gender">
                <znv-radio label="male">男</znv-radio>
                <znv-radio label="female">女</znv-radio>
            </znv-radio-group>
        </znv-form-item>
        <div flex="box:mean">
          <div>
            <znv-form-item label="出生日期" prop="birthday">
               <znv-date-picker type="date" v-model="formValidate.birthday" placeholder="选择出生日期"></znv-date-picker>
            </znv-form-item>
          </div>
          <div>
            <znv-form-item label="时间" prop="time">
               <znv-time-picker v-model="formValidate.time" placeholder="选择时间"></znv-time-picker>
            </znv-form-item>
          </div>
        </div>
        <div flex="box:mean">
            <znv-form-item label="城市" prop="city">
              <znv-select v-model="formValidate.city" clearable multiple>
                <znv-option value="beijing" label="北京"></znv-option>
                <znv-option value="shanghai" label="上海"></znv-option>
                <znv-option value="xuzhou" label="徐州"></znv-option> 
              </znv-select>
            </znv-form-item>
            <znv-form-item label="地区" prop="cities">
              <znv-cascader :data="cities" v-model="formValidate.cities"></znv-cascader>
            </znv-form-item>
        </div>
        <znv-form-item label="爱好" prop="interest">
            <znv-checkbox-group v-model="formValidate.interest">
                <znv-checkbox label="Eat"></znv-checkbox>
                <znv-checkbox label="Sleep"></znv-checkbox>
                <znv-checkbox label="Run"></znv-checkbox>
                <znv-checkbox label="Movie"></znv-checkbox>
            </znv-checkbox-group>
        </znv-form-item>
        <znv-form-item label="描述" prop="desc">
            <znv-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></znv-input>
        </znv-form-item>
        <znv-form-item>
            <znv-button @click="handleSubmit" type="primary">提 交</znv-button>
            <znv-button @click="handleReset">重 置</znv-button>
        </znv-form-item>
      </znv-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          age: 0,
          jindu: 30,
          gender: '',
          birthday:'',
          time: '',
          city:'',   
          cities:[],  
          interest:[],  
          desc:''
        },
        cities: [
             {
               value: 'nanjing',
               label: '南京',
               children: [
                   {
                       value: 'xuanwu',
                       label: '玄武区'
                   },
                   {
                       value: 'gulou',
                       label: '鼓楼区'
                   },
                   {
                       value: 'jianye',
                       label: '建邺区'
                   }
               ]
             },
             {
               value: 'xuzhou',
               label: '徐州',
               children: [
                   {
                       value: 'tongshan',
                       label: '铜山区'
                   },
                   {
                       value: 'gulou',
                       label: '鼓楼区'
                   },
                   {
                       value: 'yunlong',
                       label: '云龙区'
                   },
                   {
                       value: 'jiawang',
                       label: '贾汪区'
                   }
               ]
             }
         ],
        ruleValidate: {
           name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
           mail: [
             { required: true, message: '邮箱不能为空', trigger: 'blur' },
             { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
           ],
           age: [ { required: true, type:'number', message: '年龄必填', trigger: 'change' },
                  { min:18,max:35, type:'number', message: '年龄必须满18周岁，不大于35岁', trigger: 'change' }],
           jindu: [ { min:40, type:'number', message: '进度范围不能低于40%', trigger: 'change' }],
           gender: [ { required: true, message: '请选择性别', trigger: 'change' }],
           birthday: [{ required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }],
           time: [{ required: true, type: 'string', message: '选择时间', trigger: 'change' }],
           city: [ { required: true, message: '请选择城市', trigger: 'change' }],
           cities: [ { required: true, type: 'array', message: '请选择所在地区', trigger: 'change' }],
           interest: [
             { required: true, type: 'array', min: 1, message: '请选择爱好', trigger: 'change' },
             { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
           ],
           desc: [
             { required: true, message: '描述必填', trigger: 'blur' },
             { type: 'string', min: 20, message: '描述不能少于20个字符', trigger: 'blur' }
           ]
         }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message({type:'success',content:'表单校验成功'});
          } else {
            this.$message({type:'danger',content:'表单校验失败'});
          }
        })
      },
      handleReset () {
       this.$refs.form.resetFields();
      }
    }
  }
</script>
```
:::

### 单个元素的校验

::: demo
```html
<template>
  <div style="width:400px;">
      <znv-form :model="formValidate2" ref="form2"  :label-width="80">
        <znv-form-item label="用户名" prop="name" :rules=" { required: true, message: '用户名不能为空', trigger: 'blur' }">
          <znv-input v-model="formValidate2.name"></znv-input>
        </znv-form-item>
        <znv-form-item label="邮箱" prop="mail">
          <znv-input v-model="formValidate2.mail"></znv-input>
        </znv-form-item>
      </znv-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate2: {
          name: '',
          mail: ''
        }
      }
    }
  }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model     | 表单数据对象   | Object  |  —   |   —   |
| rules     | 表单验证规则，具体配置查看 https://github.com/yiminghe/async-validator   | Object  |  —   |   —   |
| inline     | 是否开启行内表单模式   | Boolean  |  —   |  false  |
| label-position     | 表单域标签的位置   | String  |  left、right、top   |  right  |
| label-width    | 表单域标签的宽度   | Number  |   —    |  —   |
| show-message   | 是否显示校验错误信息   | Boolean  |   —    |  false  |

### Methods

| 参数      | 说明    | 返回值   |
|---------- |-------- |---------- |
| validate     | 对整个表单进行校验   | callback  |
| validateField     | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息   | callback  |
| resetFields     | 对整个表单进行重置，将所有字段值重置为空并移除校验结果   | 无  |

### FormItem props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| prop     | 对应表单域 model 里的字段   | String  |  —   |   —   |
| label     | 标签文本  | String  |  —   |   —   |
| label-width     | 表单域标签的的宽度   | Number  |  —   |  —    |
| required    | 是否必填，如不设置，则会根据校验规则自动生成   | Boolean  |   —   |  —   |
| rules    | 表单验证规则  | Object / Array  |   —    |  —   |
| error   | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息   | Boolean  |   —    |   —   |
| show-message    | 是否显示校验错误信息  | Boolean	 |   —    |  true  |
