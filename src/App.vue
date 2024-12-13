<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: black;
  text-decoration: underline;
  
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
