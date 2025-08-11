function salinRekening() {
    const rekening = "1234-5678-9012";
    navigator.clipboard.writeText(rekening).then(() => {
        alert("Nomor rekening berhasil disalin!");
    });
}

fetch("https://api.myquran.com/v1/sholat/jadwal/1301/2025/08/11")
    .then(res => res.json())
    .then(data => {
        let j = data.data.jadwal;
        document.getElementById("jadwal-sholat").innerHTML = `
            Subuh: ${j.subuh} | Dzuhur: ${j.dzuhur} | Ashar: ${j.ashar} | Maghrib: ${j.maghrib} | Isya: ${j.isya}
        `;
    })
    .catch(err => {
        document.getElementById("jadwal-sholat").innerHTML = "Gagal memuat jadwal.";
    });
