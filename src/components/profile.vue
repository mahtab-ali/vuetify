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
        
      }),   
  }
</script>