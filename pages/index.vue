<template>
  <div>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "IndexPage",
  components: { ProductCard },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({ products: "products/GET_PRODUCTS" }),
  },
  methods:{
    ...mapActions({fetchProducts:"products/FETCH_PRODUCTS"})
  }
};
</script>
<style>
.center {
  text-align: center;
}
.black {
  background-color: aqua;
}
</style>
