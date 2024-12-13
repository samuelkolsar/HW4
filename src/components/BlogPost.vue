<template>
  <div class="post">
  <!-- esimene kuupäev, teine postitus -->
    <h2>{{ post.date || 'Untitled' }}</h2>
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
};
</script>

<style scoped>

  .post {
    margin-bottom: 20px;
  }
  
  .like-button {
    cursor: pointer;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
    padding: 10px;
    margin: 10px;
}
    
.div2 {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
}

.div4 {
    grid-row: span 4 / span 4;
    grid-column-start: 5;
    grid-row-start: 2;
}

.div5 {
    grid-column: span 3 / span 3;
    grid-row: span 5 / span 5;
    grid-column-start: 2;
    background-color: #f0f0f0;
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

.post:hover {
  background-color: darkorange;
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
    .parent {
        grid-template-columns: repeat(3, 1fr);
        gap: 4px;
        padding: 0;
        margin: 0;
    }

    .div2, .div4, .div5 {
        grid-column: span 3 / span 3;
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
  