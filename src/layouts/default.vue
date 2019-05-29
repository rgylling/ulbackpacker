<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      mini-variant
      mini-variant-width="80"

    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <HomeIcon></HomeIcon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <LogInIcon></LogInIcon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar> -->
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-footer color="indigo" app inset>
      <span class="white--text">&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { HomeIcon, LogInIcon } from 'vue-feather-icons'
export default {
  components: {
    HomeIcon,
    LogInIcon
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>

</style>
