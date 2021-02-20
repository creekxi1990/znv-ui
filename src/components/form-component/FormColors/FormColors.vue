<template>
  <div class="gui-color">
    <znv-radio-group v-if="isMultiColor" class="mb10" v-model="colorType">
      <znv-radio :label="0">
        <span>常规颜色</span>
      </znv-radio>
      <znv-radio :label="1">
        <span>渐变颜色</span>
      </znv-radio>
    </znv-radio-group>
    <template v-if="colorType===0 || !isMultiColor">
      <znv-input class="mr5" v-model="colorValue"></znv-input>
      <znv-color-picker v-model="colorValue" :alpha="alpha" :recommend="recommend"></znv-color-picker>
    </template>
    <template v-else>
      <div v-for="(colorTemp,index) in colorList" :key="index" class="color-list">
        <div class="icon-content">
          <znv-icon name="ios-remove-circle-outline" v-if="index>1" @click.native="deleteColor(index)"></znv-icon>
          <znv-icon name="ios-add-circle-outline" @click.native="addColor(index)"></znv-icon>
        </div>
        <znv-input-number v-model="colorTemp.offset" :min="0" :max="1" :step="0.1" size="small"></znv-input-number>
        <znv-input class="mr5" v-model="colorTemp.color"></znv-input>
        <znv-color-picker v-model="colorTemp.color" :alpha="alpha" :recommend="recommend" :format="format"></znv-color-picker>
      </div>
      <form-field label="渐变类型" class="mb10">
        <znv-select v-model="gradientType" size="small">
          <znv-option v-for="(item,index) in gradientTypeList" :label="item.label" :value="item.value"
                      :key="index"></znv-option>
        </znv-select>
      </form-field>
      <form-field label="渐变角度">
        <znv-input-number v-model="gradientAngle" :min="-360" :max="360" :step="1" size="small"></znv-input-number>
      </form-field>
    </template>
  </div>
</template>

<script>
import FormField from '../FormField/FormField'

export default {
  name: 'FormColor',
  components: { FormField },
  props: {
    value: [String, Object],
    alpha: {
      type: Boolean,
      default: true
    },
    format: {
      type: String
    },
    recommend: {
      type: Boolean,
      default: false
    },
    // 颜色类型，渐变的时候需要用到 echarts：图表渐变, 其他返回 linear-gradient
    dataType: {
      type: String
    },
    // 是否需要常规颜色与渐变颜色之间切换
    isMultiColor: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      colorValue: this.value,
      colorList: [
        {
          color: '#1f262f',
          offset: 0
        },
        {
          color: '#1f262f',
          offset: 1
        }
      ],
      gradientType: 'linear', // linear  radial
      colorType: 0, // 0 常规 1 渐变
      gradientTypeList: [
        {
          label: '线性渐变',
          value: 'linear'
        },
        {
          label: '径向渐变',
          value: 'radial'
        }
      ],
      gradientAngle: 0
    }
  },
  methods: {
    deleteColor (index) {
      this.colorList.splice(index, 1)
    },
    addColor (index) {
      this.colorList.splice(index + 1, 0, {
        color: this.colorList[index].color,
        offset: this.colorList[index].offset
      })
    },
    // 颜色转成属性值
    color2Value () {
      if (this.dataType === 'echarts') {
        this.colorValue = {
          type: this.gradientType,
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: this.colorList
        }
      } else if (this.dataType === 'echartsHorizon') {
        this.colorValue = {
          type: this.gradientType,
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: this.colorList
        }
      } else {
        let colorTemp = this.gradientType === 'linear' ? `linear-gradient(${this.gradientAngle}deg,` : 'radial-gradient(circle,'
        const colorArr = []
        this.colorList.forEach(item => {
          colorArr.push(`${item.color} ${item.offset * 100}%`)
        })
        colorTemp += colorArr.join(',') + ')'
        this.colorValue = colorTemp
      }
    },
    // 属性值转成颜色
    value2Color (v) {
      this.colorType = 1
      let colorListTemp = []
      if (typeof v === 'string') {
        this.gradientType = v.split('-')[0]
        const stringTemp = this.getStr1(v)
        this.gradientAngle = parseInt(stringTemp.substring(0, stringTemp.indexOf('deg'))) || 0
        const stringTemp2 = this.getStr2(stringTemp)
        stringTemp2.forEach(item => {
          const colorTemp = item.substring(1).split(' ')
          colorListTemp.push({
            color: colorTemp[0],
            offset: parseInt(colorTemp[1]) / 100
          })
        })
      } else if (typeof v === 'object') {
        this.gradientType = v.type
        colorListTemp = v.colorStops
      }
      this.colorList = colorListTemp
    },
    // 取出小括号内的内容
    getStr1 (text) {
      const index1 = text.indexOf('(')
      const index2 = text.lastIndexOf(')')
      return text.substring(index1 + 1, index2)
    },
    // 取出%与,之间的字符串
    getStr2 (text) {
      let result = ''
      const regex = /,(.+?)(?=%)/g
      result = text.match(regex)
      return result
    }
  },
  computed: {
    colorListData () {
      return JSON.parse(JSON.stringify(this.colorList))
    }
  },
  watch: {
    colorValue (v) {
      this.$emit('input', v)
      this.$emit('on-change', v)
    },
    value: {
      handler (v) {
        if (!v) return
        if (typeof v === 'object' || v.indexOf('gradient') > -1) {
          this.value2Color(v)
        } else {
          this.colorValue = v
        }
      },
      deep: true,
      immediate: true
    },
    colorListData: {
      handler (v, oldV) {
        if (JSON.stringify(v) !== JSON.stringify(oldV)) {
          this.color2Value()
        }
      },
      deep: true
    },
    gradientType () {
      this.color2Value()
    },
    gradientAngle () {
      this.color2Value()
    }
  }
}
</script>
<style lang="scss" scoped>
  .gui-color {
    .znv-input-wrapper {
      width: calc(100% - 55px);
    }

    .color-list {
      margin-left: -45px;
      margin-bottom: 10px;
      display: inline-table;

      .icon-content {
        width: 46px;
        line-height: 28px;
        float: left;
        text-align: right;
      }

      i {
        color: #3E495D;
        font-size: 18px;
        margin-right: 5px;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }

      .znv-input-number {
        width: 60px;
        margin-right: 5px;
      }

      .znv-input-wrapper {
        width: calc(100% - 166px);
      }
    }

    .gui-field {
      padding: 0;

      /deep/ .gui-field-container {
        width: 155px;
      }
    }
  }
</style>
