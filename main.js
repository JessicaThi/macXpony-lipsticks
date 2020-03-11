//Thanks to vueMastery !!

var app = new Vue({
  el: "#app",
  data: {
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
    }
  }
});
