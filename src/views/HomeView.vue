<template>
  <v-row no-gutters style="padding: 2rem; ">

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/about">
          <img :src="image" height="200" cover class="white--text align-end" />
        </router-link>
        <v-card-title>About Me.</v-card-title>
        <v-card-text class="text--primary">
          <div>Contains some basic information about me.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/aboutvuetify">
          <img :src="vuetifylink" height="200" cover class="white--text align-end" />
        </router-link>
        <v-card-title>About Vuetify.</v-card-title>
        <v-card-text class="text--primary">
          <div>Contains a brief introduction about Vuetify</div>
        </v-card-text>
      </v-card>
    </v-col>


    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/calculator">
          <img :src="calculatorlink" height="200" cover class="white--text align-end" />
        </router-link>
        <v-card-title>Simple Calculator.</v-card-title>
        <v-card-text class="text--primary">
          <div>A really basic calculator.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/string">
          <img :src="stringlink" height="200" cover class="white--text align-end" />
        </router-link>
        <v-card-title>String Manipulation.</v-card-title>
        <v-card-text class="text--primary">
          <div>A really basic simple calculator.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/quizapp">
          <img :src="quizlink" height="200" cover class="white--text align-end" />
        </router-link>
        <v-card-title>Quiz App.</v-card-title>
        <v-card-text class="text--primary">
          <div>A Quiz app powered by axios, and opentdb API.</div>
        </v-card-text>
      </v-card>
    </v-col>


    



    
  </v-row>

  
</template>


<script>
import image from "../assets/aboutmelink.png";
import vuetifylink from "../assets/vuetifylink.png";
import calculatorlink from "../assets/calculatorlink.png";
import stringlink from "../assets/stringlink.png";
import quizlink from "../assets/quizlink.png";

export default {
  data: function () {
    return {
      image: image, vuetifylink, calculatorlink, stringlink, quizlink
    };
  },
};
</script>