<template>
  <v-card class="mx-auto my-2" max-width="450">
    <img :src="image" height="200" cover>

    <v-card-item>
      <v-card-title>Cyrus Francisco</v-card-title>

      <v-card-subtitle>
        <span class="mr-1">BSIT Student @ TIP MANILA</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row class="mx-0">
        <v-rating color="amber" size="14"></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">Mandaluyong City, Philippines</div>

      <div>
        Cyrus Francisco is a 21 year old, student from Technological Institute
        of the Philippines. He currently lives in Mandaluyong City. He is now on
        his 4th year, and 1st semester of his course.<br /><br />Looking for a
        web developer? Start working with me today!
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Programming Languages</v-card-title>

    <div class="px-4">
      <v-chip-group>
        <v-chip>C</v-chip>

        <v-chip>Java</v-chip>

        <v-chip>PHP</v-chip>

        <v-chip>Kotlin</v-chip>
      </v-chip-group>
    </div>

    <v-card-title>Frameworks</v-card-title>

    <div class="px-4">
      <v-chip-group>
        <v-chip>Laravel</v-chip>

        <v-chip>Vue JS</v-chip>

        <v-chip>Bootstrap</v-chip>

        <v-chip>Tailwind CSS</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <router-link to="spotify"><v-btn color="deep-purple-lighten-2"> Click Me! </v-btn></router-link>
      
    </v-card-actions>
  </v-card>
</template>


<script>

import image from "../assets/me.png"

export default {
  data: function () {
    return {
      image: image
    }
  }
}

</script>