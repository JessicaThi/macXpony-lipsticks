//Thanks to vueMastery !!
Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
    <div class="cart"><p>Cart({{ cart }})</p></div>
    <div class="product-image">
      <img :src="image" />
    </div>
    <div class="product-info">
      <h1>{{ brand }}</h1>
      <div class="color">
        <div
          class="color-box"
          v-for="(lipstick, index) in lipsticks"
          :key="lipstick.lipstickId"
          :style="{backgroundColor: lipstick.lipstickColor}"
          @mouseover="updateProduct(index)"
        ></div>
      </div>
      <p>Shipping: {{ shipping }}</p>
      <div class="product-stock">
        <button
          class="button"
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Add to cart
        </button>
        <p v-if="inStock">In stock</p>
        <p v-else>Out of stock</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      brand: "Mac Comestics - Pony Park 포니",
      product: "Lipsticks",
      selectedLipstick: 0,
      lipsticks: [
        {
          lipstickId: 1,
          lipstickColor: "#df7493",
          lipstickName: "Beck and Call",
          lipstickImage: "imageS/beck-and-call.png",
          lipstickQuantity: 20
        },
        {
          lipstickId: 2,
          lipstickColor: "#e45e78",
          lipstickName: "Cordon Bleu",
          lipstickImage: "images/cordon-bleu.png",
          lipstickQuantity: 0
        },
        {
          lipstickId: 3,
          lipstickColor: "#ed689c",
          lipstickName: "Love is Blind",
          lipstickImage: "images/love-is-blind.png",
          lipstickQuantity: 11
        }
      ],
      cart: 0
    };
  },
  methods: {
    updateProduct(index) {
      this.selectedLipstick = index;
      console.log(index);
    },

    addToCart() {
      this.cart += 1;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.lipsticks[this.selectedLipstick].lipstickImage;
    },
    inStock() {
      return this.lipsticks[this.selectedLipstick].lipstickQuantity;
    },
    shipping() {
      if (this.premium) {
        return "free";
      }
      return "2,99 €";
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
});
