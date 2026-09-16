
// Public Class Field => property yang di buat langsung di dalam class
// - bisa dibuat tanpa melalui consturctor atau bisa dengan consturctor
// - property nya bisa di akses dari luar class
// - gunakan saat nilainya sama untuk setiap object, jika sama gunakan constructor

class Rekening{
   bank = 'BCA'
   saldo = 0;

  constructor(name){
   this.namaPemilik = name;
  }

  setor(jumlah){
   this.saldo += jumlah;
  }

  cekSaldo(){
   console.log(`Saldo : Rp${this.saldo}`)
  }
}

// jika nilainya sama 
class Mobil{
   roda  = 4;
   bahanBakar = 'Besin';

   constructor(merek, warna){
      this.merek = merek;
      this.warna = warna;
   }
}

const dheo = new Rekening('Dheo');
console.log(dheo.bank);
console.log(dheo.namaPemilik);

const mobil1 = new Mobil('Honda', 'Hitam');
const mobil2 = new Mobil('Toyota', 'Putih');
console.log(mobil1);
console.log(mobil2);

