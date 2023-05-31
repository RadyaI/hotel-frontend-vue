<template>
    <div class="forbidden">
        <h1 class="title">403</h1>
        <p class="message">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <a href="#" class="button" @click="back">Balik sana</a>
    </div>
</template>
  
<style scoped lang="scss">
.forbidden {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.title {
    font-size: 5rem;
    color: #f00;
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
    background-color: #f00;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #d50000;
}
</style>
  
<script>
export default {
    data() {
        return {
            // level: ''
        }
    },
    methods: {
        back() {
            if (localStorage.getItem('role') === 'admin') {
                location.href = '/admin'
            } else if (localStorage.getItem('role') === 'resepsionis') {
                location.href = '/resepsionis'
            }
        },

    }
}
</script>