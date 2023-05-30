<template>
    <div>
        <li class="nav-item">
            <a class="nav-link" href="#" style="text-transform: none;" data-bs-toggle="modal"
                data-bs-target="#feedback">Feedback</a>
        </li>

        <div class="modal fade" id="feedback" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: black;">Feedback form</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="postfeedback">
                        <div class="modal-body">

                            <label for="id" style="color:black;">ID Transaksi: </label>
                            <input type="text" autocomplete="off" placeholder="Masukkan ID transaksi kamu..." id="id"
                                class="form-control" v-model="feedback.id_transaksi">

                            <label for="isi" style="color:black;">Isi:</label>
                            <textarea class="form-control" v-model="feedback.isi" id="" cols="7" rows="7">
                            </textarea>

                            <div class="rating mt-3" style="margin-right: 165px;">
                                <input value="1" v-model="feedback.review" name="star-radio" id="star-1" type="radio">
                                <label for="star-1">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                            pathLength="360"></path>
                                    </svg>
                                </label>
                                <input value="2" v-model="feedback.review" name="star-radio" id="star-2" type="radio">
                                <label for="star-2">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                            pathLength="360"></path>
                                    </svg>
                                </label>
                                <input value="3" v-model="feedback.review" name="star-radio" id="star-3" type="radio">
                                <label for="star-3">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                            pathLength="360"></path>
                                    </svg>
                                </label>
                                <input value="4" v-model="feedback.review" name="star-radio" id="star-4" type="radio">
                                <label for="star-4">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                            pathLength="360"></path>
                                    </svg>
                                </label>
                                <input value="5" v-model="feedback.review" name="star-radio" id="star-5" type="radio">
                                <label for="star-5">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                            pathLength="360"></path>
                                    </svg>
                                </label>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    // name: 'app',
    data() {
        return {
            feedback: {}
        }
    },
    methods: {
        postfeedback() {
            axios.post('http://localhost:8000/api/feedback', this.feedback)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Success send feedback',
                            button: true,
                            dangerMode: true
                        }).then(
                            (response) => {
                                if (response) {
                                    location.reload()
                                }
                            }
                        )
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        if (error.response.status === 404) {
                            swal({
                                icon: 'error',
                                title: 'ID Not Found'
                            })
                        } else if (error.response.status === 400) {
                            swal({
                                icon: 'warning',
                                title: 'Complete your transaction first'
                            })
                        } else if (error.response.status === 406) {
                            swal({
                                icon: 'error',
                                title: 'You already send 2 feedback'
                            })
                        } else if (error.response.status === 500) {
                            swal({
                                icon: 'error',
                                title: 'Internal server error'
                            })
                        }
                    }
                )
        }
    }
}
</script>

<style scoped>
.rating {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.3rem;
    --stroke: #666;
    --fill: #ffc73a;
}

.rating input {
    appearance: unset;
}

.rating label {
    cursor: pointer;
}

.rating svg {
    width: 3rem;
    height: 3rem;
    overflow: visible;
    fill: transparent;
    stroke: var(--stroke);
    stroke-linejoin: bevel;
    stroke-dasharray: 12;
    animation: idle 4s linear infinite;
    transition: stroke 0.2s, fill 0.5s;
}

@keyframes idle {
    from {
        stroke-dashoffset: 24;
    }
}

.rating label:hover svg {
    stroke: var(--fill);
}

.rating input:checked~label svg {
    transition: 0s;
    animation: idle 4s linear infinite, yippee 0.75s backwards;
    fill: var(--fill);
    stroke: var(--fill);
    stroke-opacity: 0;
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
}

@keyframes yippee {
    0% {
        transform: scale(1);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
    }

    30% {
        transform: scale(0);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
    }

    30.1% {
        stroke: var(--fill);
        stroke-dasharray: 0;
        stroke-linejoin: miter;
        stroke-width: 8px;
    }

    60% {
        transform: scale(1.2);
        fill: var(--fill);
    }
}
</style>