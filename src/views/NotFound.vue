<template>
    <div class="not-found">
      <h1 class="title">404</h1>
      <p class="message">Halaman yang Anda cari tidak ditemukan.</p>
      <a href="/" class="button">Kembali ke Beranda</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped lang="scss">
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .title {
    font-size: 5rem;
    color: #f8b016;
    margin-bottom: 1rem;
  }
  
  .message {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: #f8b016;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #e6970d;
  }
  </style>
  