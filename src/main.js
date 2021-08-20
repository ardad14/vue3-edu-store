import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartButton from "./components/cart/CartButton";
import CartModal from "./components/cart/CartModal";

const app = createApp({
    data: () =>({
        cartProducts: [],
    }),
    computed: {
        totalAmount() {
            return this.cartProducts.length;
        }
    },
    methods:{
        addToCart(product){
            this.cartProducts.push({...product, amount: 1})
            console.log(this.cartProducts)
        },
        isInCart(id) {
            return !!this.cartProducts.find((item) => item.id === id);
        },
        removeProduct(index) {
          this.cartProducts.splice(index, 1)
        },
        addMore(index) {
            const product = this.cartProducts[index];
            this.cartProducts.splice(index, 1, {...product, amount: product.amount + 1});
        },
        deleteOne(index) {
            const product = this.cartProducts[index];
            if (product.amount > 1) {
                this.cartProducts.splice(index, 1, {...product, amount: product.amount - 1});
            }
        }
    }
});
app.component('cart-button', CartButton)
app.component('cart-modal', CartModal)
app.component('product-list', ProductList)
app.component('product', Product)
app.mount("#app");

