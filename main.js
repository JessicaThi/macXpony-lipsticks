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
      ]
    };
  },
  methods: {
    updateProduct(index) {
      this.selectedLipstick = index;
      console.log(index);
    },

    addToCart() {
      this.$emit(
        "add-to-cart",
        this.lipsticks[this.selectedLipstick].lipstickId
      );
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

Vue.component("product-review", {
  template: `
  <div class="product-review">
    <form class="review-form" @submit.prevent="onSubmit">

      <div class="error" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>

      <div class="field">
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </div>
      
      <div class="field">
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review" rows="4"></textarea>
      </div>
      
      <div class="field">
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>
          
      <div class="button-form">
        <input type="submit" value="Submit" class="button">  
      </div>    
    </form>
  </div>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
      // reviews: []
    };
  },
  methods: {
    // addReview(productReview) {
    //   this.reviews.push(productReview);
    // },
    addReview(productReview) {
      this.$emit("add-review", productReview);
    },
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        this.addReview(productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
        this.errors = [];
      } else {
        this.errors = [];
        if (!this.name) this.errors.push("Name required.");
        if (!this.review) this.errors.push("Review required.");
        if (!this.rating) this.errors.push("Rating required.");
      }
    }
  }
});

Vue.component("product-tab", {
  template: `
  <div class="product-tab">
    <span :class="{activeTab: selectedTab === tab}" class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectedTab = tab">{{ tab }}</span>

    <div v-if="selectedTab == 'Reviews'" class="display-review">
      <p v-if="!reviews.length">There are no review yet.</p>
      <ul>
        <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>

    <product-review v-else @add-review="addReview"></product-review>
  </div>
  `,
  data() {
    return {
      tabs: ["Reviews", "Make a review"],
      selectedTab: "Reviews",
      reviews: []
    };
  },
  methods: {
    addReview(productReview) {
      this.reviews.push(productReview);
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});
