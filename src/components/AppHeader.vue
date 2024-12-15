<template>
  <header>
    <nav>
      <router-link v-if="isLoggedIn" to="/api/allposts">Posts</router-link>
      <span v-else title="You must log in to access Posts">Posts</span>
      |
      <router-link to="/api/contact">Contact us</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
};
</script>
  
<style>
  header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  padding: 15px 20px;
  margin: 10px;
  border-radius: 15px;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

</style>
