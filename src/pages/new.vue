<template>
	<div>
    <v-layout row wrap>
      <v-flex lg12>
		  <v-btn @click="writeToFirestore">
			  clicky
		  </v-btn>
		  <span v-if="writeSuccessful">
			  success
		  </span>
        <v-data-iterator
          :items="items"
          hide-actions
          content-tag="v-layout"
          row
          wrap
        >
          <template v-slot:item="props">
            <v-flex
              xs12
              sm6
              md4
              lg3
            >
              <v-card flat>
                <v-card-title>
                  <h1 class="font-weight-light">{{ props.item.name }}</h1>
                </v-card-title>
                <v-list dense>
                <v-list-tile
                >

                <v-list-tile-content>
                <v-list-tile-title>Calories</v-list-tile-title>
                <v-list-tile-sub-title>some description</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  {{props.item.calories}}
                </v-list-tile-action>
                </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </template>
        </v-data-iterator>
      </v-flex>
    </v-layout>
	<v-navigation-drawer
	v-model="drawer"
	right
	clipped
	app
	class="custom-nav-drawer"
		>
		<v-layout fill-height>
		<v-flex style="background-color: rgba(24, 38, 43, 0.91)" fill-height>
			<v-text-field label="test">
			</v-text-field>
		</v-flex>
	</v-layout>
		</v-navigation-drawer>
	</div>
</template>

<script>

export default {
  head () {
    return {
      title: this.title
    }
  },
  data: () => ({
    title: 'New',
	writeSuccessful: false,
	drawer: true,
    items: [
      {
        name: 'Base',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        name: 'Consumables',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        name: 'Worn',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      }
    ]
}),
methods: {
	async writeToFirestore() {

	  const ref = this.$fireStore.collection("gearList")

	  try {
		await ref.add({
		    title: 'base',
			items: [
				{
					name: 'gloves',
					description: 'some cool description here',
					weight: '.8',
					measurement: 'oz'
				}
			]
		})
	  } catch (e) {
		// TODO: error handling
		console.error(e)
	  }
	  this.writeSuccessful = true
	  this.readFromFirestore()
  },
  async readFromFirestore() {
  const messageRef = this.$fireStore.collection('gearList')
  try {
    const messageDoc = await messageRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
    });
	})
  } catch (e) {
  alert(e)
  return
  }
}
  }
}
</script>

<style lang="stylus" scoped>
.custom-nav-drawer {
	background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
	background-size: cover
}

</style>
