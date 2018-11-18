<template>
    <div id="app">
               <div class="row">
      <div class="prod" v-for="(data,index) in products" :key="index">
        <div class="food">
        <img class="imagealacarte" :src="data.image">
         <h5>{{data.productTitle}}</h5>
         <div class="description"><h6>{{data.productDescription}}</h6></div>
         <div class="price"><h6>{{data.productPrice}}</h6></div>
        <div class="addtocart">
            <button class="btnadd">Add to cart</button>
        </div>
      </div>
    </div>
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
          productTitle: 'ABCN',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 1
        },
        {
          productTitle: 'KARMA',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 2
        },
        {
          productTitle: 'Tino',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 3
        },
        {
          productTitle: 'EFG',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 4
        },
        {
          productTitle: 'MLI',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 5
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 6
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 7
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 8
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 9
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 10
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 11
        },
        {
          productTitle: 'Banans',
          productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
          productPrice: '12,80€',
          image: require('../assets/cart.png'),
          productId: 12
        }
      ]
    }
  },

  methods: {
    navigate () {
      // router.push({ name: 'Accueil' })
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
  color: aqua;

}
</style>
