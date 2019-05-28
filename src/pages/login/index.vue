<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-text-field v-model="email" label="email" />
    <v-text-field v-model="password" label="password" />
    <v-btn @click="createUser">
      create user
    </v-btn>
  </v-layout>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    return console.log(this)
  },
  methods: {
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
