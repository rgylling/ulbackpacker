<template>
	<span>
  	<input v-autowidth="options" :type="number ? 'number' : undefined" class="editable clickable" :value="value"
    @input="$emit('input', $event.target.value)" />
	</span>
</template>

<script>

export default {
  props: {
    value: {
      default: null,
      type: [String, Number]
    },
		number: {
			default: false,
			type: Boolean,
			required: false
		},
		minWidth: {
			default: '20px',
			type: [Number, String],
			required: false
		},
		maxWidth: {
			default: '300px',
			type: [Number, String],
			required: false
		}
  },
  data () {
    return {
      title: 'Home',
			options: {
				maxWidth: this.maxWidth,
				minWidth: this.minWidth,
				comfortZone: 0
			}
    }
  },
  methods: {
    update (event){
      this.$emit('input',event.target.value)
    }
  },
  mounted () {
  }
};
</script>

<style lang="stylus" scoped>
.editable:focus {
  outline: none
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
