<template>
  <nav class="navbar navbar-expand-lg navbar-light main-bg">
    <nuxt-link to="/">
      <img src="@/assets/logo.svg" alt="logo" class="navbar-img"
    /></nuxt-link>
  </nav>
</template>

<style>
a,
a:hover,
a:visited,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
  outline: 0;
}
.kek {
  background-color: black;
}
.main-bg {
  background-color: rgb(150, 67, 228);
}
.main-bg {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5em;
  font-style: unset;
}
.navbar-img {
  width: 50%;
  height: auto;
}
</style>
