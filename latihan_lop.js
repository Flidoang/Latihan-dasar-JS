
const angka = [1, 2, 3, 4, 5];
const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (1) menggunakan metode for loop
// 1. Buat array kosong dulu untuk mendapatkan nilai baru hasil kali 2
const hasilKaliDua = []; 

for (let i = 0; i < angka.length; i++) {
    // menjalankan proses kali 2
    hasilKaliDua.push(angka[i] * 2);
}

console.log(hasilKaliDua);

// (2) menggunakan metode map
// `.map()` akan "mengunjungi" setiap elemen (kita sebut 'a' untuk setiap angka)
// dan menjalankan fungsi panah (=>) pada elemen tersebut.
const hasilKaliDua2 = angka.map(a => a * 3);

console.log(hasilKaliDua2);

// (3) membuat filter dengan metode for
// 1. Buat array kosong
const angkaGenap = []; 
for (let e = 0; e < angka2.length; e++) {
    // 2. Cek kondisinya (apakah ganjil?)
    if (angka2[e] % 2 == 1) { 
        // 3. Jika ya, masukkan ke array baru
        angkaGenap.push(angka2[e]);
    }
}

console.log(angkaGenap);

// (4) menggunakan fungsi filter
// `.filter()` akan mengunjungi setiap elemen ('a') dan menjalankan fungsi di dalamnya.
// Jika fungsi mengembalikan `true`, elemen akan disimpan.
// Jika `false`, elemen akan dibuang.
const angkaGenap2 = angka2.filter(a => a % 2 === 0);

console.log(angkaGenap2);