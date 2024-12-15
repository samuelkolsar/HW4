<template>
  <div class="post">
    <!-- Display formatted date or a fallback message -->
    <p>{{ formattedDate || 'No date available' }}</p>
    <p>{{ post.body || 'No content available' }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Formatting the date to be in 'Dec 14, 2024' format
    formattedDate() {
      if (!this.post.date) return ""; // Avoid errors if the date is missing

      const date = new Date(this.post.date);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short", // Abbreviated month (e.g., Dec)
        day: "numeric", // Numeric day (e.g., 14)
      });
    },
  },
};
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}

.like-button {
  cursor: pointer;
}

.post-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  background-color: orange;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  box-shadow: black;
}

.post h2 {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: small;
  font-weight: normal;
}

div > p {
  font-style: italic;
  text-align: left;
}

.post p + p {
  font-weight: bold;
}

@media (max-width: 768px) {
  .post-list {
    gap: 4px;
  }
}

.like-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.like-button {
  width: 60px;
  height: auto;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}

.like-counter {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}
</style>
