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
                <template v-if="!user">
                  <v-text-field v-model="email" label="Email">
                  </v-text-field>
                  <v-text-field v-model="password" label="Password">
                  </v-text-field>
                  <v-btn @click="submit">login</v-btn>
                </template>
                <template v-else>
                  <div class="text-xs-center">
                    <v-layout>
                      <v-flex>
                        <h1 class="font-weight-light">Welcome</h1>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <h3 class="font-weight-light">{{ user.email }}!</h3>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                    <v-btn>
                      Create a list
                    </v-btn>
                    </v-flex>
                  </v-layout>
                  </div>
                </template>
              </v-card-text>
            </v-flex>
          </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  computed: {
    ...mapState('modules/user', ['user'])
  },
  methods: {
    ...mapActions('modules/user', [
      'login'
    ]),
    submit () {
      console.log(this.email, this.password)
      this.$fireAuth.signInWithEmailAndPassword(this.email, this.password).then((firebaseUser) => {
        console.log(firebaseUser)
        return this.login(firebaseUser.user)
      }).then(() => {
        console.log('then')
        // this.$router.push('/protected')
      }).catch((error) => {
        console.log('catch')

        console.log(error.message)
      })
    },
    async fbGoogleLogin() {
      const { user } = await this.$fireAuth.signInWithPopup(googleProvider)
      await this.login(user)
      // this.$router.push('/protected')
    },
    async fbGoogleLogout() {
      await this.logout()
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
