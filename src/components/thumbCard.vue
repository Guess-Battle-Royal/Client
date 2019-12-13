<template>
  <div class="thumb-wrapper">
    <img @click="leftToggle" :src="leftImg">
    <img @click="rightToggle" :src="rightImg">
  </div>
</template>

<script>
import left0 from '@/assets/left0.png'
import left1 from '@/assets/left1.png'
import right0 from '@/assets/right0.png'
import right1 from '@/assets/right1.png'

export default {
  data() {
    return {
      bet: 0,
      left: 0,
      right: 0,
      leftImg: left0,
      rightImg: right0,
      timer: this.$store.state.timer
    }
  },
  methods: {
    leftToggle() {
      if (this.left === 0) {
        this.left = 1
        this.bet += 1
        this.leftImg = left1
        // this.playSound(stageClear)
      } else if (this.left === 1) {
        this.left = 0
        this.bet -= 1
        this.leftImg = left0
      }
    },
    rightToggle() {
      if (this.right === 0) {
        this.right = 1
        this.bet += 1
        this.rightImg = right1
      } else if (this.right === 1) {
        this.right = 0
        this.bet -= 1
        this.rightImg = right0
      }
    },
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    }
  }
}
</script>

<style scoped>
  .thumb-wrapper {
    width: 150px;
  }
  .thumb-wrapper img {
    width: 150px;
  }
</style>