<template>
  <div class="znv-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ZnvBreadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorIcon: {
        type: String,
        default: ''
      }
    },
    provide () {
      return {
        bBreadcrumb: this
      }
    },
    mounted () {
      const items = this.$el.querySelectorAll('.znv-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    }
  }
</script>
