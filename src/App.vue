<template>
<div id="app">
  <div id="nav">
  MegAThor Books
  MegAThor Books
    <router-link to="/">Home</router-link>
    <router-link to="/authors">Authors</router-link>
    <router-link to="/favorites">Favorites</router-link>
    MegAThor Books
    MegAThor Books

  </div>
  <hr/>
  <router-view />
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
  background: #86BFEE;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  margin: 0px 30px;
  font-size: 30px;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}

.footer {
  height: 50px;
  background-color: #3B5971;
  padding-top: 15px;
}
.footer-link {
  text-decoration: none;
  font-size: 30px;
  color: white;
}
</style>
