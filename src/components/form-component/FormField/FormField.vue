<template>
  <div class="gui-field" :style="{paddingLeft: label?'':'40px'}">
    <div class="gui-field-name" v-if="label">{{label}}</div>
    <div class="gui-field-container" :style="{width: label?'':'100%'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: String
  }
}
</script>
