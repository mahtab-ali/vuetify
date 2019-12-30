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
          <v-card-subtitle class="display-1 white--text font-weight-bold"><span>EVENTS</span></v-card-subtitle>
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
        >
           <v-card-title class="title white--text"><span class="display-2">3</span></v-card-title>
           <v-card-text class="headline white--text font-weight-bold"><span>EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>ACTIVE</span></v-card-subtitle>
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
        <div class="third-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_three-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">2</span></v-card-title>
           <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>AWAITING</span></v-card-subtitle>
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
        <div class="four-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_four-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">10</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>PAST</span></v-card-subtitle>
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
        <div class="five-box">
        <v-card
          :elevation="hover ? 24 : 12"
          class="pa-1 elevation_five-24"
          outlined
        >
           <v-card-title class="title white--text"><span class="display-2">166</span></v-card-title>
          <v-card-text class="headline white--text font-weight-bold"><span class="y-0">EVENTS</span></v-card-text>
           <v-card-subtitle class="display-1 white--text font-weight-bold"><span>EXPIRED</span></v-card-subtitle>
        </v-card>
        </div>
      </template>
    </v-hover>
      </v-col>
    </v-row>
    
        <v-container class="my-6">
          <v-layout row class="mb-6">

            <v-tooltip top>
              <template v-slot:activator="{ on }">
               <v-btn dark flat small color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn></template>
            <span>Sort projects by project name</span>
              
            </v-tooltip>
         <v-tooltip top>
            <template v-slot:activator="{ on }">
          <v-btn class="caption text-lowercase" dark small color="grey"  @click="sortBy('person')" v-on="on">
          <v-icon left  small>mdi-account</v-icon>
          <span class="caption text-lowercase">By person</span>
          </v-btn></template><span>Sort by person name</span>
            
            </v-tooltip>
          </v-layout>

        <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`"> 
            <v-flex xs12 md4>
              <div class="caption grey--text">Project Title</div>
              <div>{{ project.title}}</div>
            </v-flex>
               <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>{{ project.person}}</div>
               </v-flex>
               <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due by</div>
              <div>{{ project.due}}</div>
              </v-flex>
               <v-flex xs2 sm4 md2>
              <div class="right">
                <v-chip small :class="`white--text caption my-2 ${project.status} `">{{ project.status}}</v-chip>
              </div>
              </v-flex>
          </v-layout>
        </v-card>


        </v-container>
</div>
</template>

<script>

export default {
   methods: {
      sortBy(){
        this.projects.sort(function(a,b){
          return b.person - a.person
        })
      }
    },
  data () {
      return {
        projects:[
            {title:'Design a new website',person: 'Chun Li', due: '30 feb 2020',status:'overdue',contant:'Lorem ipsum, or lipsum as it is sometimes known'},

            {title:'Code up the homepage',person: 'The Net Ninja', due: '1st fab 2020',status:'ongoing',contant:'Lorem ipsum, or lipsum as it is sometimes known'},

            {title:'Design video thumbnails ',person: 'Ryu', due: '20th feb 2020',status:'complete',contant:'Lorem ipsum, or lipsum as it is sometimes known'},

            {title:'Create a community forum',person: 'Gouken', due: '10th fab 2020',status:'complete',contant:'Lorem ipsum, o r lipsum as it is sometimes known'},

          ]
      }
   },
  
};
</script>

<style>
        .project.complete{
          border-left:4px solid #33ccdd;
        }
        .project.ongoing{
          border-left:4px solid orange ;
        }
        .project.overdue{
          border-left: 4px solid tomato;
        }
        .v-chip.complete{
          background:#33ccdd !important;
        }
        .v-chip.ongoing{
          background:#ffaa2c !important;
        }
        .v-chip.overdue{
          background:tomato !important;
        }

         /*****************************************************************************************
         *
                                           Dashboard Evvnts Boxes
         
         Css************************************************************************************/
      
        .v-application .display-2{
          line-height: 1.5rem !important;
          margin-left: 6px !important;
        }
        .v-application .display-1{
          line-height: 0.5rem;
        }
        .v-application .headline {
          margin-left: 10px;
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
        background: linear-gradient(45deg, #44DEC5 , #4EBCFA )!important;
        border: none !important; 
        }
        .elevation_five-24 {
        background: linear-gradient(45deg, rgb(205, 95, 241), rgb(100, 96, 235) )!important;
        border: none !important; 
        }
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
          box-shadow: 0px 10px 16px -2px rgb(245, 157, 169) !important;
        }
        .third-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(247, 158, 170) !important;
        }
         .four-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(72, 223, 197) !important;
        }
        .four-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(71, 219, 195) !important;
        }
         .five-box .v-card{
          box-shadow: 0px 10px 16px -2px rgb(205, 95, 241) !important;
        }
        .five-box .v-card:hover{
          box-shadow: 0px 14px 16px -2px rgb(205, 95, 241) !important;
        }
         
</style>