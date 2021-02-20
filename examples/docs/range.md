## Range 
## 基础用法

原生滚动相对于window窗口固定，也可以结合scrollbar进行配置

::: demo
```html
<template>
    <znv-range v-model="scalePercent" :min="18" :max="175"  :step="1" @on-change="onChange"></znv-range>
</template>
<script>
    export default {
        data () {
            return {
                scalePercent: 20
            }       
        }, 
        methods: {
            onChange (status) {
                console.log(`Status: ${status}`);
            }
        }
    }
</script>
```
:::
