<template>
<div class="Dashboard">
    
    <v-app class="grey lighten-4">

      <v-contan class="mx-12 mb-4">
        <router-view></router-view>
          
        <h1 class="subheading grey--text">Exhibotors</h1>
           <v-container class="my-6">
          <v-layout  row wrap>
             <v-flex xs4 md2>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
               <v-btn dark small flat color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn></template>
            <span>Sort projects by project name</span>
            </v-tooltip>
            </v-flex>
           
             <v-flex xs4 md2>
             <v-tooltip top>
              <template v-slot:activator="{ on }">
              <v-btn class="caption text-lowercase" dark small color="grey"  @click="sortBy('status')" v-on="on">
              <v-icon left  small>mdi-clock</v-icon>
              <span class="caption text-lowercase">By Status</span>
              </v-btn></template><span>Sort by Project Status</span>
                </v-tooltip>
                </v-flex>
              
               <v-flex xs4 md2>
             <v-tooltip top>
              <template v-slot:activator="{ on }">
              <v-btn class="caption text-lowercase" dark small color="grey"  @click="sortBy('due')" v-on="on">
              <v-icon left  small>mdi-calendar-month</v-icon>
              <span class="caption text-lowercase">By Date</span>
              </v-btn></template><span>Sort by Due Date</span>
              </v-tooltip>
              </v-flex>



          </v-layout>

        <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`"> 
            <v-flex xs12 sm4 md4>
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
      </v-contan>

    </v-app>
  
 
</div>
</template> 
  
<script>
import db from '@/fb'

  
export default {
   data () {
      return {
        projects:[
           
          ]
      }
   },
   methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },


    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges ();

        changes.forEach(change => {
          if (change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id

            })
          }
        })
      })
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
