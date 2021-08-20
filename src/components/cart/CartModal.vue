<template>
  <!-- CartModal component -->
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle" >
            Shopping Cart ({{ totalAmount }} Items)
          </h5>
        </div>
        <div v-if="totalAmount > 0" class="modal-body p-4">
          <cart-product-list></cart-product-list>
          <cart-billing-form></cart-billing-form>
        </div>
        <div v-else class="text-center p-4"> 
          <h2>Cart is empty</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductList from './CartProductList';
import CartBillingForm from './CartBillingForm';

export default {
  name: "CartModal",
  components: {
    CartProductList,
    CartBillingForm
  },
  computed: {
    totalAmount() {
      return this.$root.totalAmount;
    }
  }
}
</script>

<style scoped>

</style>