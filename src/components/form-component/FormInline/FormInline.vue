<template>
  <div class="form-inline">
    <div class="label">{{label}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormInline',
  props: {
    label: String
  }
}
</script>
