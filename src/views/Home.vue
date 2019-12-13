<template>
  <div class="home">
    <Body/>
    <thumbCard />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '../components/Body.vue'
import thumbCard from '../components/thumbCard'
export default {
  name: 'home',
  components: {
    Body,
    thumbCard
  }
}
</script>
