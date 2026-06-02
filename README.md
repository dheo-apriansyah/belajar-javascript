# belajar-javascript
belajar javascript biar bisa jadi frontend

array at()
- mengambil value array berdasarkan index

length array
- di mulai dari angka 1 bukan 0 
- jumlah data di dalam array

Array Constructor
- buat array kosong yang panjangnya 5 tapi value nya kosong
- bisa buat kalender 30 hari tanpa isi angkat manual
- bisa buat pagination (Halaman berita)
- dari pada mengetik 1-50 di array lebih baik menggunakan array constuctor

prompt()
- jika pake prompt() tapi klik cancel > maka akan menghasilkan niai null
- jika klik oke tanpa input > maka akan menghasilkan nilai string kosong ""

perbedaan == dan ===
- == membandingkan nilai saja
console.log(5 == '5');
hasilnya true
- === membandingkan nilai dan tipe data
console.log(5 === '5');
hasilnya false
- di sarankan menggunakan === karena lebih aman

if else
- gunakan saat mengambil keptusan / memilih (contoh : pilihan A atau B)
- cek kondisinya lalu menjalakan program
- cocok untuk keputusan

do while
- cocok untuk pengulangan 
- di jalankan dulu baru cek kondisi
- jalankan program -> cek kondisi -> ulangi program

if else dan do while bisa di gunakan keduanya (contoh : Login, validasi, form)
- do while -> untuk mengulang system login
- if else -> untuk memberi respon login

break
- untuk menghentikan seluruh perulangan
 - jika angka 1-5 sudah muncul, hentikan perulangan

continue
- untuk menghentikan perulangan yang sedang berjalan dan melanjutkan perulangan
   - menampikan angka 1-5 tapi lewati angka 3

for in
- untuk mengambil index atau key
- bisa melakukan perulangan untuk array dan object
- cocok untuk object

for of
- untuk mendapatkan nilai value langsung
- bisa di gunakan dengan syarat hasilnya iterable
- tidak bisa di gunakan pada object
- cocok untuk array

function()
- function dan method sama saja
- function bisa di panggil berkali kali

function parameter
- parameter seperti variable
- bisa di buat lebih dari 1
- nama parameter tidak boleh sama
- parameter di function itu opsional
- jika kita set parameter di function dan tidak kita beri velue maka hasilnya bernilai undefined
- jika value lebih banyak dari parameter maka tidak terjadi error / data tidak muncul

funtion return dan value
- saat menggunakan return, maka kode setelah return tidak dieksekusi lagi
- return bisa menghentikan eksekusi function

rest perameter
- untuk menampung sisa paremeter menjadi satu array
- harus menggunakan titik 3 dan harus di akhir parameter
- hanya boleh ada 1 rest parameter dalam 1 function
- hasilnya selalu berupa array
- gunakan rest parameter jika tidak tahu ada berapa banyak data yang di kirim

Anonymous Function
- function tidak memliki nama 
- function di simpan pada variable
- function bisa di masukan ke dalam parameter

Recursive Function
- konsep function yang bisa memangil dirinya sendiri
- harus memiki kondisi berhenti dan langkah rekursif(memangil dirinya sendiri yang lebih kecil atau mendekati base case)
- jika ingin mengelola data yang leboh besar gunakan while atau for karena tidak banyak makan memory

Function Generator
- untuk menjalankan kodenya perlu memanggil .next()
- menghasilkan nilai saat di butuhkan
- bisa menggunakan for..of
- yeild memberikan nilai dan "istirahat" sedangkan return memberi nilai dan mengakhiri fungsi

Arrow function
- di gunakan fungsi 1x
- jangan di gunakan untuk object method

obejct method
- menjaga code agar tetap rapih
- method di dalam object >> code jadi lebih terstruktur
- jika ingin akses property di dalam object, gunakan kata this. di method nya
- jika Properti "kata benda" maka Method adalah "Kata kerja"

kata kunci this
- kata kunci refresi yang menunjuk ke sebuah object
- gunakan kata kunci this saat sebuah function( yang ada di dalam object) ingin mengakses property object
- jika menggunakan fungsi biasa, this dalam forEach akan menjadi undefined / window
- kata kunci this di anonymous functon mengacunya di nama object

arrow function di Object
- jika kita ingin mengakses object menggunakan kata kunci this, maka mengacunya ke window (yang paling tinggi)
- bisa di gunakan sebagai object method
- tidak bisa akses arguments object, function generator, kata kunci this dan kata kunci super
- gunakan saat kita tidak butuh fitur di atas (akses arguments object, function generator, kata kunci this dan kata kunci super)

implicit return (pengembalian otomatis)
- dalam arrow function sebuah nilai bisa di return otomatis tanap menulis kata kunci return dan kurung kurawal {}
- contoh
sebelum : 
const kaliDua = (angka) => {
  return angka * 2;
};
sesudah : 
const kaliDua = (angka) => angka * 2;

Getter dan setter
- get: menggambil nilai, bisa menggubah dan memformat data sebelum di berikan ke kita
- set : menggubah nilai, periksa data apakah valid dan aman
- tanpa getter dan setter user bisa input data asal asalan
- biasa nya programmer menggunakan tanda _ untuk property bersifat private dan tidak boleh di akses langsung dari luar

Destructuring
- untuk mengambil data dari array atau object tanpa melakukan pengambilan data satu persatu
- membongkar value array atau object ke dalama varibale baru
- jika mau ambil data satu persatu gunakan destructuring
- kalau ingin ambil data di dalam OBJECT nama property nya harus sama
- bisa di gunakan pada function parameter
- bisa menambahkan default value jika tidak ada datanya
- destructuring di array nama variable bisa di rubah sesuka kita