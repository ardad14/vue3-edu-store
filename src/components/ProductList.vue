<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">

          <!-- Product component -->
          <product
              v-for="(product, index) in products"
              :key="product.id"
              :id="product.id"
              :name="product.name"
              :category="product.category"
              :price="product.price"
              :image="product.image"
              :isAvailable="product.is_available"
              @add-to-cart="addToCart(product)"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductsList",
  components: {
    Product,
  },
  data: () => ({
    products: []
  }),
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();
      this.products = products;
    },
    addToCart(product) {
      this.$root.addToCart(product);
    }
  }
}
</script>

<style scoped>
</style>