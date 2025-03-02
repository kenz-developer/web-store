document.addEventListener("DOMContentLoaded", async function() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");

    let response = await fetch("https://raw.githubusercontent.com/USERNAME/REPO/main/produk.json");
    let produk = await response.json();
    let item = produk.find(p => p.id == id);

    if (item) {
        document.getElementById("produk-info").innerText = `Anda akan membeli ${item.nama} seharga Rp ${item.harga}`;
    } else {
        Swal.fire("Oops!", "Produk tidak ditemukan!", "error");
    }
});

function bayar() {
    Swal.fire({
        title: "Pembayaran Berhasil!",
        text: "Produk akan dikirim ke email Anda.",
        icon: "success",
        confirmButtonText: "Oke"
    });
}
