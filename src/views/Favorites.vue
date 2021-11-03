<template>
<div>
<h1>Your favorites</h1>
<h2>You have {{books.length}} favorites...obviously you need to go find more!</h2>
<hr/>
  <FavoritesList :books="books" />
</div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
export default {
  name: 'Home',
  components: {
    FavoritesList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    books() {
      return this.$root.$data.favorites;
    }
  }
}
</script>
