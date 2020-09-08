<template>
  <li :class="classes">
    {{ data.label }}
    <znv-icon name="ios-arrow-forward" v-if="showArrow"></znv-icon>
    <znv-icon v-if="showLoading" name="loading" class="znv-cascade-menu-item-loading"></znv-icon>
  </li>
</template>
<script>
  export default {
    name: 'CasItem',
    props: {
      data: Object,
      prefixCls: String,
      tmpItem: Object
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-menu-item`,
          {
            [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
            [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
          }
        ]
      },
      showArrow () {
        return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading)
      },
      showLoading () {
        return 'loading' in this.data && this.data.loading
      }
    }
  }
</script>
