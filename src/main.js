import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import('../node_modules/vuetify/dist/vuetify.min.css')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHsT-VMFpeVm97oUDiENcynWYIEqexVU",
  authDomain: "cyrusquizapp.firebaseapp.com",
  projectId: "cyrusquizapp",
  storageBucket: "cyrusquizapp.appspot.com",
  messagingSenderId: "1040470902159",
  appId: "1:1040470902159:web:a0927c80d24c301e6a37fa"
};

initializeApp(firebaseConfig);


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

