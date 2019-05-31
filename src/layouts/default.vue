<template>
  <v-app>
    <v-toolbar
      color="transparent"
      class="custom-tool-bar"
      flat
      fixed
      app
      clipped-right
      height="50"
    >
    <v-layout fill-height align-center>
      <v-spacer>
      </v-spacer>
      <v-flex shrink>
        <template v-if="!user">
        <v-btn class="ma-0" color="primary" href small outline>
          Sign-in
        </v-btn>
        <span class="mx-2">or</span>
        <v-btn class="ma-0" color="primary" href small outline>
          Sign-up
        </v-btn>
      </template>
        <template v-else>
          <div>
            <v-menu full-width offset-y min-width="200" open-on-hover class="elevation-0">
              <template v-slot:activator="{ on }">
                <a class="caption" v-on="on">{{ user.email }}<v-icon size="17" color="primary">arrow_drop_down</v-icon></a>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-tile
                >
                  <v-list-tile-title>Log Out</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </template>
        <!-- <v-avatar size="34" class="elevation-1" color="teal">
          <UserIcon color="#17252a" />
        </v-avatar> -->
      </v-flex>
    </v-layout>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon> -->
    </v-toolbar>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      mini-variant
      mini-variant-width="100"

    >
      <div style="border-bottom: solid 1px rgba(23, 37, 42, 0.08)" class="pa-4 ma-1">
        <v-img :src="require('@/assets/test-logo.png')" />
      </div>
      <v-list three-line style="height: 100%">
        <!-- <v-list-tile class="my-4" exact href nuxt :to="{ name: 'index'}">
          <v-flex>
            <v-layout column align-center class="text-xs-center">
              <v-flex>
            <HomeIcon color="17252a"></HomeIcon>
            <div class="font-xs mt-1 text-uppercase">Home</div>
          </v-flex>
            </v-layout>
          </v-flex>
        </v-list-tile> -->
        <v-list-tile class="my-4 testing123" exact href nuxt :to="{ path: '/lists'}">
          <div class="inner">
          <v-flex>
            <v-layout column align-center class="text-xs-center">
              <v-flex>
              <ListIcon color="17252a"></ListIcon>
                <div class="font-xs mt-1 text-uppercase white--text"><span>All Lists</span></div>
          </v-flex>

            </v-layout>
          </v-flex>
          </div>
        </v-list-tile>
        <v-list-tile class="my-4 testing123" exact href nuxt :to="{ path: '/lists/new'}">
          <div class="inner">

          <v-flex>
            <v-layout column align-center class="text-xs-center">
              <v-flex>
              <PlusCircleIcon color="17252a"></PlusCircleIcon>
            <div class="font-xs mt-1 text-uppercase white--text">New List</div>
          </v-flex>
            </v-layout>
          </v-flex>
        </div>
        </v-list-tile>
        <v-list-tile style="position: absolute; bottom: 0; left: 0; right: 0;" class="my-4 testing123" exact href nuxt :to="{ name: 'login'}">
          <div class="inner">

          <v-flex>
            <v-layout column align-center class="text-xs-center">
              <v-flex>
              <LogInIcon color="17252a"></LogInIcon>
            <div class="font-xs mt-1 text-uppercase white--text">Log in</div>
          </v-flex>
            </v-layout>
          </v-flex>
        </div>
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
import { mapState } from 'vuex'
import { HomeIcon, LogInIcon, PlusCircleIcon, UserIcon, ListIcon } from 'vue-feather-icons'
export default {
  components: {
    HomeIcon,
    LogInIcon,
    PlusCircleIcon,
    UserIcon,
    ListIcon
  },
  data () {
    return {
      hover: false,
      drawer: null
    }
  },
  computed: {
    ...mapState('modules/user', ['user'])
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped lang="stylus">
.custom-tool-bar {
  >>>.v-toolbar__content {
    // background-color: rgba(24, 38, 43, 0.91);
  }
}

// .testing123 {
//   box-shadow: inset 0 0 0 0 #31302B;
// -webkit-transition: box-shadow linear 0.3s,color linear 0.3s;
// -moz-transition: box-shadow linear 0.3s,color linear 0.3s;
// transition: box-shadow linear 0.3s,color linear 0.3s;
// box-shadow: inset 0 0 0 0.01px #ffffff;
//
// &:hover {
//   box-shadow: inset 100px 0 0 0.01px #17252a;
//   color: white;
//
// }
// }
.testing123 {
  position: relative
  .inner {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 3;
  }
  &:hover {
    svg {
      color: #3aafa9;
    }
  }
  &:before {
  position: absolute;
  content: " ";
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  transition:.2s ease-out !important;
  z-index:0;
  background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  }
  &:after {
    position: absolute;
    content: " ";
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    transition:.2s ease-out !important;
    z-index:0;
    background-color: rgba(24, 38, 43, 0.91) !important;
  }
  &:hover::after {
    right: 0;
    color: white !important;
  }
  &:hover::before {
    right: 0;
    color: white !important;

  }
}
</style>
