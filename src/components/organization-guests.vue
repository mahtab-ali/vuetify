<template>
<div class="Organization-guests">
    
    <v-app class="grey lighten-4">

      <v-contan class="mx-12 my-6 mb-4">
        <router-view></router-view>
          
        <h1 class="subheading grey--text">Organization Guests</h1>
        <v-container class="my-6">
         <v-layout row wrap>
           <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
             <v-card flat class="text-xs-center ma-3">
               <v-reponsive class="pt-4">
                 <v-avatar size="120">
                   <img :src="person.avatar">
                 </v-avatar>
               </v-reponsive>
               <v-card-text>
                 <div class="subheading">{{ person.name }}</div>
                 <div class="grey--text">{{ person.role}}</div>
               </v-card-text>
               <v-card-actions>
                 <v-btn flat color='gray'>
                   <v-icon left small>mdi-comment-text</v-icon>
                   <span>Messages</span>
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
  name: 'Organization Guests',
  data () {
      return {
        drawer:false,
        team:[
          {name:'The Net Ninja', role:'Web develper', avatar:require('../assets/avatar-1.jpg')},
          {name:'Ryu', role:'Grapic Designer', avatar:require('../assets/avatar-2.jpg')},
          {name:'Chun Li', role:'Web develper', avatar:require('../assets/avatar-3.jpg')},
          {name:'Gouken', role:'Social media maverick', avatar:require('../assets/avatar-4.jpg')},

        ]
      }
    },
};
</script>