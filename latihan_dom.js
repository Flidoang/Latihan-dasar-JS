const judulHalaman = document.querySelector('#judul');
const tombolUbah = document.querySelector('#tombol');

const bgHalaman = document.querySelector('#halaman');
const tombolBg = document.querySelector('#tombol-bg');

const inputTugas = document.getElementById('inputTugas');
const tombolTambah = document.getElementById('tombolTambah');
const daftarTugas = document.getElementById('daftar-tugas');

let modeGelap = false;

tombolUbah.addEventListener('click', function(){
    if (judulHalaman != 'Caranya ada di dukun merah') {
        judulHalaman.textContent = 'Caranya ada di dukun merah';
    } else{
        return;
    }
    // judulHalaman.textContent = 'MENCOBA MENJADI DUKUN';
    // //judulHalaman.textContent = 'Caranya ada di dukun merah';
});

tombolBg.addEventListener('click', function () {
    if (modeGelap === false) {
        bgHalaman.style.backgroundColor = '#333';
        bgHalaman.style.color = '#fff';
        tombolUbah.textContent = 'Ubah ke Mode Terang';
        modeGelap = true;
    } else{
        bgHalaman.style.backgroundColor = 'white';
        bgHalaman.style.color = 'black';
        tombolUbah.textContent = 'Ubah ke Mode Gelap';
        modeGelap = false;
    }
});

tombolTambah.addEventListener('click', function (){
    const teksTugas = inputTugas.value;

    if (inputTugas.value == "") {
        alert("Harap Isi Tugas Terlebih Dahulu");
        return;
    }

    const tugasBaru = document.createElement('li');
    tugasBaru.textContent = teksTugas;
    daftarTugas.appendChild(tugasBaru);

    inputTugas.value = '';
});