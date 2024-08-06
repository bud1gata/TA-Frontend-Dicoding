# Note APP RESTful API

Proyek Tugas Akhir Dicoding

## Dependencies:

* webpack
* webpack cli
* webpack dev server
* webpack merge
* babel-loader
* style-loader
* html-webpack-plugin
* style-loader


## Features:

- RESTful API.
- Menggunakan FETCH konsep.
- Membuat atau menambahkan catatan baru.   
- Mendapatkan dan menampilkan daftar catatan.    
- Menghapus catatan yang tersimpan.
- Memiliki indikator loading.

## Project Structure

- `index.html`: File HTML.
- `webpack.config.js`: File konfigurasi webpack global.
- `webpack.dev.js`: File konfigurasi webpack untuk fase pengembangan.
- `webpack.prod.js`: File konfigurasi webpack untuk fase produksi.
- `request.rest`: File rest untuk uji coba network request.
- `package.json `: metadata dan dependencies.    
- `src/`: metadata dan dependencies.
    - `api/`: metadata dan dependencies.
        - `notesApi.js`: fungsi koneksi API.
        - `requestAdd.js`: fungsi tambah catatan.
        - `requestDelete.js`: fungsi hapus catatan.
        - `requestGet.js`: fungsi ambil catatan.
        - `testNoteGet.js`: XHR test request.
    - `components/`: metadata dan dependencies.
        - `header.js`: web komponen header.
        - `input.js`: web komponen input.
        - `loadingIndicator.js`: fungsi loading indikator komponen.
        - `showList.js`: web komponen media array.
    - `styles/`: metadata dan dependencies.
        - `styles.css`: file CSS.
    - `index.js`: entry poin utama.
    - `template.html`: template file html.         

## Contact

Untuk pertanyaan dan bantuan, dapat menghubungi melalui the GitHub repository atau kontak langsung melalui me@budiputra.web.id.