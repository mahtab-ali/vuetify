<template>
<v-navigation-drawer v-model="drawer"
     app 
     dark
     fixed
    >
  
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          linka4
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
          { title: 'Add Events', icon: 'mdi-account-box', route: {name:'add-events'} },
          { title: 'Events', icon: 'mdi-account-box', route:{name:'events'} },
          { title: 'Analytics', icon: 'mdi-chart-areaspline', route: {name:'analytics' } },
          { title: 'On-site User', icon: 'mdi-account-multiple', route: {name:'on-site_user'} },
          { title: 'Organization', icon: 'mdi-city', route: {name:'organization'} },
          { title: 'Organization Guests', icon: 'mdi-account-supervisor-circle', route: {name:'organization-guests'} },
          { title: 'Exhibotors', icon: 'mdi-account-supervisor', route: {name:'exhibitors'} },
          { title: 'Messages', icon: 'mdi-comment-text', route: {name:'messages'} },
          { title: 'Notification', icon: 'mdi-comment-alert', route: {name:'notifications'} },
          { title: 'Profile', icon: 'mdi-account-circle', route: {name:'profile'} },
          { title: 'Settings', icon: 'mdi-cogs', route: {name:'setting'} },
        ]
      }
   },
  
};
</script>

<style>
.pa-2{background: #F7C598;
}

.v-navigation-drawer {
  background: linear-gradient(45deg, #F7C598,#FF8886);
}
</style>