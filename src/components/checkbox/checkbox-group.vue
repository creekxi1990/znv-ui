<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import { oneOf, findComponentsDownward } from '../../utils/util'

  import Emitter from '../../mixins/emitter'

  const prefixCls = 'znv-checkbox-group'

  export default {
    name: 'ZnvCheckboxGroup',
    mixins: [Emitter],
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        },
        default: 'default'
      }
    },
    data () {
      return {
        currentValue: this.value,
        children: []
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`znv-checkbox-${this.size}`]: !!this.size
          }
        ]
      }
    },
    mounted () {
      this.updateModel(true)
    },
    methods: {
      updateModel (update) {
        this.children = findComponentsDownward(this, 'ZnvCheckbox')
        if (this.children) {
          const { value } = this
          this.children.forEach(child => {
            child.model = value

            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0
              child.group = true
            }
          })
        }
      },
      change (data) {
        this.currentValue = data
        this.$emit('input', data)
        this.$emit('on-change', data)
        this.dispatch('ZnvFormItem', 'on-form-change', data)
      }
    },
    watch: {
      value () {
        this.updateModel(true)
      }
    }
  }
</script>
