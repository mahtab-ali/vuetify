<template>
<div class="Dashboard">
    <v-toolbar flat app >
      <v-app-bar-nav-icon  class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-side-icon class="mx-4 mb-4"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase gray--text font-weight-bold">
        <span>Attendo </span>
        <span class="font-weight-light">plus</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
      </template>
     </v-toolbar>
    

    <v-card
    height="1000"

  >
    <v-navigation-drawer v-model="drawer"
     app class="deep-purple accent-4"
      dark
    >
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

      <v-contan class="mx-12 mb-4">
        <router-view></router-view>
          
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </v-container>
      </v-contan>

    </v-app>
  
  </v-card>
 
</div>
</template> 
  

<script>
export default {
  name: 'Dashboard',
  data () {
      return {
        drawer:false,
        items: [
          { title: 'DASHBOARD', icon: 'mdi-windows', route: '/Dashboard.vue' },
          { title: 'ADD EVENTS', icon: 'mdi-cogs', route:'/setting.vue'},
          { title: 'EVENTS', icon: 'mdi-account-circle', route:'/profile.vue' },
          { title: 'ANALYTICS', icon: 'mdi-windows', route: '/Dashboard.vue' },
          { title: 'ON-SITE USER', icon: 'mdi-cogs', route:'/setting.vue'},
          { title: 'ORGANIZATION', icon: 'mdi-account-circle', route:'/profile.vue' },
          { title: 'ORGANIZATION GUESTS', icon: 'mdi-windows', route: '/Dashboard.vue' },
          { title: 'EXHIBITORS', icon: 'mdi-cogs', route:'/setting.vue'},
          { title: 'NOTIFICATION', icon: 'mdi-account-circle', route:'/profile.vue' },
          { title: 'PROFILE', icon: 'mdi-account-circle', route:'/profile.vue' },
          { title: 'SETTINGS', icon: 'mdi-cogs', route:'/setting.vue'},
        ],
      }
    },
};
</script>
