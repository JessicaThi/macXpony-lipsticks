//Thanks to vueMastery !!

var app = new Vue({
  el: "#app",
  data: {
    product: "Mac Comestics - Pony Park 포니 ",
    image: "beck-and-call.png",
    lipsticks: [
      {
        lipstickId: 1,
        lipstickColor: "#df7493",
        lipstickName: "Beck and Call",
        lipstickImage: "beck-and-call.png"
      },
      {
        lipstickId: 2,
        lipstickColor: "#e45e78",
        lipstickName: "Cordon Bleu",
        lipstickImage: "cordon-bleu.png"
      },
      {
        lipstickId: 3,
        lipstickColor: "#ed689c",
        lipstickName: "Love is Blind",
        lipstickImage: "love-is-blind.png"
      }
    ],
    cart: 0
  },
  methods: {
    updateProduct(lipstickImage) {
      this.image = lipstickImage;
    },

    addToCart() {
      this.cart += 1;
    }
  }
});
