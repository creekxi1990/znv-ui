import Circle from './circle.vue'

/* istanbul ignore next */
Circle.install = function (Vue) {
  Vue.component(Circle.name, Circle)
}

export default Circle
