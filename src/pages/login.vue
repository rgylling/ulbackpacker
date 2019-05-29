<template>
  <v-layout justify-center align-center>
    <v-flex lg6>
      <v-card flat height="400px">
          <v-layout fill-height align-center justify-center>
            <v-flex class="pa-0" lg6 fill-height style="background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); background-size: cover">
              <div style="background-color: rgba(24, 38, 43, 0.91); height: 100%">
                inner
              </div>
            </v-flex>
            <v-flex lg6>
              <v-card-text>
                <v-text-field v-model="email" label="Email">
                </v-text-field>
                <v-text-field v-model="password" label="Password">
                </v-text-field>
                <v-btn @click="loginUser">login</v-btn>
              </v-card-text>
            </v-flex>
          </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
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
