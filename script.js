// Data ALL produk disimpan di sini
const products = {
  // PRODUK Beluna Luna Blouse
  'beluna-luna-blouse': {
    name: 'Beluna Luna Blouse',
    price: 'Rp 289.000',
    img: 'assets/Beluna Luna Blouse.jpeg',
    desc: 'Blus longgar dengan detail lengan puff transparan dan kerah peter pan kecil, terbuat dari bahan chiffon lembut. Memberi kesan anggun dan feminin.',
    descshort:
      'Blus longgar dengan detail lengan puff transparan dan kerah peter pan kecil.',
    colors: [
      'Putih',
      'Hitam',
      'Cream',
      'Pink',
      'Maroon',
      'Coklat',
      'Abu',
      'Ungu',
    ],
    featured: true, // JADI PRODUK UNGGULAN
  },
  // PRODUK Beluna Starlight Tunic
  'beluna-starlight-tunic': {
    name: 'Beluna Starlight Tunic',
    price: 'Rp 325.000',
    img: 'assets/Beluna Starlight Tunic.jpeg',
    desc: "Tunik panjang dengan potongan A-line yang nyaman, dihiasi bordir bulan sabit minimalis di bagian dada. Bahan katun rayon yang adem, cocok untuk gaya kasual dan syar'i.",
    descshort: 'Tunik panjang dengan potongan A-line yang nyaman',
    colors: [
      'Putih',
      'Hitam',
      'Cream',
      'Pink',
      'Maroon',
      'Coklat',
      'Abu',
      'Ungu',
    ],
    featured: true, // JADI PRODUK UNGGULAN
  },
  // PRODUK Beluna Cloud Shirt
  'beluna-cloud-shirt': {
    name: 'Beluna Cloud Shirt',
    price: 'Rp 295.000',
    img: 'assets/Beluna Cloud Shirt.jpeg',
    desc: 'Kemeja oversized dengan bahan katun premium yang lembut seperti awan. Potongan modern dan minimalis, cocok untuk tampilan santai namun tetap stylish.',
    descshort:
      'Kemeja oversized dengan bahan katun premium yang lembut seperti awan',
    colors: [
      'Putih',
      'Hitam',
      'Cream',
      'Pink',
      'Maroon',
      'Coklat',
      'Abu',
      'Ungu',
    ],
    featured: true, // JADI PRODUK UNGGULAN
  },
  // PRODUK Beluna Serenity Cardigan
  'beluna-serenity-cardigan': {
    name: 'Beluna Serenity Cardigan',
    price: 'Rp 299.000',
    img: 'assets/Beluna Serenity Cardigan.jpeg',
    desc: 'Kardigan rajut tipis dengan tekstur bergelombang halus, cocok untuk layering atau sebagai penambah gaya.',
    descshort: 'Kardigan rajut tipis dengan tekstur bergelombang halus',
    colors: [
      'Putih',
      'Hitam',
      'Cream',
      'Pink',
      'Maroon',
      'Coklat',
      'Abu',
      'Ungu',
    ],
    featured: true, // JADI PRODUK BUKAN UNGGULAN
  },
  // PRODUK Beluna Serenity Cardigan
  'beluna-aurora-outer': {
    name: 'Beluna Aurora Outer',
    price: 'Rp 340.000',
    img: 'assets/Beluna Aurora Outer.jpeg',
    desc: 'Outerwear tanpa lengan dengan potongan jatuh elegan, terbuat dari bahan linen look yang ringan. Detail belahan samping memberikan sentuhan modern.',
    descshort: 'Outerwear tanpa lengan dengan potongan jatuh elegan',
    colors: [
      'Putih',
      'Hitam',
      'Cream',
      'Pink',
      'Maroon',
      'Coklat',
      'Abu',
      'Ungu',
    ],
    featured: false, // JADI PRODUK BUKAN UNGGULAN
  },
};
// Data ALL produk disimpan di sini

