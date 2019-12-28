<template>
<v-navigation-drawer v-model="drawer"
     app class="deep-purple accent-4"
      dark
      fixed
    >
  
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
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
</template>
<script>
export default {
    props: ['drawer'],
  data () {
      return {
        
        items: [
          { title: 'Dashboard', icon: 'mdi-windows', route: {name: 'dashbaord'} },
          { title: 'Add Events', icon: 'mdi-account-box', route: {name: 'add-events'}},
          { title: 'Events', icon: 'mdi-account-box', route:{name: 'events'} },
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
      }
   },
  
};
</script>