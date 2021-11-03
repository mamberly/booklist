<template>
<div>
<h1>Find your next author to follow</h1>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
      Filter by different authors here
      <hr/>
      <h1>We've found {{books.length}} books for you!</h1>
    </div>
  </div>
  <BookList :books="books" />
</div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    BookList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter(book => book.authors.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>
