<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
        <router-link to="/authors">Authors</router-link> |
          <router-link to="/favorites"><img src=../assets/favorite.png"</router-link>
    </div>
    <router-view/>
    <div class="footer">
    <a class="footer-link" href="https://github.com/mamberly/booklist">Github Link</a>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
