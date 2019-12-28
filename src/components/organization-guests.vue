<template>
<div class="Organization-guests">
    <v-toolbar flat app v-model="drawer" class="deep-purple accent-4" height="60">
      <v-app-bar-nav-icon  class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
       
      <v-toolbar-title class="text-uppercase gray--text font-weight-bold">
        <span class="white--text">Attendo </span>
        <span class="font-weight-light white--text">plus</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
<v-toolbar-side-icon class="mx-6 mb-2">
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon class="white--text">
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon class="white--text">
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
      </template></v-toolbar-side-icon>
     </v-toolbar>
    

    <v-card
    height="1000"

  >
    <v-navigation-drawer v-model="drawer"
     app class="deep-purple accent-4"
      dark
    >
    <v-layout colum align-center>
      <v-flex class="mt-5">
        <v-avatar size="100">
        <img src="/151067.png">
        </v-avatar>
        <p class="white--text.subheading mt-1">
          Ryu
        </p>
      </v-flex>
    </v-layout>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
      
    </v-navigation-drawer>
    
    <v-app class="grey lighten-4">

      <v-contan class="mx-12 my-6 mb-4">
        <router-view></router-view>
          
        <h1 class="subheading grey--text">Organization Guests</h1>
        <v-container class="my-6">
         <v-layout row wrap>
           <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
             <v-card flat class="text-xs-center ma-3">
               <v-reponsive class="pt-4">
                 <v-avatar size="100" class="grey lighten-2">
                   <img src="person.avatar">
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
  
  </v-card>
 
</div>
</template> 
  

<script>
export default {
  name: 'Organization Guests',
  data () {
      return {
        drawer:false,
        items: [
          { title: 'Dashboard', icon: 'mdi-windows', route: '/Dashboard.vue' },
          { title: 'Add Events', icon: 'mdi-account-box', route:'/add-events.vue'},
          { title: 'Events', icon: 'mdi-account-box', route:'/events.vue' },
          { title: 'Analytics', icon: 'mdi-chart-areaspline', route: '/analytics.vue' },
          { title: 'On-site User', icon: 'mdi-account-multiple', route:'/on-siteuser'},
          { title: 'Organization', icon: 'mdi-city', route:'/organization.vue' },
          { title: 'Organization Guests', icon: 'mdi-account-supervisor-circle', route: '/organization-guests.vue'},
          { title: 'Exhibotors', icon: 'mdi-account-supervisor', route:'/exhibitors.vue'},
          { title: 'Messages', icon: 'mdi-comment-text', route:'/messages.vue' },
          { title: 'Notification', icon: 'mdi-comment-alert', route:'/notifications.vue' },
          { title: 'Profile', icon: 'mdi-account-circle', route:'/profile.vue' },
          { title: 'Settings', icon: 'mdi-cogs', route:'/setting.vue'},
        ],
        team:[
          {name:'The Net Ninja', role:'Web develper',avatar:'../components/151067.png'},
          {name:'Ryu', role:'Grapic Designer',avatar:'./components/151067.png'},
          {name:'Chun Li', role:'Web develper',avatar:'./components/151067.png'},
          {name:'Gouken', role:'Social media maverick',avatar:'./components/151067.png'}

        ]
      }
    },
};
</script>