<template>
  <div class="container">
    <div class="correctAnswers" style="font-size: 2rem">
      You have
      <strong>{{ correctAnswers }} correct {{ pluralizeAnswer }}!</strong>
    </div>
    <div class="correctAnswers">
      Now answering question {{ index + 1 }} of {{ questions.length }}
    </div>

    <h1
      style="font-size: 3rem"
      v-html="loading ? 'Generating Questions...' : currentQuestion.question"
    ></h1>
    <!-- Only first question is displayed -->
    <form v-if="currentQuestion">
      <button
        v-for="answer in currentQuestion.answers"
        :index="currentQuestion.key"
        :key="answer"
        v-html="answer"
        @click.prevent="handleClick"
      ></button>
    </form>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      questions: [],
      loading: true,
      index: 0,
      score: 0,
      currentNumberQuestion: 1,
      auth: getAuth(),
    };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    },
    correctAnswers() {
      if (this.questions && this.questions.length > 0) {
        let streakCounter = 0;
        this.questions.forEach(function (question) {
          if (!question.rightAnswer) {
            return;
          } else if (question.rightAnswer === true) {
            streakCounter++;
          }
        });
        return streakCounter;
      } else {
        return "--";
      }
    },
    pluralizeAnswer() {
      return this.correctAnswers === 1 ? "Answer" : "Answers";
    },
    quizCompleted() {
      if (this.questions.length === 0) {
        return false;
      }

      let questionsAnswered = 0; // check if finished quiz
      this.questions.forEach(function (question) {
        question.rightAnswer !== null ? questionsAnswered++ : null;
      });
      return questionsAnswered === this.questions.length;
    },
    score() {
      if (this.questions !== []) {
        return {
          allQuestions: this.questions.length,
          answeredQuestions: this.questions.reduce((count, currentQuestion) => {
            if (currentQuestion.userAnswer) {
              // get user answer
              count++;
            }
            return count;
          }, 0),
          correctlyAnsweredQuestions: this.questions.reduce(
            (count, currentQuestion) => {
              if (currentQuestion.rightAnswer) {
                // if user is right
                count++;
              }
              return count;
            },
            0
          ),
        };
      } else {
        return {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        };
      }
    },
  },
  watch: {
    quizCompleted(completed) {
      completed &&
        setTimeout(() => {
          this.$emit("quiz-completed", this.score);
        }, 1000);
    },
  },
  methods: {
    async fetchQuestions() {
      this.loading = true;
      // get questions from opentdb
      let response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18"
      );
      let index = 0;
      let data = await response.json();
      let questions = data.results.map((question) => {
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];
        //shuffle array
        for (let i = question.answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [question.answers[i], question.answers[j]] = [
            question.answers[j],
            question.answers[i],
          ];
        }
        //add right answers and key
        question.rightAnswer = null;
        question.key = index;
        index++;
        return question;
      });
      this.questions = questions;
      this.loading = false;
    },

    handleClick(e) {
      let index = e.target.getAttribute("index");
      let pollutedUserAnswer = e.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
      /* Clear from pollution with ' */
      let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");
      //set answer
      this.questions[index].userAnswer = userAnswer;
      /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
      e.target.classList.add("clicked");
      let allButtons = document.querySelectorAll(`[index="${index}"]`);

      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === e.target) continue;

        allButtons[i].setAttribute("disabled", "");
      }
      this.checkCorrectAnswer(e, index);
    },

    checkCorrectAnswer(e, index) {
      let question = this.questions[index];
      if (question.userAnswer) {
        if (this.index < this.questions.length - 1) {
          setTimeout(
            function () {
              this.index += 1;
            }.bind(this),
            2000
          );
        }
        if (question.userAnswer === question.correct_answer) {
          /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
          e.target.classList.add("rightAnswer");
          /* Set rightAnswer on question to true, computed property can track a streak out of 20 questions */
          this.questions[index].rightAnswer = true;

          //FIRESTORE
          this.score++;

          setDoc(
            doc(getFirestore(), "users", this.auth.currentUser.email),
            { score: this.score, CurrentTimeQuizisTaken: new Date() },
            { merge: true }
          );


        } else {
          setDoc(
            doc(getFirestore(), "users", this.auth.currentUser.email),
            { score: this.score },
            { merge: true }
          );
          /* Mark users answer as wrong answer */
          e.target.classList.add("wrongAnswer");
          this.questions[index].rightAnswer = false;
          /* Show right Answer */
          let correctAnswer = this.questions[index].correct_answer;
          let allButtons = document.querySelectorAll(`[index="${index}"]`);
          allButtons.forEach(function (button) {
            if (button.innerHTML === correctAnswer) {
              button.classList.add("showRightAnswer");
            }
          });
        }
      }
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>

<style scoped>
.container {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 750px;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  display: inline-block;
  outline: 0;
  border: 0;
  margin: 0.5rem;
  cursor: pointer;
  background: #000000;
  color: #ffffff;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
}

button.clicked {
  pointer-events: none;
}

button.rightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

button.wrongAnswer {
  color: black;
  background: red;
}

button.showRightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 2;
  animation-timing-function: ease-in-out;
  color: black;
  background: green;
}
</style>
