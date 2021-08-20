<template>
  <h5>
    Billing details
  </h5>
  <form @submit.prevent="placeOrder" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="'form-control ' + formErrors.firstName" id="firstName" placeholder="First Name">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" :class="'form-control ' + formErrors.lastName" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" :class="'form-control ' + formErrors.city" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" :class="'form-control ' + formErrors.address" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" :class="'form-control ' + formErrors.email" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" :class="'form-control ' + formErrors.phone" id="phone" placeholder="+38(099) 999-99-99">
    </div>
    <button type="submit" class="btn btn-success">Place over</button>
  </form>
</template>

<script>
export default {
  name: "CartBillingForm",
  data: () => ({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: "",
    phone: "",
    formErrors: {}
  }),
  watch: {
    firstName() {
      this.formErrors.firstName = "is-valid";
      if (this.firstName.length <= 4 || this.firstName.length > 32) {
        this.formErrors.firstName = "is-invalid";
      }
    },
    lastName() {
      this.formErrors.lastName = "is-valid";
      if (this.lastName.length <= 4 || this.lastName.length > 32) {
        this.formErrors.lastName = "is-invalid";
      }
    },
    city() {
      this.formErrors.city = "is-valid";
      if (this.city.length > 32) {
        this.formErrors.city = "is-invalid";
      }
    },
    address() {
      this.formErrors.address = "is-valid";
      if (this.address.length <= 7 || this.address.length > 50) {
        this.formErrors.address = "is-invalid";
      }
    },
    email() {
      this.formErrors.email = "is-valid";
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
        this.formErrors.email = "is-invalid";
      }
    },
    phone() {
      this.formErrors.phone = "is-valid";
      if ((this.phone.length <= 8 || this.phone.length > 15) || !(/^-{0,1}\d+$/.test(this.phone))) {
        this.formErrors.phone = "is-invalid";
      }
    },
  },
  methods: {
    placeOrder() {
      console.log(this.firstName);
      this.$root.cartProducts.forEach(item => {
        for (let i = 0; i < item.amount; i++) {
          console.log(item);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>