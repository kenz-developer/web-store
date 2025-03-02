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
                <button onclick="bukaPembayaran('${product.nama}', '${product.harga}')">Beli</button>
            `;
            container.appendChild(item);
        });
    });

function bukaPembayaran(nama, harga) {
    window.location.href = `pembayaran.html?produk=${encodeURIComponent(nama)}&harga=${encodeURIComponent(harga)}`;
}
