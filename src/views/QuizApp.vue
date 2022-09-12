<template>
  <div id="app" style="margin-top: 5rem">
    <div style="text-align: center;">
    <h1>Quiz App</h1>
    <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
    <custom-modal
      v-show="showModal"
      header="You did Alright!"
      subheader="All in all you have answered:"
      :score="score"
      @reload="updateQuiz"
      @close="showModal = false"
    />

  </div>
  </div>
</template>

<script>
import CustomModal from "../components/CustomModal.vue";
import Quiz from "../components/Quiz.vue";

export default {
  components: { Quiz, CustomModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
  methods: {
    handleQuizCompleted(score) {
      this.score = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
}
</style>
