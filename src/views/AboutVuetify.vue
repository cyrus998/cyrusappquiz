<template>
  <v-card style="margin-top: 3rem" class="mx-auto" max-width="480">
    <img class="align-end text-white" height="200" :src="image" cover />
    <v-card-title>All about Vuetify</v-card-title>

    <v-card-subtitle class="pt-4"> A neat Design Framework. </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <p id="vueti">
        Vuetify is a Vue UI Library with beautifully handcrafted Material
        Components. No design skills required
        <span style="color: #59baeb; font-size: 15px; font-style: italic"
          >— everything you need to create amazing applications is at your
          fingertips.
        </span>
        <br />
        <br />
        Vuetify is the #1 component library for Vue.js and has been in active
        development since 2016. The goal of the project is to provide users with
        everything that is needed to build rich and engaging web applications
        using the Material Design specification. Vuetify is a Vue UI Library
        with beautifully handcrafted Components using the Material Design
        specification. No design skills required — everything you need to create
        amazing applications is at your fingertips. Supercharge your development
        process with all of the tools that you need to succeed: WCAG
        Accessibility (a11y) / WCAG / Section 508 / RTL support 30+ supported
        languages Smaller bundle sizes with automatic tree-shaking A massive
        Discord community 18 months Long-term support for Major releases IE11 /
        Safari 9 support with polyfill Extensive customization options with
        SASS/SCSS and Presets Responsive support down to 320px width Direct
        support support from Vuetify
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        <RouterLink
          class="vuetifybutton"
          role="button"
          to="/redirect"
          style="color: black"
          >Read More About Vuetify</RouterLink
        >
      </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>
  
  <style>
.vueti {
  color: black;
}
</style>

  

<script>
import image from "../assets/vue.png";

export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>