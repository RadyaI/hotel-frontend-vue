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
                                Wikusama
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/room">Room</a>
                                </li> -->
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="/admin">Admin</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/resepsionis">Resepsionis</a>
                                </li> -->
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="/bookroom">Book Room</a>
                                </li> -->
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
                                <button class="btn btn-outline-danger" @click="logout">LogOut</button>
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
                                <a class="nav-link" href="/user">User</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/manageroom">manage room</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/feedback">FeedBack</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!-- END NAVBAR FOR ADMIN -->
        <h2 class="mt-3" style="font-family:'Times New Roman', Times, serif;" align="center">FeedBack</h2>
        <div class="container">

            <!-- FeedBack -->
            <div class="card">
                <div class="card-header">
                    {{ amount }} Feedback
                </div>
                <div class="card-body">
                    <!-- Start -->
                    <div class="card mb-4" v-for="data in data_feedback" :key = data.id_feedback>
                        <div class="card-body" style="cursor: pointer;">
                            <blockquote class="blockquote mb-0">
                                <p>{{ data.isi }}.</p>
                                <footer class="blockquote-footer"> {{ data.nama_tamu }} / {{ data.review }} out of 5</footer>
                            </blockquote>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <!-- End Feedback -->

            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>

    </div>
</template>
<script>
// import navbar from '../components/template/NavBar.vue'
import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: 'App',
    components: {
        // 'navbar-component': navbar,
    },
    data() {
        return {
            data_feedback: {},
            amount: ''
        }
    },
    mounted() {
        this.getFeedback()
        this.count()
        this.lol()
    },
    methods: {
        check_login() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common["Authorization"] = `Bearer${token}`
        },
        count(){
            this.check_login()
            axios.get('http://localhost:8000/api/countFeedback')
            .then(
                (response) => {
                    console.log(response.data)
                    this.amount = response.data
                }
            )
        },
        getFeedback() {
            this.check_login()
            axios.get('http://localhost:8000/api/getFeedback')
                .then(
                    (response) => {
                        console.log(response)
                        this.data_feedback = response.data
                    }
                )
                .catch(
                    (error) => {
                        if (error.response.status === 401) {
                            swal({
                                icon: 'warning',
                                title: 'Login dulu -_-',
                                buttons: ["Malas", "Okk"],
                                dangerMode: true
                            }).then(
                                (response) => {
                                    if (response) {
                                        location.href = '/login'
                                    } else {
                                        location.href = '/login'
                                    }
                                }
                            )
                        }
                    }
                )
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        swal({
                            icon: 'success',
                            title: 'Success Logout!',
                            buttons: false
                        })
                        setTimeout(
                            () => {
                                location.href = '/login'
                            }, 1200)
                    }
                }
            )
        },
        lol() {

        }
    }

}
</script>