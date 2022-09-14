<template>
  <v-card
    class="mx-auto my-5"
    style="background-color: #122436"
    max-width="450"
  >
    <img :src="image" height="200" cover />

    <v-card-item>
      <v-card-title style="font-size: 2rem; color: white; margin-bottom: 1.5rem"
        >Register an Account</v-card-title
      >

      <v-card-subtitle>
        <span class="mr-1" style="color: white">Enter your details below:</span>
      </v-card-subtitle>

      <router-link style="color:white;" to="/signin">Already have an account?</router-link>
    </v-card-item>

    <v-card-text style="margin-bottom: 1rem">
      <div class="py-2">
        <v-text-field
          style="margin-bottom: 1rem; color: white"
          label="Email"
          type="email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          style="color: white"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
      </div>

      <div class="my-2">
        <v-btn @click="register" small color="info" dark>
          <v-icon class="mr-3" left> mdi-account-plus </v-icon> Register
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn @click="signInWithGoogle"><v-icon class="mr-3" left> mdi-google-plus </v-icon> Signin With
          Google
        </v-btn>
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template> 

<script setup>
import { provide, ref } from "vue";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router";
const email = ref("");
const password = ref("");
const auth = getAuth();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push("/calculator");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/calculator");
    })
    .catch((error) => {});
};
</script>

<style>
</style>



<script>
import image from "../assets/register.png";

export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>