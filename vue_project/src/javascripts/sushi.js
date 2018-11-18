const vm = new Vue({
    el: "#addtocart",
    data: {
      
    },
    computed: {
      total() {
        var total = 0;
        for(var i = 0; i < this.items.length; i++) {
          total += this.items[i].price;
        }
        return total;
      }
    },
    methods: {
      addToCart(item) {
        item.quantity += 1;
        this.items.push(item);
      },
      removeFromCart(item) {
        item.quantity -= 1;
        this.items.splice(this.items.indexOf(item), 1);
      }
    }
  });