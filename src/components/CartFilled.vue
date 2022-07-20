<template>
<!-- show when cart is empty -->
<section v-if="cartItem.length < 1" class="cart-empty absolute right-20 top-20 bg-white rounded-md shadow-lg px-4 py-10 ">
 <div class=" box-border round-md">
  <div class="font-bold text-sm border-b-2 border-gray-100">
    Cart
  </div>
  <div class="text-center pt-8 px-6">
    Your cart is empty
  </div>
  </div>
</section>
<!-- show when cart is filled -->
<section v-else class=" cart-filled absolute right-20 top-20 bg-white rounded-md shadow-lg px-4 sm:py-16 lg:py-10 ">
 <div class=" box-border round-md">
  <div class="font-bold text-sm border-b-2 border-gray-100">
    Cart
  </div>
  <div v-for="(cartItem,index) in cartItem" :key="index" class="flex flex-row justify-between pt-8 px-4">
    <div class="px-2">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class="prd-img">
    </div>
    <div class="px-2">
      <p> {{cartItem.name}}</p>
      <p> {{cartItem.price}} x {{cartItem.quantity}} <span class="font-bold">{{cartItem.price * cartItem.quantity}}</span></p>
    </div>
     <div class="px-2 text-left text-gray-300">
      <font-awesome-icon icon="fa-solid fa-trash" @click="deleteCart" />
      </div>
  </div>
  <button class="my-4 mx-8 px-10 py-3 w-3/4 bg-orange rounded-md text-white font-bold"> Checkout </button>
  </div>
  </section>
</template>

<script>

export default {
  methods: {
    deleteCart () {

    }
  },
  computed: {
    cartItem () {
      return this.$store.state.cartItem
    }
  }
}
</script>

<style scoped>
.prd-img{
border-radius: 10px;
 float: left;
 width: 50px;
}
</style>
