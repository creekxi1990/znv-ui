<template>
  <div :class="[prefixCls + '-confirm']" @keydown.tab.capture="handleTab">
    <znv-button :class="timeClasses" size="mini" type="text" :disabled="timeDisabled" v-if="showTime"
              @click="handleToggleTime">
      {{this.isTime ? '选择日期' : '选择时间'}}
    </znv-button>
    <znv-button size="mini" @click="handleClear" @keydown.enter.native="handleClear">
      清空
    </znv-button>
    <znv-button size="mini" type="primary" @click="handleSuccess" @keydown.enter.native="handleSuccess">
      确定
    </znv-button>
  </div>
</template>
<script>
  import ZnvButton from '../../button/button.vue'
  import Emitter from '../../../mixins/emitter'

  const prefixCls = 'znv-picker'

  export default {
    mixins: [Emitter],
    components: { ZnvButton },
    props: {
      showTime: Boolean,
      isTime: Boolean,
      timeDisabled: Boolean
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      timeClasses () {
        return `${prefixCls}-confirm-time`
      }
    },
    methods: {
      handleClear () {
        this.$emit('on-pick-clear')
      },
      handleSuccess () {
        this.$emit('on-pick-success')
      },
      handleToggleTime () {
        if (this.timeDisabled) return
        this.$emit('on-pick-toggle-time')
        this.dispatch('ZnvDatePicker', 'focus-input')
        this.dispatch('ZnvDatePicker', 'update-popper')
      },
      handleTab (e) {
        const tabbables = [...this.$el.children]
        const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']()

        if (document.activeElement === expectedFocus) {
          e.preventDefault()
          e.stopPropagation()
          this.dispatch('ZnvDatePicker', 'focus-input')
        }
      }
    }
  }
</script>
