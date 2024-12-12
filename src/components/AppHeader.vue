<template>
    <header>
    <nav>
      <router-link v-if="isLoggedIn" to="/api/allposts">Posts</router-link> |
      <router-link to="/api/addpost">Add a Post</router-link> |
      <router-link to="/api/signup">SignUp</router-link>|
      <router-link to="/api/login">Login</router-link>
    </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
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
  color: #2c3e50;
  text-decoration: none;
}

</style>