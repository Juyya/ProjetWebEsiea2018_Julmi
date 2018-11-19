<template>
    <div id="app">
      <h1>{{title}}</h1>
               <div class="row">
      <div class="prod" v-for="(data,index) in products" :key="index">
       <!-- <div class="food"> -->
        <img class="imagealacarte" :src="data.image">
         <h5>{{data.productTitle}}</h5>
         <div class="description"><h6>{{data.productDescription}}</h6></div>
         <div class="price"><h6>{{data.productPrice}}</h6></div>
        <div id="addtocart" v-on:click="addtocart">
            <button>add to cart</button>
        </div>
      </div>
    <!--</div>-->
            </div>
    </div>
</template>

<script>
export default {
  name: 'Boissons',
  data () {
    return {
      title: 'Boissons',
      products: [
        {
          productTitle:
            'Orangina',
          productPrice: '2,80€',
          image: require('../assets/orangina.png'),
          productId: 3
        },
        {
          productTitle: 'Ice tea',
          productPrice: '2,80€',
          image: require('../assets/icetea.png'),
          productId: 4
        },
      ]
    }
  },

   methods: {
    addtocart (products) {
       console.log("bn,;:lkj,nbvhbjkmojkbhvk")
      console.log(JSON.stringify(products))
      this.$store.commit('addItemPanier',products)
    }
  }
}
</script>

<style scoped>
    .description{
        text-align: center;
    }

    .row{
     padding-left: 130px;
     padding-right: 50px;
}

.description{
  text-align: center;
}

.prod{
  width: 300px;
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
}

h6,
h5 {
  color:white;
}

h1{
  color:white;
  text-align: center;
}

</style>
