<template>
    <footer>
    Group T is a non-profit organization with the task to complete homeworks as well as possible. <br>
    Copyright 2024 Group T
    </footer>
  </template>  
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  footer {
    display: flex;
    text-align: left;
    justify-content: space-between; /* Adjust content alignment if needed */
    align-items: center;
    background-color: orange;
    padding: 10px 20px;
    border-radius: 20px;
    height: auto;
    width: 100%;
    box-sizing: border-box; /* Ensure padding doesn't increase width */
  }
  </style>
  