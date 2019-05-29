<template>
  <section>
    <div>
		<nuxt-link to="/about">about</nuxt-link>

      <v-layout>
        <v-flex>
          <v-text-field v-model="email" label="Email">
          </v-text-field>
          <v-text-field v-model="password" label="Password">
          </v-text-field>
          <v-btn @click="loginUser">login</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
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
  }
};
</script>

<style>
</style>
