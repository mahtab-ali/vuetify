<template>
<div class="events">
   <v-app class="grey lighten-4">
      <v-contan class="mx-12 mb-4">
     <h1 class="subheading grey--text">Events</h1>
        <v-container class="my-6">
          <v-layout row>
            <v-flex xs12 md4>
                    <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        Share
                      </v-btn>

                      <v-btn
                        color="orange"
                        text
                      >
                        Explore
                      </v-btn>
                    </v-card-actions>
                  </v-card>
            </v-flex>
             <v-flex xs12 md3>
                    <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        Share
                      </v-btn>

                      <v-btn
                        color="orange"
                        text
                      >
                        Explore
                      </v-btn>
                    </v-card-actions>
                  </v-card>
            </v-flex>
             <v-flex xs12 md4>
                    <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        Share
                      </v-btn>

                      <v-btn
                        color="orange"
                        text
                      >
                        Explore
                      </v-btn>
                    </v-card-actions>
                  </v-card>
            </v-flex>
          </v-layout>
           <v-layout row mt-12>
             <v-flex xs12 md4>
                <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Top western road trips
                </v-card-title>

                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text>Share</v-btn>

                  <v-btn
                    color="purple"
                    text
                  >
                    Explore
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
             </v-flex>
             <v-flex xs12 md3>
                <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Top western road trips
                </v-card-title>

                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text>Share</v-btn>

                  <v-btn
                    color="purple"
                    text
                  >
                    Explore
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
             </v-flex>
             <v-flex xs12 md4>
                <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Top western road trips
                </v-card-title>

                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text>Share</v-btn>

                  <v-btn
                    color="purple"
                    text
                  >
                    Explore
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
             </v-flex>
           </v-layout>
           <v-layout row mt-12>
             <v-flex xs12 md4>
         <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="400"
            >
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 subtitle-1 black--text">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple accent-4"
                  text
                  @click="reserve"
                >
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
             </v-flex>

               <v-flex xs12 md3>
         <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="400"
            >
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 subtitle-1 black--text">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple accent-4"
                  text
                  @click="reserve"
                >
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
             </v-flex>

               <v-flex xs12 md4>
         <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="400"
            >
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 subtitle-1 black--text">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple accent-4"
                  text
                  @click="reserve"
                >
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
             </v-flex>
           </v-layout>
           <v-layout row mt-12>
          <v-flex xs12 md4>
            <v-card
              max-width="400"
              class="mx-auto"
            >
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                height="194"
              ></v-img>

              <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Read
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Bookmark
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
              </v-flex>
                <v-flex xs12 md3>
                <v-card
              max-width="400"
              class="mx-auto"
            >
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                height="194"
              ></v-img>

              <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Read
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Bookmark
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
              <v-flex xs12 md4>
              <v-card
              max-width="400"
              class="mx-auto"
            >
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                height="194"
              ></v-img>

              <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Read
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Bookmark
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
               </v-card-actions>
              </v-card>
            </v-flex>
           </v-layout>
         </v-container>
        </v-contan>
      </v-app>
   </div>
</template> 

<script>
export default {
  name: 'Events',
  data () {
    
      return {
        show: false,
      }
    },
};
</script>

