const moment = require('moment'); // third-party module / npm module
const fs = require('fs'); // core module
const coba = require('../menjalankan-file-nodejs/coba'); // local module
console.log(coba("Fariz Muhammad Aditya"));
// Mendapatkan tanggal saat ini
const now = moment();

console.log('Tanggal Sekarang:', now.format('YYYY-MM-DD'));

// Membuat tanggal dengan tanggal, bulan, dan tahun tertentu
const customDate = moment('2023-08-02', 'YYYY-MM-DD');

console.log('Tanggal Custom:', customDate.format('YYYY-MM-DD'));

// Menambahkan hari ke tanggal tertentu
const modifiedDate = customDate.add(7, 'days');

console.log('Tanggal Setelah Ditambah 7 Hari:', modifiedDate.format('YYYY-MM-DD'));

// Mendapatkan perbedaan waktu antara dua tanggal
const date1 = moment('2023-08-01', 'YYYY-MM-DD');
const date2 = moment('2023-08-02', 'YYYY-MM-DD');

const difference = date2.diff(date1, 'days');

console.log('Perbedaan Hari Antara Tanggal 1 dan Tanggal 2:', difference, 'hari');

// Membaca isi berkas secara synchronous (blocking)
const data = fs.readFileSync('nama_file.txt', 'utf8');
console.log('Isi Berkas:', data);

// Membaca isi berkas secara asynchronous (non-blocking)
fs.readFile('nama_file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Isi Berkas (Async):', data);
});

// Menulis ke berkas secara synchronous (blocking)
fs.writeFileSync('nama_file.txt', 'Halo, dunia!');

// Menulis ke berkas secara asynchronous (non-blocking)
fs.writeFile('nama_file.txt', 'Halo, dunia! (Async)', (err) => {
  if (err) throw err;
  console.log('Berhasil menulis ke berkas.');
});

// Mengecek apakah berkas ada atau tidak
fs.access('nama_file.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('Berkas tidak ada.');
  } else {
    console.log('Berkas ada.');
  }
});

// Mengganti nama berkas
fs.rename('lama.txt', 'baru.txt', (err) => {
  if (err) throw err;
  console.log('Nama berkas berhasil diganti.');
});

// Menghapus berkas
fs.unlink('nama_file.txt', (err) => {
  if (err) throw err;
  console.log('Berkas berhasil dihapus.');
});