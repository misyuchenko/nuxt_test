<template>
  <div class="col-12 col-xl-6   col-md-4 mt-3">
    <div class="card">
      <img src="@/img/mountain.jpg" class="card-img-top" alt="post" />
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content</p>
        <a href="#" class="btn btn-primary">Идти куда-нибудь</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      requare: true,
    },
  },
};
</script>
