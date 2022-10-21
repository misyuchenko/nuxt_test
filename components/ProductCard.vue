<template>
  <div class="col-12 col-xl-6 col-md-4 mt-3">
    <div class="card">
      <img :src="product.thumbnail" class="card-img-top" alt="products" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">{{ product.price }}</p>
        <p class="card-text">{{ product.rating }}</p>
        <p class="card-text">{{ product.brand }}</p>
        <p class="card-text">{{ product.category }}</p>
        <a href="#" class="btn btn-primary">Идти куда-нибудь</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      requare: true,
    },
  },
};
</script>

<!-- "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details
of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for
Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61,
"brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail":
"https://dummyjson.com/image/i/products/13/thumbnail.webp", "images": [
"https://dummyjson.com/image/i/products/13/1.jpg",
"https://dummyjson.com/image/i/products/13/2.png",
"https://dummyjson.com/image/i/products/13/3.jpg",
"https://dummyjson.com/image/i/products/13/4.jpg",
"https://dummyjson.com/image/i/products/13/thumbnail.webp" ] -->
