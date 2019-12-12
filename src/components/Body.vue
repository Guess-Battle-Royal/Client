<template>
  <div class="home mt-4">
    <!-- #D1FBFC -->
    <!-- image -->
    <div class="container-home-thumb">
      <img src="../assets/home.jpg" class="homethumb-img margin-right: 100px; mb-4;" />
    </div>
    <!-- image -->
    <!-- daring message  -->

    <p class="detiled-text1">Place up your best thumb to fail your opponent!</p>

    <!-- daring message  -->
    <!-- input form  -->
    <div class="container-form">
      <form @submit.prevent="createRoom()">
        <b-form-input v-model="username" required placeholder="Enter your name"></b-form-input>
        <div>
          <b-button class="play-btn px-3 py-2 mt-3 btn-lg" type="submit" pill>PLAY !</b-button>
        </div>
      </form>
    </div>
    <!-- input form  -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      username: ''
    }
  },
  methods: {
    createRoom() {
      this.$store.dispatch('create', this.username)
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

.container-home-thumb {
  display: inline-block;
  background-repeat: no-repeat;
  /* background-image: url('../assets/orange.jpg'); */
  background-size: center;
  height: 20vh;
  width: 40vw;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 1vw;
  margin-bottom: 10vw;
}

.container-form {
  max-width: 250px;
  margin-left: 45%;
}


.play-btn {
  background-color: #62B69B;
  border: none;
}

.detiled-text1 {
  margin-top: 90%;
}

.homethumb-img {
  width: 500px;
  height: 500px;
}

@media screen and (min-width: 1500px) {
  .keyboard-img{
    width: 400px;
    height: 400px;
  }
}

@media screen and (min-width: 700px) {
  .detiled-text1{
    font-family: 'Quicksand', sans-serif;
    font-size: 30px;
    color: #444547;
    margin-top: 40px;
  }
  .detiled-text2{
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    color: #444547
  }
}

@media screen and (min-width: 1800px) {
  .detiled-text1{
  font-family: 'Quicksand', sans-serif;
  font-size: 40px;
  color: #444547;
  margin-top: 110px;
  }
  .detiled-text2{
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: #444547
}
}
</style>