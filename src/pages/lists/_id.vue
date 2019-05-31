<template>

  <v-layout row>
    <v-flex lg12>
      ieye dee
    </v-flex>
  </v-layout>

</template>

<script>
var convert = require('convert-units')

export default {
  head () {
    return {
      title: this.title
    }
  },
  data () {
    return {
      title: 'Home'
    }
  },
  methods: {
  },
  mounted () {
    window.convert = convert
  }
};
</script>

<style>
</style>
