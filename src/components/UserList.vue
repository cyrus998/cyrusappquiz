<template>
  <h1 style="text-align: center; color:white">Users Scores</h1>

  <div style="color:white; text-align: center;" class="table m-0">
    <thead>
      <tr>
        <th scope="col">Score</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td>
            Actions
        </td>
      </tr>
    </tbody>
  </div>
</template>
    
    <script>
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ref, onUnmounted } from "vue";
import { collection, doc, setDoc, getDocs  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFHsT-VMFpeVm97oUDiENcynWYIEqexVU",
  authDomain: "cyrusquizapp.firebaseapp.com",
  projectId: "cyrusquizapp",
  storageBucket: "cyrusquizapp.appspot.com",
  messagingSenderId: "1040470902159",
  appId: "1:1040470902159:web:a0927c80d24c301e6a37fa",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const usersCollection = collection(db, "users");

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export default{
    setup() {
        // const users = useLoadUsers()
        // return {users}
    }
}
</script>
    