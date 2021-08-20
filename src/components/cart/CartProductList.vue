<template>
  <!-- CartProductsList component -->
  <table class="table cart-table" v-if="amount > 0">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <cart-product-item
        v-for="(product, index) in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :amount="product.amount"
        :index="index"
    />
    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{amount}}</td>
      <td class="text-end">${{amount * price}}</td>
    </tr>
    </tfoot>
  </table>
  <div v-else>
    <h2>Cart is empty</h2>
  </div>
</template>

<script>
import CartProductItem from "./CartProductItem";

export default {
  name: "CartProductList",
  components: {
    CartProductItem,
  },
  computed: {
    products() {
      return this.$root.cartProducts;
    },
    amount() {
      let totalAmount = 0;
      this.$root.cartProducts.forEach(item => {
        totalAmount += item.amount;
      });
      return totalAmount;
    },
    price() {
      let totalPrice = 0;
      this.$root.cartProducts.forEach(item => {
        totalPrice += item.price;
      });
      return totalPrice;
    }
  },
}
</script>
<style scoped>

</style>