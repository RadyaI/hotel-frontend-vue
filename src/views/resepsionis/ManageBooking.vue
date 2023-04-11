<template>
    <div class="sub_page">
        <div class="hero_area">
            <div class="bg-box">
                <img src="images/hero-bg.jpg" alt="">
            </div>
            <!-- header section strats -->
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                Cihuy
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/room">Room</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/admin">Admin</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/resepsionis">Resepsionis</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/bookroom">Book Room</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="" class="user_link">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <a class="cart_link" href="#">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;"
                                        xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                                                                                                                                                                                                                                                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                                                                                                                                                                                                                                                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                                                                                                                                                                                                                                                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                                                                                                                                                                                                                                                   C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                                                                                                                                                                                                                                                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
                                </a>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a href="" class="order_online">
                                    Booking Online
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->
        </div>

        <section class="about_section layout_padding">
            <div class="container  ">

                <div class="row">
                    <div class="col-md-6">
                        <div class="detail-box">
                            <div class="heading_container">
                                <h2>
                                    Welcome to Resepsionis Dashboard
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- BAWAH BACKGROUND ABU -->
        <header class="header_section" style="background-color: black;">
            <div class="container">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                    <a class="navbar-brand" href="/resepsionis">
                        <span>
                            RESEPSIONIS
                        </span>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/resepsionis">home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/managebooking">Manage Booking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/confirmed">confirmed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ongoing">Ongoing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cleaned">Cleaned</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!-- END NAVBAR FOR ADMIN -->
        <h2 class="mt-3" style="font-family:'Times New Roman';" align="center">BOOKING</h2>
        <div class="container">
            <div class="input-container">
                <!-- <input type="text" v-model="cari_id" class="input mb-3" placeholder="search by id"> -->
                <!-- <label for="date">Search by Check-In date: </label> -->
                <input type="date" id="date" v-model="cari_tanggal" class="input mb-3">
            </div>
            <!-- DATA PEMESANAN MULAI DARI SINI -->
            <div v-for="booking in filterdata" :key="booking.id_transaksi" class="card mt-2">
                <input type="hidden" v-model="id">
                <div class="card-header">
                    {{ booking.tgl_pesan }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ booking.email }} / ID: {{ booking.id_transaksi }}</h5>
                    <p class="card-text"><b>Check-In:</b> {{ booking.check_in }} <br> <b>Check-Out:</b> {{ booking.check_out
                    }}
                    </p>
                    <p class="card-text">
                        <span v-if="booking.status == 'dipesan'">Status: <span class="text-danger">Belum di
                                konfirmasi</span></span>
                        <span v-else-if="booking.status == 'dikonfirmasi'">Status: <span class="text-success">Sudah Di
                                Konfirmasi</span></span>
                        <span v-else-if="booking.status == 'dipakai'">Status: <span class="text-info">Sedang di
                                gunakan</span></span>
                        <span v-else>Status: <span class="text-warning">Belum bisa di gunakan</span></span>
                    </p>
                    <button class="btn btn-outline-dark" @click="detailbooking(booking)" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">Update</button>
                </div>
            </div>
            <!-- END DATA PEMESANAN -->
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>


        <!-- MODAL DETAIL -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Booking Konfirmasi</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="updatebooking">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <label for="nama">Atas nama: </label>
                                    <input type="text" id="nama" class="form-control" v-model="nama_tamu">
                                </div>
                                <div class="col">
                                    <label for="email">Email: </label>
                                    <input type="email" id="email" class="form-control" v-model="email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="pesan">Tanggal Pesan: </label>
                                    <input type="date" id="pesan" class="form-control" v-model="tgl_pesan">
                                </div>
                                <div class="col">
                                    <label for="checkin">Check-In: </label>
                                    <input type="date" id="checkin" class="form-control" v-model="check_in">
                                </div>
                                <div class="col">
                                    <label for="checkout">Check-Out: </label>
                                    <input type="date" id="checkout" class="form-control" v-model="check_out">
                                </div>
                            </div>
                            <hr style="border: 1.5px solid black; opacity: 1;">
                            <input type="hidden" v-model="id_transaksi">
                            <div class="row">
                                <div class="col">
                                    <label for="nomor_kamar">Nomor Kamar: </label>
                                    <input type="number" class="form-control" id="nomor_kamar" required v-model="no_kamar">
                                    <!-- <span v-if="this.no_kamar == '' "><small>*required</small></span> -->
                                </div>
                                <div class="col">
                                    <label for="type">Type Kamar: </label>
                                    <input type="text" class="form-control" id="type" v-model="type_kamar">
                                </div>
                                <div class="col">
                                    <label for="jumlah">Jumlah Kamar: </label>
                                    <input type="number" class="form-control" id="jumlah" v-model="jumlah_kamar">
                                </div>
                                <div class="col">
                                    <label for="harga">Total Harga: </label>
                                    <input type="number" class="form-control" id="harga" v-model="total_harga">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                            <input type="submit" class="btn btn-outline-dark" value="Konfirmasi">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL DETAIL -->

        <!-- MODAL EDIT USER -->

        <!-- END MODAL EDIT USER -->

    </div>
