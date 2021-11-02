<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="book in books" :key="book.bookID">
      <div class="info">
        <h1>{{book.title}}</h1>
        <p>{{book.author}}</p>
        <p>{{book.publication_date}}</p>
      </div>
      <div class="price">
        <h2>{{book.rating}}</h2>
        <button v-on:click="removeFromFavorites(book)" class="auto">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'FavoritesList',
  props: {
    products: Array
  },
  methods: {
    removeFromFavorites(item) {
      var index = this.$root.$data.favorites.indexOf(item);
      if (index > -1)
        this.$root.$data.favorites.splice(index, 1);

    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: red;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
