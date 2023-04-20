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
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="/admin">Admin</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/resepsionis">Resepsionis</a>
                                </li> -->
                                <li class="nav-item">
                                    <a class="nav-link" href="/checkbooking">Check Booking</a>
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
                        <label for="person">Pilih satu:</label>
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
                                    <!-- <div class="img-box">
                                        <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + kamar.foto">
                                    </div> -->
                                    <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + kamar.foto"
                                        style="width:357px;height:250px;" class="card-img-top">
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
                                            </h6><br>
                                            <div class="btn-group">
                                                <span v-if="kamar.status_kamar == 'kosong'"><button
                                                        class="btn btn-secondary" data-bs-toggle="modal"
                                                        data-bs-target="#addbooking" @click="detailkamar(kamar)"><i
                                                            class="bi bi-cart-plus"></i></button></span>
                                            </div>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#detail"
                                            @click="detailkamar(kamar)">more info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- MODAL NEW BOOKING -->
        <div class="modal fade" id="addbooking" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-family: 'Times New Roman';">Booking
                            Now!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + foto"
                                    style="width:220px;height:180px; margin-left:30px;">
                            </div>
                            <div class="col">
                                <!-- <h3 style="margin-left: -100px;">Type: {{ type_kamar }}</h3>
                                <h5 style="margin-left: -100px;">Max Person:  {{ max }}</h5>
                                <h5 style="margin-left: -100px;">Deskripsi {{ deskripsi }}</h5> -->
                                <table class="table table-striped" style="margin-left: -100px;">
                                    <tr>
                                        <th>Type :</th>
                                        <td>{{ type_kamar }}</td>
                                    </tr>
                                    <tr>
                                        <th>Max Person :</th>
                                        <td>{{ max }}</td>
                                    </tr>
                                    <tr>
                                        <th>Deskripsi :</th>
                                        <td>{{ deskripsi }}</td>
                                    </tr>
                                    <tr>
                                        <th>Harga / Malam :</th>
                                        <td>{{ harga }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <hr style="border: 1px solid black; opacity: 1;">

                        <!-- <hr style="border: 1px solid black; opacity: 1;"> -->
                        <form @submit.prevent="booknow">
                            <div class="row">
                                <div class="col">
                                    <input type="text" required v-model="nama_tamu" class="form-control"
                                        placeholder="Masukkan nama anda..." autocomplete="off">
                                </div>
                                <div class="col">
                                    <input type="email" required v-model="email" class="form-control"
                                        placeholder="Masukkan Email anda" autocomplete="off">
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <label for="checkin">Check-in: </label>
                                    <input type="date" required id="checkin" v-model="checkin" @change="hitungtotalharga"
                                        class="form-control">
                                    <small style="color: red;"
                                        v-if="this.totalharga == 0 || this.totalharga == null">*masukkan tanggal
                                        Check-in dan Check-out yang benar</small>
                                    <!-- <datepicker v-model="checkin" :date="startDate" id="checkin"></datepicker> -->
                                </div>
                                <div class="col">
                                    <label for="checkout">Check-out: </label>
                                    <input type="date" required id="checkout" v-model="checkout" @change="hitungtotalharga"
                                        class="form-control">
                                    <!-- <datepicker v-model="checkout" :date="startDate" id="checkout"></datepicker> -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Jumlah kamar:
                                    <input type="number" required @change="hitungtotalharga" class="form-control"
                                        v-model="jumlah_kamar">
                                    <small v-if="this.jumlah_kamar == 0" style="color: red;">*minimal 1 hari</small>
                                </div>
                                <div class="col">
                                    <input type="hidden" v-model="harga" @change="hitungtotalharga">
                                    Total harga:
                                    <input type="number" required v-model="totalharga" name="totalharga"
                                        class="form-control" disabled>
                                </div>
                            </div>
                            <div class="modal-footer mt-1">
                                <input type="Submit" class="btn btn-primary" value="Booking">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- MODAL NEW BOOKING END -->

        <!-- DETAIL -->
        <div class="modal fade" id="detail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">INFO</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + foto"
                            style="width:357px;height:250px;" class="card-img-top">

                            <hr style="border: 1px solid black; opacity: 1;">

                            <div class="row text-dark">
                                <div class="col" v-if="this.max == '1-2'"><i class="bi bi-person-fill"></i>Sleeps 2 Guests</div>
                                <div class="col" v-else><i class="bi bi-person-fill"></i>Sleeps 4 Guests</div>

                                <div class="col" v-if="this.max == '1-2'"><i class="bi bi-building-fill"></i> 1 Queen or 2 Single</div>
                                <div class="col" v-else><i class="bi bi-building-fill"></i> 2 Queen or 4 Single</div>

                                <!-- <div class="col"><i class="bi bi-tv-fill"></i> TV</div> -->
                                <div class="col"><i class="bi bi-cup-hot-fill"></i> Tea/Coffee Making</div>
                                <div class="col"><i class="bi bi-shop"></i> Mini Bar</div> 
                            </div>
                            <br>
                            <div class="row text-dark">
                                <div class="col"><i class="bi bi-car-front-fill"></i> Free parking</div>
                                <div class="col"><i class="bi bi-telephone-fill"></i> Phone</div>
                                <div class="col"><i class="bi bi-tv-fill"></i> TV</div>
                                <div class="col" v-if="this.type_kamar == 'Family'"><i class="bi bi-layout-split"></i> Window</div>
                                <div class="col"><i class="bi bi-wifi"></i> Free wifi</div>
                                <div class="col"><i class="bi bi-sun-fill"></i> Free Breakfast</div>
                                <div class="col"><i class="bi bi-water"></i> Shower</div> 
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- DETAIL END -->

    </div>
</template>

<script>
// import navbar from '../components/template/NavBar.vue'
import axios from 'axios'
// import { filter } from 'vue/types/umd';
import moment from 'moment'
import swal from 'sweetalert'
// import datepicker from 'vue-datepicker'
export default {
    components: {
        // 'Nav-Bar' : navbar
        // datepicker,
    },
    data() {
        return {
            data_kamar: {},
            max_person: '',
            checkin: '',
            checkout: '',
            foto: '',
            max: '',
            type_kamar: '',
            deskripsi: '',
            id_kamar: '',
            harga: 0,
            totalharga: 0,
            jumlah_kamar: 0,
            nama_tamu: '',
            email: '',
            booking: {

            }


        }
    },
    created() {
        this.getkamar()
    },
    mounted() {
        this.detailkamar()
    },
    computed: {
        filterKamar() {
            // if (this.max_person) {
            //     return this.data_kamar.filter((kamar) => kamar.max === this.max_person)
            // } else {
            //     return this.data_kamar
            // }

            let filtered = this.data_kamar;
            if (this.max_person !== '') {
                filtered = filtered.filter(kamar => kamar.max === this.max_person)
            }
            if (this.checkout !== '') {
                filtered = filtered.filter(kamar => kamar.status_kamar === 'kosong')
            }
            else {
                filtered = false
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
        formatharga() {
            const harga = this.harga * this.jumlah_kamar * this.duration
            const format = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga)
            return format
        }
    },
    methods: {
        hitungtotalharga() {
            const start = moment(this.checkin)
            const end = moment(this.checkout)
            const duration = moment.duration(end.diff(start))
            const night = duration.asDays()
            const total = night * this.jumlah_kamar * this.harga
            this.totalharga = total
        },
        getkamar() {
            axios.get('http://localhost:8000/api/getkamar')
                .then(
                    ({ data }) => {
                        this.data_kamar = data
                        console.log(data)
                    }
                )
        },
        detailkamar(kamar) {
            axios.get('http://localhost:8000/api/getkamar/' + kamar.id_kamar)
                .then(
                    (response) => {
                        console.log(response.data[0])
                        this.foto = response.data[0].foto
                        this.id_kamar = response.data[0].id_kamar
                        this.max = response.data[0].max
                        this.type_kamar = response.data[0].type_kamar
                        this.deskripsi = response.data[0].deskripsi
                        this.harga = response.data[0].harga
                    }
                )
        },
        booknow() {
            let data_peminjaman = {
                nama_tamu: this.nama_tamu,
                email: this.email,
                checkin: this.checkin,
                checkout: this.checkout,
                id_kamar: this.id_kamar,
                jumlah_kamar: this.jumlah_kamar,
                harga: this.totalharga,
            }
            axios.post('http://localhost:8000/api/createtransaksi', data_peminjaman)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Sukses booking kamar'
                        })
                        location.href = '/cetak/' + this.nama_tamu
                    }
                )
        }
    }
}
</script>