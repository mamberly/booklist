<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="book in books" :key="book.bookID">
      <div class="info">
        <h1>{{book.title}}</h1>
        <h2>{{book.authors}}</h2>
        <p>Published: {{book.publication_date}}</p>
      </div>
      <div class="price">
        <h2>{{book.rating}}</h2>
        <button v-on:click="addToFavorites(book)" class="auto">Add To Favorites</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  },
  methods: {
    addToFavorites(item) {
      var index = this.$root.$data.favorites.indexOf(item);
      if (index == -1)
        this.$root.$data.favorites.push(item);
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
  color: white;
  background-color: #3B5971;
}

.info h2 {
  font-size: 18px;
  color: white;
}

.info p {
  margin: 0px;
  font-size: 15px;
  background-color: #76B8EC;
  color: #3B5971;
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
  margin-left: 100px;
}
</style>
