<template>
  <body>
  <div class="Buttons">
  <button @click="Logout">Logout</button>
  </div>
  <div class="AllPosts">
    <div id="post-list">
     <div class="container">
    </div>
      <ul>
        <div class="item" v-for="post in posts" :key="post.id">
            <a class='singlepost' :href="'/api/apost/' + post.id">
            <BlogPost :post="post"/>
            </a>
        </div>
      </ul>
    </div>
  </div>
  <div class="Buttons">
    <a href="/api/addpost"><button>Add post</button></a>
    <button @click="deleteAll">Delete all</button>
  </div>
  </body>
</template>


<script>

import BlogPost from '@/components/BlogPost'

export default {
  name: "AllPosts",
  components:  {
    BlogPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    // Fetch all posts
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    // Delete all posts
    deleteAll() {
      if (confirm("Are you sure you want to delete all posts?")) {
        fetch(`http://localhost:3000/api/posts/`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              this.posts = []; // Clear the posts in the UI
              alert("All posts have been deleted!");
            } else {
              alert("Failed to delete posts.");
            }
          })
          .catch((err) => {
            console.error("Error deleting posts:", err.message);
            alert("An error occurred while trying to delete posts.");
          });
      }
    },
    Logout() {
      this.$store.dispatch('logOut');
      this.$router.push('/api/login');
    }
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  color: black;
  text-decoration: none;
}
#post-list {
  background: beige;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 500px;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: black;
}

.Buttons {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  gap: 100px; 
  margin: 25px;
}

.Buttons button {
  background-color: orange;
  padding: 15px 20px;
  margin: 0; 
  border-radius: 15px;
  border: none;
  cursor: pointer;
}

.Buttons button:hover {
  background-color: darkorange; 
}

@media (max-width: 768px) {
  #post-list {
    width: auto;
  }
}

</style>
