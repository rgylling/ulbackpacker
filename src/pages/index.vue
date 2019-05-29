<template>

  <v-layout row>
    <v-flex lg12>
      home
    </v-flex>
  </v-layout>

</template>

<script>

export default {
  head () {
    return {
      title: this.title
    }
  },
  data () {
    return {
      email: '',
      password: '',
      title: 'Home'
    }
  },
  methods: {
    async loginUser () {
      try {
        const user = await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
        console.log(user)
      } catch (err) {

      }
    }
  },
  mounted () {
    console.log(this, 'hi')
  }
};
</script>

<style>
</style>
