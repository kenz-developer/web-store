document.addEventListener("DOMContentLoaded", async function() {
    let response = await fetch("https://raw.githubusercontent.com/USERNAME/REPO/main/produk.json");
    let produk = await response.json();

    let container = document.getElementById("produk-list");
    produk.forEach(item => {
        let div = document.createElement("div");
        div.className = "produk";
        div.innerHTML = `
            <h3>${item.nama}</h3>
            <p>${item.deskripsi}</p>
            <strong>Rp ${item.harga.toLocaleString()}</strong>
            <button onclick="beli(${item.id})">Beli</button>
        `;
        container.appendChild(div);
    });
});

function beli(id) {
    Swal.fire({
        title: "Konfirmasi",
        text: "Anda yakin ingin membeli produk ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya, beli!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `payment.html?id=${id}`;
        }
    });
}
