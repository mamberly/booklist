<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="book in books" :key="book.bookID">
      <div class="info">
        <h1>{{book.title}}</h1>
        <h2>{{book.authors}}</h2>
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
    books: Array
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  background-image: url("../assets/book.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.info {
  margin-top: 20px;
  color: #000;
  padding: 10px 20px;
}

.info h1 {
  font-size: 20px;
  color: #DA6990;
  background-color: black;
}

.info h2 {
  font-size: 18px;
  color: white;
}

.info p {
  margin: 0px;
  font-size: 15px;
  background-color: #DA6990;
  color: white;
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
  margin-left: 125px;
}
</style>
