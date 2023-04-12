<template>
    <div>
        <nav>
            <h1 class="cihuy" style="font-family:'Times New Roman';">Cihuy Hotel</h1>
            <h5 class="alamat">Hotel Cihuy by Radya</h5>
            <p class="alamat1">Jalan merah, Planet Mars, Galaxy Bimasakti</p>
            <p class="alamat2">08771624815, CihuyHotel@gmail.com</p>
            <p class="alamat3">www.cihuy.com</p>
        </nav>
        <h3 class="print-button" style="position: absolute; left: 42%; top: 23%;">Booking Detail</h3>
        <table class="table1">
            <tr>
                <td class="thtd" style="font-weight: bold;">ID Booking</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.id_transaksi }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Nama</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.nama_tamu }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Email</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.email }}</th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Check-In</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.check_in }}</th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Check-Out</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.check_out }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Booking Date</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.tgl_pesan }}
                </th>
            </tr>
        </table>
        <div class="container">
            <table class="table table-striped bg-dark text-light mt-3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Type</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody style="color: white;">
                    <tr>
                        <td style="color: white;">1</td>
                        <td style="color: white;">{{ data_transaksi.type_kamar }}</td>
                        <td style="color: white;">{{ data_transaksi.harga }}</td>
                        <td style="color: white;">{{ data_transaksi.jumlah_kamar }}</td>
                        <td style="color: white;">{{ data_transaksi.total_harga }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-group">
                <button class="btn btn-outline-dark print-button" @click="print()">Print</button>
                <button @click="kembali()" class="btn btn-outline-danger print-button">Kembali</button>
            </div>
        </div>
    </div>
</template>
<style>
@media print {
    .print-button {
        display: none;
    }
}

.thtd {
    font-size: 20px;
}

.table1 {
    margin-left: 15%;
    margin-top: 18%;
}

.cihuy {
    position: absolute;
    top: 5%;
    left: 7%;
    font-size: 60px;
}

.alamat {
    position: absolute;
    right: 7%;
    top: 7%;
}

.alamat1 {
    position: absolute;
    right: 7%;
    top: 11%;
}

.alamat2 {
    position: absolute;
    right: 7%;
    top: 14%;
}

.alamat3 {
    position: absolute;
    right: 7%;
    top: 17%;
}
</style>
<script>
import axios from 'axios'
import swal from 'sweetalert'
// import { timeStamp } from 'console';

export default {
    data() {
        return {
            data_transaksi: {}
        }
    },
    created() {
        this.gettransaksi(this.$route.params.id)
    },
    methods: {
        gettransaksi(nama) {
            axios.get('http://localhost:8000/api/gettransaksi/' + nama)
                .then(
                    ({ data }) => {
                        this.data_transaksi = data
                        console.log(data)
                    }
                )
        },
        print() {
            window.print()
        },
        kembali(){
            swal({
                icon:'warning',
                title:'Ke halaman utama?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if(response){
                        location.href = '/'
                    }
                }
            )
        }

    }
}
</script>
