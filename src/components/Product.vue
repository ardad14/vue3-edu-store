<template>
  <div class="col-md-6 col-lg-4 py-3">
    <div class="card py-3">
      <img class="card-img-top" :src="image" alt="macbook-pro">
      <div class="card-body">
        <h5 class="card-title">
          {{name}}
        </h5>
        <p class="card-subtitle mt-2 mb-3">
          {{category}}
        </p>
        <h5 class="fs-3 text-success">
          ${{price}}
        </h5>
        <p class="mt-3">
          Stock:
          <strong class="text-success">{{isAvailable ? "Available" : "Not available"}}</strong>
        </p>
        <button :disabled="!isAvailable" @click="addToCart" :class="`btn ${isAvailable ? 'btn-success' : 'btn-secondary'} w-100 shadow-none`">
          {{isAvailable ? "Add to cart" : "Added"}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name: {
      type: String,
      isRequired: true,
      default: "Default laptop"
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    isAvailable: {
      type: Boolean
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart');
    }
  }
}
</script>

<style scoped>
</style>