async function tambahProduk() {
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let deskripsi = document.getElementById("deskripsi").value;

    if (!nama || !harga || !deskripsi) {
        Swal.fire("Gagal!", "Harap isi semua data produk!", "error");
        return;
    }

    let response = await fetch("https://raw.githubusercontent.com/kenz-developer/web-store/main/produk.json");
    let produk = await response.json();

    let idBaru = produk.length + 1;
    let newProduct = { id: idBaru, nama, harga, deskripsi };

    produk.push(newProduct);

    await fetch(`https://api.github.com/repos/kenz-developer/web-store/contents/produk.json`, {
        method: "PUT",
        headers: {
            "Authorization": "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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Tambah produk baru",
            content: btoa(JSON.stringify(produk, null, 2))
        })
    });

    Swal.fire("Sukses!", "Produk berhasil ditambahkan!", "success");
}
