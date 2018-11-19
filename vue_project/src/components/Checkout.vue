<template>
    <header>
        <div id="app">
        <h1>{{ title }}</h1>
    <h5>{{ msg }}</h5>
    </div>
    </header>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      title: 'Checkout',
      msg: 'Vous retrouvez ci-dessous les articles que vous souhaitez commander'
    }
  }
}
</script>
