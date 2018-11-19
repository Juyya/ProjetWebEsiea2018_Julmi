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
  name: 'Menu Sushi',
  data () {
    return {
      title: 'Menu Sushi',
      products: [
        {
          productTitle: 'S1 Kochi',
          productDescription:
            '1 soupe, 1 salade, 8 sushi saumon',
          productPrice: '12,80€',
          image: require('../assets/sushi.png'),
          productId: 1
        },
        {
          productTitle: 'S2 Ibaraki',
          productDescription:
            '1 soupe, 1 salade, 4 sushi saumon, 4 sushi thon',
          productPrice: '12,80€',
          image: require('../assets/sushi.png'),
          productId: 2
        },
        {
          productTitle: 'S3 Shimane',
          productDescription:
            '1 soupe, 1 salade, 6 sushi variés',
          productPrice: '12,80€',
          image: require('../assets/sushi.png'),
          productId: 3
        }
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
        /*background-color: red;*/
    }

    .row{
     padding-left: 130px;
     padding-right: 50px;
}

.description{
  text-align: left;
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
  text-align: center;
}

h1{
  color :white;
  text-align: center;
}
</style>
