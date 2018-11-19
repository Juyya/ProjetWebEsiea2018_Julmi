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
  name: 'Maki',
  data () {
    return {
      title: 'Maki',
      products: [
        {
          productTitle: 'Tuna Roll',
          productDescription:
            'Thon, avocat, cheese (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/maki.png'),
          productId: 1
        },
        {
          productTitle: 'Shrimp Roll',
          productDescription:
            'Crevette, avocat, surimi (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/maki.png'),
          productId: 2
        },
        {
          productTitle: 'Las Vegas Roll',
          productDescription:
            'Saumon mi-cuit, avocat, saumon (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/maki.png'),
          productId: 3
        },
        {
          productTitle: 'Dragon Roll',
          productDescription:
            'Tempura crevette, avocat, concombre (8 pièces) ',
          productPrice: '12,80€',
          image: require('../assets/maki.png'),
          productId: 4
        },
        {
          productTitle: 'Volcano Roll' ,
          productDescription:
            'Tempura crevette, avocat, bonite séchée (8 pièces) ',
          productPrice: '12,80€',
          image: require('../assets/maki.png'),
          productId: 5
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
