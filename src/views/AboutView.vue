<template>
  <v-card :loading="loading" class="mx-auto my-2" max-width="450">
    <v-progress-linear
      v-if="loading"
      class="position-absolute"
      style="z-index: 1"
      color="deep-purple"
      height="10"
      indeterminate
    ></v-progress-linear>

    <v-img
      height="200"
      src="https://media.discordapp.net/attachments/971130306751000636/1018400137002889216/unknown.png"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Cyrus Francisco</v-card-title>

      <v-card-subtitle>
        <span class="mr-1">BSIT Student @ TIP MANILA</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        PHP • Mandaluyong City, Philippines
      </div>

      <div>
        Cyrus Francisco is a 21 year old, student from Technological Institute
        of the Philippines.
        He currently lives in Mandaluyong City. He is now on his 4th year, and
        1st semester of his course.<br /><br />Looking for a web developer?
        Start working with me today!
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Programming Languages</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>C</v-chip>

        <v-chip>Java</v-chip>

        <v-chip>PHP</v-chip>

        <v-chip>Kotlin</v-chip>
      </v-chip-group>
    </div>

    <v-card-title>Frameworks</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Laravel</v-chip>

        <v-chip>Vue JS</v-chip>

        <v-chip>Bootstrap</v-chip>

        <v-chip>Tailwind CSS</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" text @click="reserve">
        Hire Me!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
export default {
  data() {
    return {
      show: false,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>