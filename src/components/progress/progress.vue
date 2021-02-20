<template>
  <div
          :class="[
      'znv-progress',
      status ? 'progress-' + status : '',
      {
        'znv-progress-text': !showText,
        'znv-progress-text-inside': textInside,
      }
    ]"
          role="progressbar"
          :aria-valuenow="percent"
          aria-valuemin="0"
          aria-valuemax="100"
  >
    <div class="znv-progress-bar" :class="{'is-active': active}">
      <div class="znv-progress-bar__outer" :style="barOutStyle">
        <div class="znv-progress-bar__inner" :style="barStyle">
          <div class="znv-progress-bar__innerText" v-if="showText && textInside" :style="{color: textColor, fontSize: progressTextSize + 'px', fontWeight: fontWeight}">{{percent}}%</div>
        </div>
      </div>
    </div>
    <div class="znv-progress__text" v-if="showText && !textInside" :style="{fontSize: progressTextSize + 'px', color: textColor, fontWeight: fontWeight, lineHeight: strokeWidth + 'px',position: 'absolute', right: '0px'}">
      <template v-if="!status">{{percent}}%</template>
      <template v-else>
        <slot v-if="status === 'text'"></slot>
        <znv-icon v-else :name="iconClass"></znv-icon>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ZnvProgress',
    props: {
      percent: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      status: {
        type: String,
        validator: val => ['text', 'success', 'exception'].indexOf(val) > -1
      },
      strokeWidth: Number,
      textInside: {
        type: Boolean,
        default: false
      },
      showText: {
        type: Boolean,
        default: true
      },
      bgColor: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      radius: Number,
      active: Boolean,
      textColor: {
        type: String,
        default: ''
      },
      fontWeight: {
        type: String,
        default: 'normal'
      }
    },
    computed: {
      barOutStyle () {
        return {
          height: this.strokeWidth + 'px',
          borderRadius: this.radius + 'px',
          background: this.bgColor
        }
      },
      barStyle () {
        const style = {}
        style.width = this.percent + '%'
        if (this.color.indexOf('gradient') > -1) {
          style.background = this.color
        } else {
          style.backgroundColor = this.color
        }
        style.borderRadius = this.radius + 'px'
        return style
      },
      iconClass () {
        return this.status === 'success' ? 'ios-checkmark-circle' : 'ios-close-circle'
      },
      progressTextSize () {
        let size = 12 + this.strokeWidth * 0.4
        return size
      }
    }
  }
</script>
