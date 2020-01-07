<template>
<div class="add-events">
    
    <v-app class="grey lighten-4">

      <v-contan class="mx-12 mb-4">
        <router-view></router-view>
          <h1 class="subheading grey--text" >Add Events</h1>
        
        <v-container class="my-5">

          <v-snackbar v-model="snackbar" :timeout="4000" top color="#FF8886">
            <span>Awesome! You Added a New Project.</span>
            <v-btn flat color="#FF8886" @click="snackbar = false">Close</v-btn>
          </v-snackbar>
          
           <v-flex class="mt-6 mb-6">
            <v-dialog
            max-width="600px"
            v-model="dialog"
            >
            <template v-slot:activator="{on}">   
              <v-btn flat v-on="on" class="pop-colour white--text">Add New Events</v-btn> 
            </template>

           <Popup @projectAdded="snackbar = true" />

           </v-dialog>
           </v-flex>
  
        </v-container>

      </v-contan>

    </v-app>
 
</div>
</template> 
  

<script>
import Popup from './Popup'
export default {
    components:{ Popup }, 
  data () {
      return {
        drawer:false,
        dialog: false,
        snackbar: false,
      }
    },
};
</script>
