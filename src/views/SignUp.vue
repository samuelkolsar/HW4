<template>
  <body>
  <div class="form">
    <h3>Sign Up</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div v-if="errMsg">{{errMsg}} </div>
    <button @click="SignUp" class="SignUp">Sign Up</button>
  </div>
  </body>
</template>

<script>

export default {
name: "SignUp",

data: function() {
    return {
   email: '',
   password: '',
   errMsg: '',
  }
  },
watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },
SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => {
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
      })
      .then((data) => {
        console.log(data);
        
        if (data.success) {
          this.$store.dispatch('logIn'); 
          this.$router.push("/api/allposts"); 
        } else {
          
          this.errMsg = data.error || "Sign-up failed.";
        }
      })
      .catch((e) => {
        console.error("Error during sign-up:", e);
        this.errMsg = "An unexpected error occurred. Please try again.";
      });
    },
  }, 
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
  margin-top: 20px;
  color: black;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}

button:hover {
  background: darkorange;
}

div {
  padding: 10px 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .form {
    width: auto;
  }
}

</style>
