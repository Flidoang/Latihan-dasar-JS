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

tombolBg.addEventListener('click', function (){
    if (modeGelap === false) {
        bgHalaman.style.backgroundColor = '#333';
        bgHalaman.style.color = '#fff';
        tombolBg.textContent = 'Ubah ke Mode Terang';
        modeGelap = true;
    } else{
        bgHalaman.style.backgroundColor = 'white';
        bgHalaman.style.color = 'black';
        tombolBg.textContent = 'Ubah ke Mode Gelap';
        modeGelap = false;
    }
});

// membuat sebuah click event untuk menambahakan sebuah list
tombolTambah.addEventListener('click', function (){
    const teksTugas = inputTugas.value;

    if (inputTugas.value == "") {
        alert("Harap Isi Tugas Terlebih Dahulu");
        return;
    }

    // membuat sebuah element 'li'
    const tugasBaru = document.createElement('li');
    // membuat sebuah element 'span'
    const spanTeks = document.createElement('span');
    spanTeks.textContent = teksTugas;
    
    // membuat sebuah elemet 'button' untuk hapus yang didalamnya terdapat sebuah content text dan juga parameter class
    const tombolHapus = document.createElement('button');
    tombolHapus.textContent = 'Hapus';
    tombolHapus.className = 'tombol-hapus';

    // membuat sebuah elemet 'button' untuk edit yang didalamnya terdapat sebuah content text dan juga parameter class
    const tombolEdit = document.createElement('button');
    tombolEdit.textContent = 'Edit';
    tombolEdit.className = 'tombol-edit';

    // menampilkan semua elemet yang sudah dibuat, dan menjadi bagian dari tugasBaru atau berada pada elemet 'li'
    tugasBaru.appendChild(spanTeks);
    tugasBaru.appendChild(tombolHapus);
    tugasBaru.appendChild(tombolEdit);

    daftarTugas.appendChild(tugasBaru);

    // mengosongkan bagian ketika nilai atau value sudah di isi
    inputTugas.value = '';
});

// membuat sebuah click event untuk menghapus dan juga meng edit
daftarTugas.addEventListener('click', function(event) {
    const itemDiklik = event.target;

    // membuat sebuah fungsi hapus
    if (itemDiklik.className == 'tombol-hapus') {
        const li = itemDiklik.parentElement;
        li.remove();
    }

    // membuat sebuah funsi edit
    if (itemDiklik.className == 'tombol-edit') {
        const li = itemDiklik.parentElement;
        const spanTeks = li.querySelector('span');
        const teksSebelumnya = spanTeks.textContent;

        // membuat sebuah input field untuk mengamati
        const inputEdit = document.createElement('input');
        inputEdit.type  = 'text';
        inputEdit.value = teksSebelumnya;

        // membuat sebuah tombol simpan
        const tombolSimpan = document.createElement('button');
        tombolSimpan.textContent = 'Simpan';
        tombolSimpan.className = 'tombol-simpan';

        // mengganti elemen li yang lama dengan input dan juga button edit yang baru
        li.replaceChild(inputEdit, spanTeks);
        li.replaceChild(tombolSimpan, itemDiklik);
    }

    // membuat sebuah fungsi simpan
    if (itemDiklik.className == 'tombol-simpan') {
        const li = itemDiklik.parentElement;
        const inputEdit = li.querySelector('input[type="text"]');
        const teksBaru = inputEdit.value;

        // memanggil teks yang sudah di edit
        const spanTeksBaru = document.createElement('span');
        spanTeksBaru.textContent = teksBaru;

        // Buat kembali tombol Edit
        const tombolEditBaru = document.createElement('button');
        tombolEditBaru.textContent = 'edit';
        tombolEditBaru.className = 'tombol-edit';

        li.replaceChild(spanTeksBaru, inputEdit);
        li.replaceChild(tombolEditBaru, itemDiklik)
    }
})