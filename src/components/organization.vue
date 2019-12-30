<template>
<div class="Organization">
  
    
    <v-app class="grey lighten-4">

      <v-contan class="mx-12 mb-4">
        <router-view></router-view>
          
        <h1 class="subheading grey--text">Organization</h1>
        <v-container class="my-5">
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </v-container>
      </v-contan>

    </v-app>
  

 
</div>
</template> 
  

<script>
export default {
  name: 'Organization',
  data () {
      return {
        drawer:false,
      }
    },
};
</script>