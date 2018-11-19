import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

   const state =  {
      Panier: []
    }

   const   getters = {
      nbItemPanier: state => {
        return state.Panier.length
      }
    }
    const mutations = {
      addItemPanier (state, item) {
        state.Panier.push(item)
        console.log(state.Panier.length)
      }    
    }

   /* const actions = {
        }
      }*/
  


export default new Vuex.Store({
    state,
    getters,
 //   actions,
    mutations
  })