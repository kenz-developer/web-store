fetch('produk.json')
    .then(response => response.json())
    .then(products => {
        let container = document.getElementById('product-list');
        products.forEach(product => {
            let item = document.createElement('div');
            item.classList.add('product');
            item.innerHTML = `
                <h3>${product.nama}</h3>
                <p>${product.deskripsi}</p>
                <p>Harga: ${product.harga} IDR</p>
                <button onclick="beliProduk('${product.nama}', '${product.harga}')">Beli</button>
            `;
            container.appendChild(item);
        });
    });

function beliProduk(nama, harga) {
    Swal.fire({
        title: `Beli ${nama}?`,
        text: `Harga: ${harga} IDR`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Beli Sekarang',
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire("Pembayaran", `Silakan bayar ${harga} ke rekening Kenz`, "success");
        }
    });
}
