<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="body">Body: </label>
    <input name="body" type="text" id="body" required v-model="post.body" />
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
        date: "",
      },
    };
  },
  methods: {
    addPost() {
      // Set the current date if not provided
      if (!this.post.date) {
        this.post.date = new Date().toISOString(); // ISO format, e.g., '2024-12-14T22:00:00.000Z'
      }

      var data = {
        body: this.post.body,
        date: this.post.date,
      };

      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json()) // Ensure you parse the JSON response
      .then((responseData) => {
        console.log(responseData);
        this.$router.push("/api/allposts"); // Redirect after successful post creation
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
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

@media (max-width: 768px) {
  .form {
    width: auto;
  }
}
</style>
