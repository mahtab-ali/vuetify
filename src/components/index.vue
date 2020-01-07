<template>
<div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-row
      no-gutters
    >
      <v-col
        col="12"
        md="2"
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="first-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_one-24"
          outlined
        >
           <v-card-title class="display-2 white--text"><span class="y-5">181</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">TOTAL</span></v-card-text>
          <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Events</span></v-card-subtitle>
          
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>
      <v-col
        col="12"
        md="2"
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="second-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_two-24"
          outlined
          xs12 sm4 md4
        >
           <v-card-title class="title white--text"><span class="display-2">3</span></v-card-title>
           <v-card-text class="headline white--text font-weight-bold"><span>EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Active</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>
      <v-col
        col="12"
        md="2"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="third-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_three-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">2</span></v-card-title>
           <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Awaiting</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>
       <v-col
        col="12"
        md="2"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="four-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_four-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">10</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Past</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>

      <v-col
        col="12"
        md="2"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="five-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_five-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">166</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Expired</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>
    </v-row>

    <v-row>  
       <v-col
        col="12"
        md="3"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="next-one-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation-next_one-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">139</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">TOTAL</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Certificates</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>

         <v-col
        col="12"
        md="3"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="next-two-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation-next_two-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">26</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">TOTAL</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Filled Loogbook</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>


       <v-col
        col="12"
        md="3"
        xs12 sm4 md4
      >
        <v-hover>
      <template v-slot="{ hover }">
        <div class="next-three-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation-next_three-24"
          outlined
          xs12 sm4 md4
        >
           <v-card-title class="title white--text"><span class="display-2">30</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">TOTAL</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>Filled Feedback</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
  </v-col>

</v-row>
                          <v-spacer></v-spacer>
       <v-col
        col="12"
        md="11"
        xs12 sm4 md4
      >
    <h1 class="subheading grey--text">Events Guests</h1>
    <p>No. of Guest, Attended , and Interested</p>
    
    <v-container fluid>
    <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

    <v-row>
      <v-col
        cols="12"
        md="6"
        xs12 sm4 md4
      >
        <v-row class="fill-height" align="center">
          <v-item-group v-model="gradient" mandatory>
            <v-row>
              <v-item
                v-for="(gradient, i) in gradients"
                :key="i"
                v-slot:default="{ active, toggle }"
                :value="gradient"
              >
                <v-card
                  :style="{
                    background: gradient.length > 1
                      ? `linear-gradient(0deg, ${gradient})`
                      : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  width="30"
                  height="30"
                  class="mr-2"
                  @click.native="toggle"
                ></v-card>
              </v-item>
            </v-row>
          </v-item-group>
        </v-row>
      </v-col>
       <v-col cols="6">
        <v-row class="fill-height" align="center">
          <v-switch v-model="fill" label="Filled"></v-switch>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </v-col>

</div>
</template>

<script>
  const gradients = [
    
      ['rgb(247, 238, 158)','#FF9190'],
      ['rgb(77, 255, 225)','#4EBCFA'],
      [' rgb(247, 238, 158) ','rgb(4, 219, 169) '],
      ['#FBC071', '#FF8701'], 
    ]

  export default {
    data: () => ({
      fill:true,
      gradient: gradients[4],gradients,
      padding: 8,
      radius: 6,
      value: [0, 2, 5, 8, 5, 6, 3, 5, 0, 2, 1, 6, 2, 3, 0],
      width: 2,
    }),
    
  }
</script>
<style>
         /*****************************************************************************************
         
                                           Dashboard Events Boxes
         
         ************************************************************************************/
      
        .v-application .display-2{
          line-height: 1.5rem !important;
          margin-left: 6px !important;
        }
        .v-application .display-1{
          line-height: 0.5rem;
          font-family: 'Dosis', sans-serif !important;
        }
        .v-application .headline {
          margin-left: 10px;
          font-family: 'Dosis', sans-serif !important;
        }
        .elevation_one-24 {
        background: linear-gradient(45deg,rgb(250, 141, 147),#F54EA1 )!important;
        border: none !important;
        border-radius:5px !important; 
        }
        .elevation_two-24 {
        background: linear-gradient(45deg, #F7C598 , #FF8886 )!important;
        border: none !important;
        }
        .elevation_three-24 {
        background: linear-gradient(45deg, #F9B4BD , #9573DB )!important;
        border: none !important; 
        }
        .elevation_four-24 {
        background: linear-gradient(45deg, rgb(77, 255, 225) , #4EBCFA )!important;
        border: none !important; 
        }
        .elevation_five-24 {
        background: linear-gradient(45deg, rgb(205, 95, 241), rgb(100, 96, 235) )!important;
        border: none !important; 
        }

                    /* Boxes shadow CSS */


        .no-gutters > .col, .no-gutters > [class*=col-]{
          padding: 12px !important
        }
        .first-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(248, 129, 135) !important;
        }
        .first-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(248, 126, 132) !important;
        }
        .second-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(247, 179, 120) !important;
        }
        .second-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(245, 180, 123) !important;
        }
         .third-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(243, 133, 148) !important;
        }
        .third-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(247, 158, 170) !important;
        }
         .four-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(107, 241, 219) !important;
        }
        .four-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(66, 248, 218) !important;
        }
         .five-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(205, 95, 241) !important;
        }
        .five-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(205, 95, 241) !important;
        }

                                 /* 2nd Row Boxes */

 .elevation-next_one-24 {
        background: linear-gradient(45deg ,#FBC071 , #FF8701 )!important;
        border: none !important;
        border-radius:5px !important; 
        }
        .elevation-next_two-24 {
        background: linear-gradient(45deg, rgb(247, 238, 158) , rgb(4, 219, 169) )!important;
        border: none !important;
        }
        .elevation-next_three-24 {
        background: linear-gradient(45deg, rgb(255, 180, 225) , rgb(253, 77, 86) )!important;
        border: none !important; 
        }


                        /*    2nd Row boxes Shadows CSS   */


        .next-one-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(245, 173, 80) !important;
        }
        .next-one-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(248, 169, 66) !important;
        }
        .next-two-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(144, 240, 192)   !important;
        }
        .next-two-box  .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(110, 252, 181)   !important;
        }
         .next-three-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(245, 137, 142) !important;
        }
         .next-three-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(252, 133, 173) !important;
        }
        
      
        
      
</style>