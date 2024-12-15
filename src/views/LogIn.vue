<template>
  <div class="form">
    <h3>Log In</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">Log In</button>
      <button @click='this.$router.push("/api/signup")' class="center">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn", 
data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {
LogIn() {
    var data = {
        email: this.email,
        password: this.password
    };

    fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            alert(data.error);
            throw new Error(data.error);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        this.$store.dispatch('logIn'); // Set user as logged in
        this.$router.push("/api");
      })
      .catch((error) => {
        console.log("Error during login:", error);
      });
    }
  }
}
</script>

<style scoped>
.form {
  width: 420px;
  margin: 30px auto;
  background: beige;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: black;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: black;
}
button {
  background: orange;
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: black;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}

button:hover {
  background: darkorange;
}

@media (max-width: 768px) {
  .form {
    width: auto;
  }
}
</style>
