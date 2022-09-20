<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ header }}</h2>
            <h3>{{ subheader }}</h3>
          </div>

          <div class="modal-body">
            <div style="color: black" id="score">
              You answered
              <span style="color: black" class="highlight">
                {{ this.score }} out of
                {{ 10 }}
              </span>
              questions.
            </div>
          </div>

          <div class="modal-footer">
            <button
              id="play-again"
              class="button-footer"
              @click="$emit('reload')"
            >
              Play Again
            </button>

            <button
              id="play-again"
              class="button-footer"
              @click="$emit('close')"
            >
              Exit
            </button>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    header: String,
    subheader: String,
    score: Object,
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90vw;
  max-width: 650px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h2 {
  color: black;
}

.modal-header h3 {
  color: black;
}
.button-footer {
  display: inline-block;
  margin: 0.5rem;
  outline: 0;
  border: 0;
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
</style>