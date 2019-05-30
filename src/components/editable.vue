<template>
  <span class="editable clickable" contenteditable="true" @input="update"></span>
</template>

<script>

export default {
  props: {
    content: {
      default: null,
      type: String
    }
  },
  data () {
    return {
      title: 'Home'
    }
  },
  methods: {
    update:function(event){
      this.$emit('update',event.target.innerText)
    }
  },
  mounted () {
    this.$el.innerText = this.content
  }
};
</script>

<style lang="stylus" scoped>
.editable:focus {
  outline: none
}
</style>