// === FUNGSI UNTUK PANGGIL DATA PRODUK UNGGULAN ===
function renderFeaturedProducts() {
  // Ambil elemen container tempat produk unggulan akan ditampilkan
  const featuredGrid = document.getElementById('featured-products');

  // Jika elemen tidak ditemukan di halaman, hentikan eksekusi
  if (!featuredGrid) return;

  // Bersihkan isi container terlebih dahulu
  featuredGrid.innerHTML = '';

  // Looping melalui semua produk, lalu filter hanya yang ditandai sebagai 'featured'
  Object.entries(products)
    .filter(([_, product]) => product.featured) // ambil hanya produk yang featured == true
    .forEach(([key, product]) => {
      // Buat elemen div untuk setiap produk
      const card = document.createElement('div');
      card.className = 'product-card'; // beri class untuk styling

      // Isi HTML dari Product Card
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <h5>${product.descshort}</h5>
        <p>${product.price}</p>
        <button class="btn-beli" data-produk="${key}">Preview</button>
      `;

      // Tambahkan Product Card ke container
      featuredGrid.appendChild(card);
    });

  // Tambahkan event listener pada semua tombol "Preview"
  const buttons = featuredGrid.querySelectorAll('.btn-beli');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Ambil data-produk dari tombol yang diklik
      const produkKey = button.getAttribute('data-produk');

      // Arahkan pengguna ke halaman detail produk, bawa parameter di URL
      window.location.href = `produk-detail.html?produk=${encodeURIComponent(
        produkKey
      )}`;
    });
  });
}
// === FUNGSI UNTUK PANGGIL DATA PRODUK UNGGULAN ===

// === FUNGSI UNTUK PANGGIL DATA SEMUA PRODUK ===
function renderProducts() {
  // Ambil elemen HTML dengan ID 'product-grid' sebagai tempat untuk menampilkan semua produk
  const productGrid = document.getElementById('product-grid');

  // Jika elemen tidak ditemukan (misalnya di halaman lain), hentikan eksekusi fungsi
  if (!productGrid) return;

  // Kosongkan konten sebelumnya agar tidak dobel saat fungsi dipanggil ulang
  productGrid.innerHTML = '';

  // Looping semua entri dalam objek 'products'
  Object.entries(products).forEach(([key, product]) => {
    // Buat elemen div untuk setiap produk
    const card = document.createElement('div');
    card.className = 'product-card'; // Tambahkan class CSS untuk styling

    // Tambahkan isi HTML ke dalam kartu produk
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <h5>${product.descshort}</h5>
      <p>${product.price}</p>
      <button class="btn-beli" data-produk="${key}">Preview</button>
    `;

    // Sisipkan kartu produk ke dalam grid
    productGrid.appendChild(card);
  });

  // Tambahkan event listener ke setiap tombol "Preview" setelah kartu produk dimuat
  const buttons = productGrid.querySelectorAll('.btn-beli');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Ambil atribut 'data-produk' dari tombol yang diklik
      const produkKey = button.getAttribute('data-produk');

      // Redirect ke halaman detail produk, sertakan parameter produk di URL
      window.location.href = `produk-detail.html?produk=${encodeURIComponent(
        produkKey
      )}`;
    });
  });
}
// === FUNGSI UNTUK PANGGIL DATA SEMUA PRODUK ===

// === FUNGSI UNTUK AMBIL PARAMETER DARI URL ===
function getQueryParam(param) {
  // Buat objek URLSearchParams dari bagian query string di URL saat ini
  // Contoh: jika URL adalah "produk-detail.html?produk=baju123",
  // maka window.location.search akan menghasilkan "?produk=baju123"
  const urlParams = new URLSearchParams(window.location.search);

  // Ambil nilai parameter sesuai dengan nama (param) yang diminta
  // Misalnya, getQueryParam('produk') akan mengembalikan 'baju123'
  return urlParams.get(param);
}
// === FUNGSI UNTUK AMBIL PARAMETER DARI URL ===

// === BAGIAN UNTUK produk-detail.html ===
// Ambil elemen-elemen HTML yang akan menampilkan detail produk
const nameEl = document.getElementById('product-name'); // Nama produk
const priceEl = document.getElementById('product-price'); // Harga produk
const descEl = document.getElementById('product-desc'); // Deskripsi produk
const colorsEl = document.getElementById('product-colors'); // Daftar warna (teks)
const imgEl = document.getElementById('product-img'); // Gambar produk
const buyBtn = document.getElementById('buy-btn'); // Tombol "Beli Sekarang"
const warnaSelectDetail = document.getElementById('warna-select'); // Dropdown untuk pilih warna

// Ambil parameter 'produk' dari URL (misalnya: produk-detail.html?produk=baju123)
const productKey = getQueryParam('produk');

// Jika elemen tersedia dan produk ditemukan dalam data
if (nameEl && productKey && products[productKey]) {
  // Ambil data produk dari objek products menggunakan key dari URL
  const produk = products[productKey];

  // Tampilkan detail produk ke dalam elemen-elemen HTML
  nameEl.textContent = produk.name;
  priceEl.textContent = produk.price;
  descEl.textContent = produk.desc;
  colorsEl.textContent = produk.colors.join(', '); // gabungkan warna jadi teks
  imgEl.src = produk.img;
  imgEl.alt = produk.name;

  // Isi dropdown warna dengan opsi warna yang tersedia
  warnaSelectDetail.innerHTML = produk.colors
    .map((warna) => `<option value="${warna}">${warna}</option>`)
    .join('');

  // Saat tombol "Beli Sekarang" diklik
  buyBtn.addEventListener('click', () => {
    const warnaTerpilih = warnaSelectDetail.value;

    // Redirect ke halaman beli.html, sambil kirim data nama produk & warna via URL
    window.location.href = `beli.html?produk=${encodeURIComponent(
      produk.name
    )}&warna=${encodeURIComponent(warnaTerpilih)}`;
  });
} else if (nameEl) {
  // Jika produk tidak ditemukan, tampilkan pesan error ke pengguna

  nameEl.textContent = 'Produk tidak ditemukan';
  priceEl.textContent = '';
  descEl.textContent = 'Maaf, produk yang kamu cari tidak tersedia.';
  colorsEl.textContent = '';
  imgEl.src = 'assets/no-imag.png'; // Gambar default jika produk tidak tersedia
  buyBtn.style.display = 'none'; // Sembunyikan tombol beli
  warnaSelectDetail.style.display = 'none'; // Sembunyikan dropdown warna
}
// === BAGIAN UNTUK produk-detail.html ===

