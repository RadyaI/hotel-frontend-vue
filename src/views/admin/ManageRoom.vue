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
                                    Welcome to Admin Dashboard
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
                    <a class="navbar-brand" href="index.html">
                        <span>
                            ADMIN
                        </span>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin">User</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/manageroom">manage room</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" href="/edit_room">Edit Room</a>
                            </li> -->
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!-- END NAVBAR FOR ADMIN -->
        <h2 class="mt-3" style="font-family:'Times New Roman';" align="center">MANAGE ROOM</h2>
        <div class="container">

            <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addroom"><i
                    class="bi bi-bookmark-plus-fill"></i></button>

            <section class="food_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our Room
                        </h2>
                    </div>
                    <!-- DATA KAMAR -->
                    <div class="filters-content">
                        <div class="row grid">
                            <!-- MULAI DATA KAMAR -->
                            <div v-for="room in data_room" :key="room.id_kamar" class="col-sm-6 col-lg-4 all pizza">
                                <div class="box">
                                    <div>
                                        <div class="img-box">
                                            <!-- {{ room.foto }} -->
                                            <img
                                                :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + room.foto">
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                <!-- Nomor: {{ room.nomor_kamar }} -->
                                            </h5>
                                            <p>
                                                Type: {{ room.type_kamar }} / <span v-if="room.status_kamar !== 'kosong'" class="badge badge-danger">Unavailable</span><span v-else class="badge badge-success">Available</span>
                                            </p>
                                            <span><small>Max: {{ room.max }} person</small></span>
                                            <div class="options">
                                                <h6>
                                                    Harga: Rp.{{ room.harga }} / Malam
                                                </h6>
                                                <div class="btn-group">
                                                    <button class="btn btn-secondary" data-bs-toggle="modal"
                                                        data-bs-target="#editkamar" @click="showdetailkamar(room)"><i
                                                            class="bi bi-gear-fill"></i></button>
                                                    <button class="btn btn-danger" @click="hapus(room)"><i class="bi bi-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>


        <!-- MODAL ADD ROOM -->
        <div class="modal fade" id="addroom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-family: 'Times New Roman';">ADD ROOM
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="save">
                        <div class="modal-body">
                            <!-- <label for="nomor">Nomor kamar:</label>
                            <input type="number" id="nomor" class="form-control" v-model="room.nomor_kamar"
                                placeholder="Masukkan nomor kamar..." required> -->

                            <label for="room">type:</label>
                            <select v-model="room.type_kamar" id="room" required class="form-control">
                                <option value="Regular">Regular</option>
                                <option value="Premium">Premium</option>
                                <option value="Superior">Sultan</option>
                                <option value="Duluxe">Duluxe</option>
                                <option value="Executive">Executive</option>
                                <option value="Family">Family</option>
                                <option value="Single">Single</option>
                            </select>

                            <label for="max">Max</label>
                            <select v-model="room.max" id="max" required class="form-control">
                            <option value="1-2">1-2</option>
                            <option value="2-4">2-4</option>
                            </select>

                            <!-- <label for="foto">Foto:</label>
                            <input id="foto" type="file" v-on:change="inputFile($event)" class="form-control"> -->

                            <label for="deskripsi">Deskripsi:</label>
                            <input type="text" id="deskripsi" class="form-control" v-model="room.deskripsi"
                                autocomplete="off">

                            <label for="status">Status:</label>
                            <select v-model="room.status_kamar" id="status" required class="form-control">
                                <option value="kosong">kosong</option>
                                <option value="dipesan">dipesan</option>
                                <option value="dibersihkan">dibersihkan</option>
                            </select>

                            <label for="harga">Harga:</label>
                            <input type="number" class="form-control" v-model="room.harga" required
                                placeholder="Masukkan harga...">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <input type="submit" class="btn btn-primary">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL ADD ROOM -->

        <!-- MODAL EDIT ROOM -->
        <div class="modal fade" id="editkamar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-family: 'Times New Roman',;">Manage
                            Room</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="editkamar">
                        <div class="modal-body">
                            <input type="hidden" v-model="id_kamar">
                            <!-- <label for="nomor_kamar">Nomor Kamar:</label>
                            <input type="text" required class="form-control" v-model="nomor_kamar" autocomplete="off"> -->

                            <label for="type">Type Kamar:</label>
                            <select v-model="type_kamar" required id="type" class="form-control">
                                <option value="Regular">Regular</option>
                                <option value="Premium">Premium</option>
                                <option value="Superior">Sultan</option>
                                <option value="Duluxe">Duluxe</option>
                                <option value="Executive">Executive</option>
                                <option value="Family">Family</option>
                                <option value="Single">Single</option>
                            </select>

                            <label for="max">Max</label>
                            <select v-model="max" id="max" required class="form-control">
                            <option value="1-2">1-2</option>
                            <option value="2-4">2-4</option>
                            </select>

                            <label for="status">Status Kamar:</label>
                            <select v-model="status_kamar" id="status" required class="form-control">
                                <option value="kosong">Kosong</option>
                                <option value="dipesan">DiPesan</option>
                                <option value="dibersihkan">Dibersihkan</option>
                            </select>

                            <label for="deskripsi">Deskripsi</label>
                            <input type="text" class="form-control" v-model="deskripsi" required autocomplete="off">

                            <label for="harga">Harga / Malam:</label>
                            <input type="number" class="form-control" v-model="harga" required>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info text-light">Add Image</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <input type="submit" class="btn btn-primary" value="Save Changes">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- END MODAL EDIT ROOM -->
