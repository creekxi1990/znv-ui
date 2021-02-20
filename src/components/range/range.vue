<template>
    <div class="znv-range">
        <znv-icon name="ios-remove" @click.native="onMinus"></znv-icon>
        <znv-slider v-model="valueInt" :min="min" :max="max" :step="step" @on-input="onInput"></znv-slider>
        <znv-icon name="ios-add" @click.native="onPlus"></znv-icon>
    </div>
</template>

<script>
    import ZnvSlider from '../../components/slider'
export default {
    name: 'ZnvRange',
    components: { ZnvSlider },
    props: {
        value: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            valueInt: this.value
        }
    },
    watch: {
        value(v) {
            this.valueInt = v
            this.onInput(v)
        }
    },
    methods: {
        onPlus() {
            let tempVal = this.valueInt
            if (this.value < (this.max - this.step)) {
                tempVal = this.valueInt + this.step
            } else {
                tempVal = this.max
            }
            this.$emit('input', tempVal)
            this.$emit('on-change')
        },
        onMinus() {
             let tempVal = this.valueInt
            if (this.value > (this.min + this.step)) {
                tempVal = this.valueInt - this.step
            } else {
                tempVal = this.min
            }
            this.$emit('input', tempVal)
            this.$emit('on-change')
        },
        onInput(value) {
            this.$emit('input', value)
            this.$emit('on-change')
        }
    }
}
</script>
