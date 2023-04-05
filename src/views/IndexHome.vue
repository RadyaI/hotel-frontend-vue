<template>
    <div>

        <div class="hero_area">
            <div class="bg-box">
                <img src="images/hotel_home.jpg" alt="">
            </div>
            <!-- header section strats -->
            <navbar-component></navbar-component>
            <!-- end header section -->
            <!-- slider section -->
            <section class="slider_section ">
                <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Hotel Cihuy
                                            </h1>
                                            <p>
                                                Cihuy Hotel was established in 1991 and stands as the top of
                                                the line 4 star luxury business hotels in Mars. This hotel
                                                in Mars is near the Mars Convention Center / JCC, consisting of 477
                                                spacious guest rooms and suites which reflect the spacious grandeur of its
                                                surroundings, offering a mount view, wealth of activities and a high
                                                level of service
                                            </p>
                                            <div class="btn-box">
                                                <a href="" class="btn1">
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="container">
                        <ol class="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                    </div> -->
                </div>
            </section>
            <!-- end slider section -->
        </div>
    </div>
</template>
<script>
import navbar from '../components/template/NavBar.vue'

export default {
    components: {
        'navbar-component': navbar,
    },
    data() {
        return {

        }
    }
}
</script>