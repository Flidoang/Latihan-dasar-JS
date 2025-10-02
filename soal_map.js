const daftarSiswa = [
    { nama: 'Budi', nilai: 75 },
    { nama: 'Siti', nilai: 72 },
    { nama: 'Agus', nilai: 68 },
    { nama: 'Dewi', nilai: 92 },
    { nama: 'Joko', nilai: 78 }
];

const kkm = 75;
// const laporanKelulusan = [];

const laporanKelulusan = daftarSiswa.map(
    siswa => {
    // 1. Untuk setiap objek 'siswa', cek nilainya.
    // Gunakan operator ternary untuk cara yang singkat.
    if(siswa.nilai >= kkm){
        hasil = 'Lulus'
    } else {
        hasil = 'Tidak Lulus';
    }
    // const status = siswa.nilai >= kkm ? 'Lulus' : 'Tidak Lulus';

    // 2. Kembalikan (return) string dengan format yang diinginkan.
    // Nilai yang di-return inilah yang akan menjadi isi array baru.
    return `${siswa.nama} : ${hasil}`;
});

console.log(laporanKelulusan);

const siswaYangLulus = daftarSiswa.filter(
    siswa => {
        if (siswa.nilai >= kkm) {
            return daftarSiswa;
        }
    }
)

console.log(siswaYangLulus);

// // Versi yang lebih singkat dan umum digunakan
// const siswaYangLulusSingkat = daftarSiswa.filter(siswa => siswa.nilai >= kkm);
// console.log(siswaYangLulusSingkat);