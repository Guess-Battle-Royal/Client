<template>
  <div>
    <div class="score-wrapper">
      <div class="card">
        <h4>Expect</h4>
        <div class="score"><h1>{{ this.$store.state.expect }}</h1></div>
      </div>
      <div class="card">
        <h4>Guess</h4>
        <div class="score"><h1>{{ this.$store.state.expect }}</h1></div>
      </div>
    </div>
    <div class="thumb-wrapper">
      <thumbCard />
      <thumbCard />
      <thumbCard />
    </div>
  </div>
</template>

<script>
import thumbCard from '../components/thumbCard'
export default {
  data() {
    return {
      
    }
  },
  components: {
    thumbCard
  }
}
</script>

<style>
  .thumb-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .score-wrapper {
    display: flex;
    justify-content: center;
  }
  .card {
    padding: 10px;
    margin: 0 1rem;
  }
</style>
