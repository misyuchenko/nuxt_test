<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
