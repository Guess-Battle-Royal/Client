<template>
  <div>
       <b-container class="pb-3">
    <b-row>
      <b-col>
        <h1 class="welcome-title">Expect the best number for this round!  </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4 class="welcome-title mt-2">Goodluck!</h4>
      </b-col>
    </b-row>

    <b-row v-if="!getUser" class="justify-content-center my-4">
      <b-col cols="7">

      <form @submit.prevent="userJoinRoom">
        <b-input-group>
          <b-form-input v-model="expectNumber" placeholder="Place your number" required type="text"></b-form-input>
          <b-input-group-append>
            <b-button type="submit" variant="dark">GO !</b-button>
          </b-input-group-append>
        </b-input-group>
      </form>

      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button v-if="getMaster" @click="playNow" class="btn-lg my-3" variant="success">PLAY!</b-button>
      </b-col>
    </b-row>

    <b-row class="justify-content-center mt-4">
      <b-col cols="6">
        <div v-for="(data,key) in getData" :key="key">
          <b-card v-if="data.username" class="text-center background-color-XXX mb-2">
            <div class="text-white" style="font-size: 30px;">
              {{ data.username }}
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>

  </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expectNumber : 0
    }
  }
}
</script>

<style>

</style>