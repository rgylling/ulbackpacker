<template>
<div>
  <v-layout row wrap>
    <v-flex lg12>
      <!-- <v-btn @click="addNewList">
        Add new list
      </v-btn> -->
      <v-data-iterator :items="(lists)" hide-actions content-tag="div">
        <template v-slot:item="props">
          <v-layout row nowrap>
            <v-flex align-center class="d-flex" lg3>
              <div>
                <h1 class="font-weight-light">
									<editable :content="props.item.listName" @update="props.item.listName = $event"></editable>
                </h1>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <template v-for="(item, index) in props.item.gear">
              <v-flex xs12 sm6 md4 lg6>
                <v-card>
                  <v-card-title>
										<v-layout row>
											<v-flex>
												<h2 class="font-weight-light">
													<editable :content=" item.categoryName" @update="item.categoryName = $event"></editable>
												</h2>
											</v-flex>
										</v-layout>
                  </v-card-title>
									<v-card-text>
                  <v-list three-line>
                    <template v-for="i in item.items">
                      <v-list-tile avatar>
												<v-list-tile-avatar size="40">
													<h2 class="display-3 font-weight-medium">
                            <editable :content="i.quantity" @update="i.quantity = $event"></editable>
                          </h2>
												</v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>
														<editable :content="i.name" @update="i.name = $event"></editable>
													</v-list-tile-title>
                          <v-list-tile-sub-title>
														<editable :content="i.description" @update="i.description = $event"></editable>
													</v-list-tile-sub-title>
                          <v-list-tile-sub-title>
                          <a>link</a>
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
													<v-layout class="headline">
                            <v-flex class="d-flex">
                              <editable :content="i.weight" @update="i.weight = $event"></editable>
                              <v-select v-model="i.uom" solo flat class="pa-0 ma-0 custom-select" hide-details style="width: 50px" :items="['OZ', 'KG', 'LB']">
                              </v-select>
                            </v-flex>
                          </v-layout>
                          <!-- <v-select style="width: 50px" :items="['oz', 'kg', 'lb']">
                          </v-select> -->
                        </v-list-tile-action>
                      </v-list-tile>
											<v-divider inset>
											</v-divider>
                    </template>
                  </v-list>
								</v-card-text>
								<v-card-actions>
									<v-spacer>
									</v-spacer>
									<v-flex shrink>
										<v-btn
											fab
											small
											bottom
											dark
											color="secondary"
											right
											@click="addNewGear(props.index ,index)"
										>
											<v-icon>add</v-icon>
										</v-btn>
									</v-flex>
								</v-card-actions>
                </v-card>
              </v-flex>
            </template>
						<v-flex lg4>
							<v-card tag="a" class="custom-nav-drawer" height="100%" @click="addNewCategory">
								<v-card-text class="fill-height text-xs-center d-flex column align-center justify-center white--text" style="background-color: rgba(24, 38, 43, 0.91)">
									<div>
										<h2 class="font-weight-light mb-2">New Category</h2>
										<div class=""><PlusSquareIcon width="50px" height="50px" color="rgba(255, 255, 255, 0.5)"></PlusSquareIcon></div>
									</div>
								</v-card-text>
							</v-card>
						</v-flex>
          </v-layout>
        </template>
      </v-data-iterator>
    </v-flex>
		<v-btn @click="writeToFirestore">Save</v-btn>
		<v-btn @click="getAllTest">Git all</v-btn>

  </v-layout>
  <!-- <v-navigation-drawer v-model="drawer" right clipped app class="custom-nav-drawer">
    <v-layout fill-height>
      <v-flex style="background-color: rgba(24, 38, 43, 0.91)" fill-height>
        <v-text-field label="test">
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-navigation-drawer> -->
</div>
</template>

<script>
// Data structure should look something like this I am imagining
// var gearList =
//   [
//     {
//       uid: '123kdijdsidj' || null <-- guest user
//       listName: 'list',
//       gear:
//       [
//         {
//           categeoryName: 'Base',
//           items: [
//             {
//               name: 'pants',
//               description: 'some description',
//               weight: '.08',
//               uom: 'oz',
//							link: ''
//             }
//           ]
//         }
//       ]
//     }
//   ]
import {
  Edit2Icon,
	PlusSquareIcon
} from 'vue-feather-icons'
import Editable from '@/components/editable.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Edit2Icon,
		PlusSquareIcon,
		Editable
  },
  head() {
    return {
      title: this.title
    }
  },
  data: () => ({
    title: 'New',
    editCatName: false,
		editGear: [],
    writeSuccessful: false,
    drawer: true,
    sampleList: {
      uid: null,
      listName: 'Sample List Name',
      gear: [{
        categoryName: 'Sample Category',
        items: [{
          name: 'pants',
          description: 'some description',
          weight: '.08',
          uom: 'OZ',
          link: 'asd@asd.com',
          quantity: 1
        }]
      }]
    },
    lists: [{
      uid: null,
      listName: 'Sample List Name',
      gear: [{
        categoryName: 'Sample Category',
        items: [{
          name: 'pants',
          description: 'some description',
          weight: '.08',
          uom: 'OZ',
          link: 'asd@asd.com',
          quantity: 1
        }]
      }]
    }]
  }),
	computed: {
		...mapState('modules/user', ['user'])
	},
  methods: {
    async writeToFirestore() {

      const ref = this.$fireStore.collection("gearList")

      try {
        await ref.add(this.lists[0])
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
            console.log(`${doc.id} => ${doc.data().listName}`);
          });
        })
      } catch (e) {
        alert(e)
        return
      }
    },
    addNewList() {
			console.log(this.uid)
      this.lists.push({
        uid: this.user.uid || null,
        listName: 'list',
        gear: [{
          categoryName: 'Base',
          items: [{
            name: 'pants',
            description: 'some description',
            weight: '.08',
						uom: 'oz',
						link: 'asd@asd.com'
          }]
        }]
      })
    },
		addNewCategory () {
			this.lists[0].gear.push({
				categoryName: 'Base',
				items: [{
					name: 'pants',
					description: 'some description',
					weight: '.08',
					uom: 'OZ',
          quantity: 1
				}]
			})
		},
		addNewGear (listIndex, index) {
			console.log(listIndex)
			this.lists[listIndex].gear[index].items.push({
				name: 'pants',
				description: 'some description',
				weight: '.08',
				measurement: 'oz'
			})
		},
		getAllTest () {
			const messageRef = this.$fireStore.collection('gearList')
			console.log(messageRef)
			var query = messageRef.where("uid", "==", this.user.uid).get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log(doc.data())
				});
			})
			console.log(query)
			return
		}
  }
}
</script>

<style lang="stylus" scoped>
.custom-nav-drawer {
	background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
	background-size: cover
}

.custom-select {
  >>>.v-input__control {
    min-height: unset;
    margin-top: 3px;
  }
}

</style>
