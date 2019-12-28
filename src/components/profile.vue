<template>
  <v-card class="overflow-hidden"
  height="1000">
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
    
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title class="mx-4">
        <span class="text-uppercase gray--text font-weight-bold" >Attendo</span>
       <span class="font-weight-light">Plus</span></v-toolbar-title>
      <v-spacer></v-spacer>
 
       <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
      </template>

    </v-app-bar>
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
    <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="980"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
    
  </v-card>
</template>



<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
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
        ]
      }),   
  }
</script>