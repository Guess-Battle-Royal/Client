<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <p
          class="game-title mt-3"
          style="font-family: 'Bungee', cursive; color: #3A6F5C; font-size: 90px; letter-spacing: 10px; text-decoreation: none"
        >
          <strong>Guess Battle Royal</strong>
        </p>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');
body,
html {
  height: 100vh;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d1fbfc;
  object-fit: contain;
  background-repeat: no-repeat;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url("https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
</style>
