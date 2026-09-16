class Orang {
   constructor(firstName, lastName) {
      this.namaDepan = firstName;
      this.namaBelakang = lastName;
   }

   get fullName() {
      return `${this.namaDepan} ${this.namaBelakang}`;
   }

   set fullName(value) {
      const result = value.split(" ");
      this.namaDepan = result[0];
      this.namaBelakang = result[1];
   }
}

const namaOrang = new Orang('Dheo', 'Apriansyah');
console.log(namaOrang);
console.log(namaOrang.fullName);

//  Setter
namaOrang.fullName = 'Felania Arwati';
console.log(namaOrang);