</template>
<style>
.input-container {
    width: 220px;
    position: relative;
}


.input {
    width: 100%;
    height: 40px;
    padding: 10px;
    transition: .2s linear;
    border: 2.5px solid black;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.input:focus {
    outline: none;
    border: 0.5px solid black;
    box-shadow: -5px -5px 0px black;
}

.input-container:hover>.icon {
    animation: anim 1s linear infinite;
}

@keyframes anim {

    0%,
    100% {
        transform: translateY(calc(-50% - 5px)) scale(1);
    }

    50% {
        transform: translateY(calc(-50% - 5px)) scale(1.1);
    }
}
</style>
<script>
// import navbar from '../components/template/NavBar.vue'
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            bookingdata: {},
            cari_id: '',
            cari_tanggal: '',
            nama_tamu: '',
            email: '',
            tgl_pesan: '',
            check_in: '',
            check_out: '',
            id_transaksi: '',
            type_kamar: '',
            jumlah_kamar: '',
            total_harga: ''
        }
    },
    created() {
        this.getbooking()
        this.detailbooking()
    },
    computed: {
        filterdata() {
            let filtered = this.bookingdata
            if (this.cari_tanggal) {
                filtered = filtered.filter(booking => booking.check_in === this.cari_tanggal)
            }
            return filtered
        }
    },
    methods: {
        getbooking() {
            axios.get('http://localhost:8000/api/notconfirmed')
                .then(
                    ({ data }) => {
                        this.bookingdata = data
                        console.log(data)
                    }
                )
        },
        detailbooking(booking) {
            axios.get('http://localhost:8000/api/gettransaksibyid/' + booking.id_transaksi)
                .then(
                    (response) => {
                        console.log(response.data)
                        this.nama_tamu = response.data.nama_tamu
                        this.email = response.data.email
                        this.tgl_pesan = response.data.tgl_pesan
                        this.check_in = response.data.check_in
                        this.check_out = response.data.check_out
                        this.id_transaksi = response.data.id_transaksi
                        this.type_kamar = response.data.type_kamar
                        this.total_harga = response.data.total_harga
                        this.jumlah_kamar = response.data.jumlah_kamar
                    }
                )
        },
        updatebooking() {
            swal({
                icon: 'warning',
                title: 'Ingin Konfirmasi booking?',
                dangerMode: true,
                buttons: true,
            }).then(
                (konfirmasi) => {
                    if (konfirmasi) {
                        let data = {
                            id_transaksi: this.id_transaksi,
                            no_kamar: this.no_kamar
                        }
                        axios.put('http://localhost:8000/api/konfirmasi/' + this.id_transaksi, data)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil Konfirmasi'
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);

                                }
                            )
                    } else {
                        swal({
                            icon: 'error',
                            title: 'Gagal Konfirmasi'
                        })
                    }
                }
            )
                .catch(
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Gagal Konfirmasi'
                        })
                    }
                )
        }
    }
}
</script>