import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartButton from "./components/cart/CartButton";

const app = createApp({
    data: () =>({
        cartProducts: [],
    }),
    methods:{
        addToCart(product){
            console.log('products main')
            this.cartProducts.push(product)
            console.log(this.cartProducts)
        }
    }
});
app.component('cart-button', CartButton)
app.component('product-list', ProductList)
app.component('product', Product)
app.mount("#app");

