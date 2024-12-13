<template>
  <div class="form">
    <h3>LogIn</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <button @click='this.$router.push("/api/signup")' class="center">Signup</button>
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
            // If the response is not OK (status 401, 500, etc.), display the error and stay on the login page
            return response.json().then((data) => {
                console.log("Error:", data.error);  // Log the error from the server
                alert(data.error);  // Optionally, display an error message to the user
                throw new Error(data.error);  // Throw error to handle it in the catch block
            });
        }
        return response.json(); // If response is ok, proceed to the next .then
    })
    .then((data) => {
        console.log("Login successful:", data);
        // Redirect to the home page if login is successful
        location.assign("/api");
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
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
label {
  color: rgb(8, 110, 110);
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
  color: blue;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: white;
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
</style>