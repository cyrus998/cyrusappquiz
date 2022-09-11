<template>

    <h1 style="color:lightseagreen; margin-top: 2rem; font-style: italic;">My Simple Calculator</h1>
    <br />
    <br />
    <div class="m-5" id="app">
      <v-text-field type="number" style="color: white;" dark label="First Input" v-model.number="FNumber" color="white"></v-text-field>
      <v-text-field type="number" style="color: white;" dark label="Second Input" v-model.number="SNumber" color="white"></v-text-field>

      <v-btn @click="compute">Compute!</v-btn>

    </div>
    <div id="resultsdisplay">
    <p id="paragraph">The Computer Answers are:</p>
    <p id="paragraph">Sum: <span style="color: aqua; font-size: 1.5rem;">{{result}}</span>
    </p>
    <p id="paragraph"> Difference: <span style="color: aqua; font-size: 1.5rem;">{{diff}}</span>
    </p>
    <p id="paragraph">Product: <span style="color: aqua; font-size: 1.5rem;">{{prod}}</span>
    </p>
    <p id="paragraph">Quotient: <span style="color: aqua; font-size: 1.5rem;">{{quot}}</span>
    </p>
    <p id="paragraph">Average: <span style="color: aqua; font-size: 1.5rem;">{{ave}}</span>
    </p>
</div>
</template>
<script>
  export default {
    data() {
      return {
        FNumber: "", SNumber: "", result: 0, diff: 0, prod: 0, quot: 0, ave: 0,
      };
    },
    methods: {
      compute: function() {
        this.result = this.FNumber + this.SNumber;
        this.diff = this.FNumber - this.SNumber;
        this.prod = this.FNumber * this.SNumber;
        this.quot = this.FNumber / this.SNumber;
        this.ave = (this.FNumber + this.SNumber) / 2;
      },
    },
  };
</script>
<style>
#app {
  margin-left: 3rem;
  margin-right: 3rem;
}
#resultsdisplay {
  margin-top: 5rem;
}
  #paragraph {
    color: white;
    margin-left: 5rem;
  }

</style>