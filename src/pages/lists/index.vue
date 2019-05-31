<template>

  <v-layout row>
    <v-flex lg12>
      <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
      <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
      <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>

      <v-tour name="myTour" :steps="steps">
        <template slot-scope="tour">
          <transition name="fade">
            <v-step
              v-if="tour.currentStep === index"
              v-for="(step, index) of tour.steps"
              :key="index"
              :step="step"
              :previous-step="tour.previousStep"
              :next-step="tour.nextStep"
              :stop="tour.stop"
              :is-first="tour.isFirst"
              :is-last="tour.isLast"
              :labels="tour.labels"
            >
              <template v-if="tour.currentStep === 2">
                <div slot="actions">
                  <button @click="tour.previousStep" class="btn btn-primary">Previous step</button>
                  <button @click="tour.nextStep" class="btn btn-primary">Next step</button>
                </div>
              </template>
            </v-step>
          </transition>
        </template>
      </v-tour>
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
      title: 'Home',
      steps: [
  {
    target: '#v-step-0',  // We're using document.querySelector() under the hood
    content: `Discover <strong>Vue Tour</strong>!`
  },
  {
    target: '.v-step-1',
    content: 'An awesome plugin made with Vue.js!'
  },
  {
    target: '[data-v-step="2"]',
    content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
    params: {
      placement: 'top'
    }
  }
]
    }
  },
  methods: {
  },
  mounted () {
    this.$tours['myTour'].start()

  }
};
</script>

<style>
</style>
