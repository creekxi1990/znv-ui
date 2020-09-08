<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
  const prefixCls = 'znv-timeline'

  export default {
    name: 'ZnvTimeline',
    props: {
      pending: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-pending`]: this.pending
          }
        ]
      }
    }
  }
</script>
