<template>
<div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-row
      no-gutters
    >
      <v-col
        col="12"
        md="4"
      >
        <v-card
        color="red"
          class="pa-2 elevation-24"
          outlined
          tile
          width="344"
        >
          <v-card-title>Title text</v-card-title>
          <v-card-text>txt here</v-card-text>
          <v-card-subtitle>fdf ddsf</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        col="12"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          1 of 1
        </v-card>
      </v-col>
      <v-col
        col="12"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          1 of 1
        </v-card>
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


</style>