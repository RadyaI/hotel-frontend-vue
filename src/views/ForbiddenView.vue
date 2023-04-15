<template>
    <div>
        <h1 style="margin-top: 10%;" align="center">Forbidden</h1>
        <!-- <h3 align="center" v-if="localStorage.getItem('role') === 'admin'">Anda Bukan Resepsionis</h3>
        <h3 align="center" v-else-if="localStorage.getItem('role') === 'resepsionis'">Anda Bukan Admin</h3> -->
        <!-- <a href="/" align="center" >Kembali</a> -->
        <button style="display: block; margin: 0 auto;" class="btn" @click="back">Kembali</button>
    </div>
</template>
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
            } else if(localStorage.getItem('role') === 'resepsionis') {
                location.href = '/resepsionis'
            }
        },

    }
}
</script>