// === BAGIAN UNTUK beli.html ===
// Ambil elemen <select> untuk produk dan warna dari form
const produkSelect = document.getElementById('produk');
const warnaSelectForm = document.getElementById('warna');

// Pastikan kedua elemen ada di halaman sebelum lanjut
if (produkSelect && warnaSelectForm) {
  // Ambil parameter "produk" dan "warna" dari URL (misalnya ?produk=namaProduk&warna=Merah)
  const produkNama = getQueryParam('produk');
  const warnaParam = getQueryParam('warna');

  // Fungsi untuk cari key produk berdasarkan nama produk (karena parameter URL pakai nama)
  const getProductKeyByName = (name) => {
    // Cari key produk yang memiliki nama sesuai parameter 'name'
    return Object.keys(products).find((key) => products[key].name === name);
  };

  // Cari key produk yang sesuai dengan nama produk dari URL
  const selectedKey = getProductKeyByName(produkNama);

  // Isi dropdown produk dengan semua produk yang ada di objek products
  Object.keys(products).forEach((key) => {
    const option = document.createElement('option');
    option.value = key; // value option adalah key produk
    option.textContent = products[key].name; // tampilkan nama produk
    produkSelect.appendChild(option);
  });

  // Fungsi untuk update dropdown warna sesuai produk yang dipilih
  function updateWarnaDropdown(productKey) {
    warnaSelectForm.innerHTML = ''; // kosongkan dulu dropdown warna

    // Jika produk tidak ada, hentikan
    if (!products[productKey]) return;

    // Tambahkan opsi warna sesuai properti 'colors' produk tersebut
    products[productKey].colors.forEach((warna) => {
      const opt = document.createElement('option');
      opt.value = warna;
      opt.textContent = warna;
      warnaSelectForm.appendChild(opt);
    });
  }

  // Jika ada produk yang dipilih dari URL
  if (selectedKey) {
    produkSelect.value = selectedKey; // set produk dropdown sesuai key yg ditemukan
    updateWarnaDropdown(selectedKey); // update warna sesuai produk

    // Jika ada parameter warna dari URL, set juga warna dropdown
    if (warnaParam) {
      warnaSelectForm.value = warnaParam;
    }
  } else {
    // Jika produk dari URL tidak ditemukan, update warna sesuai produk default yg dipilih
    updateWarnaDropdown(produkSelect.value);
  }

  // Tambahkan event listener saat user mengubah pilihan produk
  produkSelect.addEventListener('change', () => {
    updateWarnaDropdown(produkSelect.value); // update dropdown warna sesuai produk baru
  });
}
// === BAGIAN UNTUK beli.html ===

// === BAGIAN FORM CEKOUT W.A ===
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(); // Render Data Product
  renderFeaturedProducts(); // Render Data Product Unggulan

  const form = document.querySelector('.checkout-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Ambil nilai input dari form
      const nama = form.querySelector('input[name="nama"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const alamat = form.querySelector('textarea[name="alamat"]').value;
      const produk = form.querySelector('select[name="produk"]').value;
      const warna = form.querySelector('select[name="warna"]').value;
      const qty = form.querySelector('input[name="qty"]').value;

      // Nomor WhatsApp
      const waNumber = '62881022269621';

      // Format pesan
      const pesan = `
Halo Beluna! Saya ingin memesan produk berikut:

🧑 Nama: ${nama}
📧 Email: ${email}
📍 Alamat Pengiriman: ${alamat}
📦 Produk: ${produk}
🎨 Warna: ${warna}
🔢 Jumlah: ${qty}

Mohon konfirmasi ketersediaan dan detail pembayaran ya. Terima kasih!
      `;

      // Buka WhatsApp
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        pesan
      )}`;
      window.open(waLink, '_blank');

      // Reset form
      form.reset();

      // Tampilkan alert lalu redirect
      alert(
        '✅ Pesanan berhasil dikirim!\nKami akan segera memproses pesanan Anda.'
      );
      window.location.href = 'produk.html'; // redirect ke produk.html
    });
  }
});

// === BAGIAN FORM KOTAK KE W.A ===
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.checkout-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Ambil data dari form
      const nama = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const subject = form.querySelector('input[name="subject"]').value;
      const pesan = form.querySelector('textarea[name="message"]').value;

      // Nomor WhatsApp
      const waNumber = '62881022269621';

      // Buat pesan teks
      const waMessage = `
Halo Beluna! Saya ingin menghubungi Anda:

🧑 Nama: ${nama}
📧 Email: ${email}
📌 Subjek: ${subject}
💬 Pesan:
${pesan}

Terima kasih!
        `;

      // Buka WhatsApp dengan pesan
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        waMessage
      )}`;
      window.open(waLink, '_blank');

      // Reset form (opsional)
      form.reset();
    });
  }
});
