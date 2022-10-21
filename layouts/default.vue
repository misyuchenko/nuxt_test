<template>
  <main>
    <NavBar />
    <section class="main">
      <div class="container">
        <Nuxt />
      </div>
    </section>
    <LazyAppFooter />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar";
import AppFooter from "@/components/AppFooter";
export default {
  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<style>
/* a,
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
body {
  margin: 0 auto;
} */
.main {
  background-color: aqua;
}
.container {
  max-width: 95%;
  padding: 1%;
  background-color: rgb(247, 240, 231);
}
</style>