</template>
<script>
// import navbar from '../components/template/NavBar.vue'
import axios from 'axios'
import swal from 'sweetalert'

export default {
    components: {
        // 'navbar-component': navbar,
    },
    data() {
        return {
            data_room: {},
            room: {},
            id_kamar: '',
            // nomor_kamar: '',
            type_kamar: '',
            harga: '',
            status_kamar: '',
            deskripsi: '',
            foto: '',
            max: ''
        }
    },
    created() {
        this.dataroom()
    },
    mounted() {
        // this.data_edit()
        this.showdetailkamar()
    },
    methods: {
        inputFile(event) {
            this.file = event.target.files[0];
        },
        save() {
            // var formdata = new FormData();
            // formdata.append('nomor_kamar', this.nomor_kamar)
            // formdata.append('type_kamar', this.type_kamar)
            // formdata.append('status_kamar', this.status_kamar)
            // formdata.append('deskripsi', this.deskripsi)        
            // formdata.append('file', this.file)
            // formdata.append('harga', this.harga)

            axios.post('http://localhost:8000/api/createkamar', this.room)
                .then(
                    ({ data }) => {
                        console.log(data)
                        console.log('Sukses tambah kamar')
                        swal({
                            icon: 'success',
                            title: 'Sukses Tambah Kamar'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);

                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                    }
                )

        },
        dataroom() {
            axios.get('http://localhost:8000/api/getkamar')
                .then(
                    ({ data }) => {
                        this.data_room = data
                        console.log(data)
                    }
                )
        },
        showdetailkamar(room) {
            axios.get('http://localhost:8000/api/getkamar/' + room.id_kamar)
                .then(
                    (response) => {
                        console.log(response.data[0])
                        this.id_kamar = response.data[0].id_kamar
                        // this.nomor_kamar = response.data[0].nomor_kamar
                        this.type_kamar = response.data[0].type_kamar
                        this.max = response.data[0].max
                        this.harga = response.data[0].harga
                        this.status_kamar = response.data[0].status_kamar
                        this.deskripsi = response.data[0].deskripsi
                        this.foto = response.data[0].foto

                    }
                )
        },
        editkamar() {
            let kamar = {
                id_kamar: this.id_kamar,
                // nomor_kamar: this.nomor_kamar,
                type_kamar: this.type_kamar,
                harga: this.harga,
                status_kamar: this.status_kamar,
                deskripsi: this.deskripsi,
                max: this.max,
            }
            axios.put('http://localhost:8000/api/updatekamar/' + this.id_kamar, kamar)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Berhasil Update Data kamar'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
        },
        hapus(room){
            swal({
                icon: 'warning',
                title: 'Ingin hapus kamar ini?',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if(hapus){
                        axios.delete('http://localhost:8000/api/deletekamar/' + room.id_kamar)
                        .then(
                            (response) => {
                                console.log(response)
                                swal({
                                    icon: 'success',
                                    title: 'Sukses delete kamar'
                                })
                                setTimeout(() => {
                                    location.reload()
                                }, 1200);
                            }
                        )
                        .catch(
                            (err) => {
                                console.log(err)
                                console.log('Gagal hapus kamar')
                            }
                        )
                    }
                }
            )
        }
    }
}
</script>