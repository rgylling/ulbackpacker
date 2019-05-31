<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      mini-variant
      mini-variant-width="80"

    >
      <v-list three-line>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-img :src="require('@/assets/test-logo.png')" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile exact href nuxt :to="{ name: 'index'}">
          <v-list-tile-action>
            <HomeIcon color="17252a"></HomeIcon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile exact href nuxt :to="{ name: 'login'}">
          <v-list-tile-action>
            <LogInIcon color="17252a"></LogInIcon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile exact href nuxt :to="{ name: 'new'}">
          <v-list-tile-action>
            <PlusSquareIcon color="17252a"></PlusSquareIcon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container grid-list-xl style="max-width: 1344px">
        <!-- <v-layout v-if="$route && $route.name && $route.name != 'index'">
          <v-flex>
            <div class="my-3"><h1 class="font-weight-regular text-uppercase" style="color: #4a4a4a">{{$route.name}}</h1></div>
          </v-flex>
        </v-layout> -->
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { HomeIcon, LogInIcon, PlusSquareIcon } from 'vue-feather-icons'
export default {
  components: {
    HomeIcon,
    LogInIcon,
    PlusSquareIcon
  },
  data () {
    return {
      drawer: null
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style>

</style>
