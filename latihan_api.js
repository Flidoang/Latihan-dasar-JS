const inputKota = document.getElementById('input-kota');
const cariKota = document.getElementById('cari-kota');
const infoCuaca = document.querySelector('.info-cuaca');

const apiKey = "8b2305ca9ee307e4abee40dc70a0f4a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function dapatkanCuaca(kota) {
    //mengambil url
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`;
    const response = await fetch(urlApi);
    
    if (!response.ok) {
        alert("Kota tidak ditemukan atau terjadi kesalahan jaringan.");
        infoCuaca.innerHTML = `<p class="error">Gagal memuat data.</p>`;
        return; // <-- INI KUNCINYA! Hentikan fungsi di sini.
    }
    
    const data = await response.json();
    console.log(data);
    
    infoCuaca.innerHTML = ''; 
    
    const namaKota = document.createElement('p');
    namaKota.textContent = `Nama Kota : ${data.name}`;
    namaKota.className = 'nama-kota';
    
    const cuacaKota = document.createElement('p');
    cuacaKota.textContent = `Cuaca kota : ${data.weather[0].main}`;
    cuacaKota.className = 'cuaca-kota';
    
    const suhuKota = document.createElement('p');
    suhuKota.textContent = `Suhu kota : ${data.main.temp}°c`;
    suhuKota.className = 'suhu-kota';

    const anginKota = document.createElement('p');
    anginKota.textContent = `Kecepatan angin kota : ${data.wind.speed}m/s`;
    anginKota.className = 'angin-kota';

    infoCuaca.appendChild(namaKota);
    infoCuaca.appendChild(cuacaKota);
    infoCuaca.appendChild(suhuKota);
    infoCuaca.appendChild(anginKota);
}

cariKota.addEventListener("click", function(){
    if (inputKota.value) {
        dapatkanCuaca(inputKota.value);
    }
});

// cariKota.addEventListener('click', function() {
//     const kota = inputKota.value;
//     if (kota) {
//         dapatkanCuaca(kota);
//         console.log(kota);
//     } else{
//         alert("Harap masukan nama kota terlebih dahulu")
//     }
// });

// async function dapatkanCuaca(kota) {
//     // mengambil url
//     const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`;

//     // Menampilkan pesan loading saat data sedang diambil
//     infoCuaca.innerHTML = '<p>Memuat data...</p>';

//     try {
//         const respons = await fetch(urlApi);
//         const data = metric;
//         console.log(data);

//         // Jika respons tidak OK (misal: kota tidak ditemukan), lemparkan error
//         if (!respons.ok) {
//             throw new Error('Kota tidak ditemukan.');
//         }
//     } catch (error) {
//         // Menampilkan pesan error jika terjadi masalah
//         infoCuaca.innerHTML = `<p class="error">${error.message}</p>`;
//     }
// }