<template>
  <div id="border">
    <div class="wrapper mt-3">
      <p>
        <strong>Congratulations!</strong>
      </p>
      <i @click="playSound" class="fas fa-trophy fa-7x mt-2" style="color: orange;"></i>
    </div>
    <h5 class="mt-5 mb-0" id="playername">
      <strong>{{$store.state.winner}}</strong>
      <hr>
    </h5>
  </div>
</template>

<script>
import win from '@/assets/winning.wav';

export default {
  name: 'win',
  data() {
    return {
      message: 'Hello, you win!',
    };
  },
  methods: {
    playSound () {
      const audio = new Audio(win)
      audio.play()
    }
  },
  created() {
    this.playSound();
  },
  mounted () {
    this.playSound();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

hr {
  border: 3px solid grey;
  border-radius: 1rem;
  width: 15em
}
p {
  /* font-family: 'Lobster', cursive; */
  color: rgb(66, 61, 62);
  font-size: 50px;
  letter-spacing: 5px;
  font-family: 'Pacifico', cursive;
}
.template {
  display: flex;
  justify-content: center;
}
#border {
  height: 400px;
  margin-left: 30%;
  margin-right: 30%;
  border: 3px solid grey;
  border-radius: 1rem;
  box-shadow: 5px 10px #888888;
}
#playername {
  font-family: 'Lilita One', cursive;
  font-size: 30px;
  color: 2F4F4F;
}
</style>
