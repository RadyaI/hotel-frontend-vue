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

        <section class="food_section layout_padding">
            <div class="container">
                <div class="heading_container heading_center" style="margin-top: -70px;">
                    <h2>
                        Our Room
                    </h2>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="person">Pilih salah satu:</label>
                        <select v-model="max_person" id="person" class="form-control">
                            <option value="">All</option>
                            <option value="1-2">1 - 2 Person</option>
                            <option value="2-4">2 - 4 Person</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="check-in">check-in:</label>
                        <input type="date" id="check-in" v-model="checkin" class="form-control">
                    </div>
                    <div class="col">
                        <label for="check-out">check-out:</label>
                        <input type="date" id="check-out" v-model="checkout" class="form-control">
                    </div>
                </div>
                <div class="filters-content">
                    <div class="row grid">
                        <!-- LIST KAMAR -->
                        <div class="col-sm-6 col-lg-4 all pizza" v-for="kamar in filterKamar" :key="kamar.id_kamar">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + kamar.foto">
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            {{ kamar.nomor_kamar }}
                                        </h5>
                                        <p>
                                            Type: {{ kamar.type_kamar }} / <span class="badge badge-danger"
                                                v-if="kamar.status_kamar == 'dipesan' || kamar.status_kamar == 'dibersihkan'">Unavailable
                                            </span><span class="badge badge-success" v-else>Available </span>
                                        </p>
                                        <span>Max: {{ kamar.max }}</span>
                                        <div class="options">
                                            <h6>
                                                Rp.{{ kamar.harga }} / Malam
                                            </h6>
                                            <span v-if="kamar.status_kamar == 'kosong'"><button class="btn btn-secondary"><i class="bi bi-cart-plus"></i></button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </div>
</template>

<script>
// import navbar from '../components/template/NavBar.vue'
import axios from 'axios'
// import { filter } from 'vue/types/umd';
export default {
    components: {
        // 'Nav-Bar' : navbar
    },
    data() {
        return {
            data_kamar: {},
            max_person: '',
            checkin: '',
            checkout: ''

        }
    },
    created() {
        this.getkamar()
    },
    computed: {
        filterKamar() {
            // if (this.max_person) {
            //     return this.data_kamar.filter((kamar) => kamar.max === this.max_person)
            // } else {
            //     return this.data_kamar
            // }
         
            let filtered = this.data_kamar;
                if(this.max_person !== '') {
                    filtered = filtered.filter(kamar => kamar.max === this.max_person)
                }
                if(this.checkout !== '') {
                    filtered = filtered.filter(kamar => kamar.status_kamar === 'kosong')
                }

                // if(this.checkin && this.checkout) {
                //     const checkindata = new Date(this.checkin)
                //     const checkoutdata = new Date(this.checkout)
                //     filtered = filtered.filter(kamar => {
                //         const bookings = kamar.bookings || []
                //         const tersedia = !bookings.some(booking => {
                //             const bookingstart = new Date(booking.check_in);
                //             const bookingend = new Date(booking.check_out);
                //             return(
                //                 (checkindata >= bookingstart && checkindata < bookingend) ||
                //                 (checkoutdata > bookingstart && checkoutdata <= bookingend) ||
                //                 (checkindata <= bookingstart && checkoutdata >= bookingend)
                //             );
                //         });
                //         return tersedia;
                //     });
                // }
                return filtered;

        },
    },
    methods: {
        getkamar() {
            axios.get('http://localhost:8000/api/getkamar')
                .then(
                    ({ data }) => {
                        this.data_kamar = data
                        console.log(data)
                    }
                )
        }
    }
}
</script>