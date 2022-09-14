<template>

<v-card
    class="mx-auto my-5"
    style="background-color: #122436"
    max-width="450"
  >
    <img :src="image" height="200" cover />

    <v-card-item>
      <v-card-title style="font-size: 2rem; color: white; margin-bottom: 1.5rem"
        >User Login</v-card-title
      >

      <v-card-subtitle>
        <span class="mr-1" style="color: white">Enter your details below:</span>
        <p v-if="errMsg">{{errMsg}}</p>
      </v-card-subtitle>
      <router-link style="color:white;" to="/register">No Account yet?</router-link>
    </v-card-item>

    <v-card-text style="margin-bottom: 1rem">
      <div class="py-2">
        <v-text-field
          style="margin-bottom: 1rem; color:white"
          label="Email"
          type="email"
          v-model="email"
        ></v-text-field>
        <v-text-field style="color:white"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
      </div>

      <div class="my-2">
        <v-btn @click="signin" small color="info" dark>
          <v-icon class="mr-3" left> mdi-account-plus </v-icon> Sign In
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
import { ref } from "vue";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const auth = getAuth();

const signin = () => {
    const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully Logged In!");
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code){
        case "auth/invalid-email":
            break;
        case "auth/user-not-found":
            errMsg.value = "That email does not belong to any account.";
            break;
        default:
            errMsg.value = "Login Credentials are incorrect, Please Try Again.";
            break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/");
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