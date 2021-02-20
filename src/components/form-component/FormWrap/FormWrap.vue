<template>
  <div class="gui-wrap" :class="{'disable':!visible && !simple}">
    <div class="wrap-name" @click="simpleToggle">
       <span class="wrap-arrow" :class="[{'show':open && visible},{'simple':simple}]">
          <znv-icon name="ios-arrow-forward" size="16"></znv-icon>
       </span>
      <span class="wrap-label">{{label}}</span>
      <span class="wrap-toggle" @click="toggleVisible" v-if="!simple">
        <znv-icon :name="visible?'ios-eye':'ios-eye-off'" size="18"></znv-icon>
      </span>
    </div>
    <collapse-transition>
      <div v-if="visible && open" class="wrap-collapse">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>

import CollapseTransition from '../../base/collapse-transition'

export default {
  name: 'FormWrap',
  components: { CollapseTransition },
  props: {
    label: String,
    value: {
      type: Boolean,
      default: true
    },
    simple: Boolean
  },
  data () {
    return {
      visible: this.value,
      open: false
    }
  },
  methods: {
    toggleVisible (e) {
      this.visible = !this.visible
      if (!this.visible) this.open = false
      this.$emit('input', this.visible)
      this.$emit('on-change', this.visible)
    },
    simpleToggle () {
      if (!this.visible) return
      this.open = !this.open
    }
  },
  watch: {
    value () {
      this.visible = this.value
    }
  }
}
</script>
