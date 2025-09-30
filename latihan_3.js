const nilai = 50;

if (nilai >= 90 && nilai <= 100) {
    console.log(`Nilai anda adalah ${nilai}, mendapatkan predikat A`);
} else if (nilai >= 80 && nilai <= 89) {
    console.log(`Nilai anda adalah ${nilai}, mendapatkan predikat B`);
} else if (nilai >= 70 && nilai <= 79) {
    console.log(`Nilai anda adalah ${nilai}, mendapatkan predikat C`);
} else if (nilai >= 60 && nilai <= 69) {
    console.log(`Nilai anda adalah ${nilai}, mendapatkan predikat D`);
} else if (nilai < 60) {
    console.log(`Nilai anda adalah ${nilai}, mendapatkan predikat E`);
} else {
    console.log(`Coba masukan nilai dengan benar`);
}