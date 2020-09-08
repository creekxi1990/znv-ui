import { findComponentUpward, findComponentsUpward } from '../../utils/util'

export default {
  data () {
    return {
      menu: findComponentUpward(this, 'ZnvMenu')
    }
  },
  computed: {
    hasParentSubmenu () {
      return !!findComponentUpward(this, 'ZnvSubmenu')
    },
    parentSubmenuNum () {
      return findComponentsUpward(this, 'ZnvSubmenu').length
    },
    mode () {
      return this.menu.mode
    }
  }
}
