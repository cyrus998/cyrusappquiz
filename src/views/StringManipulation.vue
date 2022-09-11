<template>

    <div id="StringInspect">
  <h1 style="font-style: italic; color: aqua;">Enter Your String:</h1>
  <v-text-field style="color: white;" dark label="String to inspect" type='text' v-model="string" @change='inspect' color="white"></v-text-field>
  <br><br>
   <div>
      <v-btn  type="submit">Inspect String!!</v-btn>
  
   </div>


  <p style="color: lightgreen; margin-top: 2rem; font-size: 1.5rem;"> The Answers Are: </p>

  <p id="paragraph">Counted Vowels: <span style="color: aqua; font-size: 1.5rem;">{{vowels}}</span></p>
  <p id="paragraph">Number of Characters: <span style="color: aqua; font-size: 1.5rem;">{{count}}</span></p>
  <p id="paragraph">Counted Consonants: <span style="color: aqua; font-size: 1.5rem;">{{consonants}}</span></p>
  <p id="paragraph">Convert Vowels to * : <span style="color: aqua; font-size: 1.5rem;">{{convert}}</span></p>
</div>

</template>

<script>
 export default {
   name: 'StringInspect',
   data() {
     return {
       string: "", vowels: 0, count: 0,consonants: 0,convert: "",
     };
   },
   computed: {
     inspect: function() {
       var vList = 'AEIOUaeiou';
       this.vowels = 0; this.count = 0; this.consonants = 0; this.convert = "";
       // vowel count
       for (var x = 0; x < this.string.length; x++) {
         if (vList.indexOf(this.string[x]) !== -1) {
           this.vowels = this.vowels + 1;
         }
       }
       // character count
       for (var x = 0; x < this.string.length; x++) {
         this.count = this.count + 1;
       }
       // consonant count
       for (var x = 0; x < this.string.length; x++) {
         if (vList.indexOf(this.string[x]) == -1) {
           this.consonants = this.consonants + 1;
         }
       }
       // Vowels = *
       for (var x = 0; x < this.string.length; x++) {
         if (vList.indexOf(this.string[x]) !== -1) {
           this.convert += "*";
         } else {
           this.convert += this.string[x];
         }
       }
     }
   },
 };
</script>
<style>
#StringInspect{
 margin-top: 2rem;
 margin-left: 3rem;
 margin-right: 3rem;
}
 #paragraph {
   color: white;
 }
 input {
 border-radius: 5px;
 border: 2px solid #4499fa;
 padding: 10px;
 width: 30rem;

}
</style>