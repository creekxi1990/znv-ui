<template>
  <span class="znv-breadcrumb__item">
    <span
      :class="['znv-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorIcon" class="znv-separator icon" :class="['iconfont','icon-'+separatorIcon]"></i>
    <span v-else class="znv-separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'ZnvBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data () {
      return {
        separator: '',
        separatorIcon: ''
      }
    },
    inject: ['bBreadcrumb'],
    mounted () {
      this.separator = this.bBreadcrumb.separator
      this.separatorIcon = this.bBreadcrumb.separatorIcon
      const link = this.$refs.link
      link.setAttribute('role', 'link')
      link.addEventListener('click', () => {
        const { to, $router } = this
        if (!to || !$router) return
        this.replace ? $router.replace(to) : $router.push(to)
      })
    }
  }
</script>
