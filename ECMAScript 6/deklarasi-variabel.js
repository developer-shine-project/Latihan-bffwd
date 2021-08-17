// Deklarasi var dan Hoisting
// Hoisting merupakan aturan dalam javascript yang seolah- olah memindahkan semua deklarasi ke bagian paling atas scope ( bagian paling atas dari kode atau fungsi).

// Terjadi Hoisting
function makeTea(isCold) {
  if (isCold) {
    var tea = 'Make an Ice Tea!';
  } else {
    var tea = 'Make a Hot Tea!';
  }
  return tea;
}

console.log(makeTea(false)); // Make a Hot Tea!

/* 
Aturan penggunaan let dan const ?

kapan kita harus menggunakan let dan const? Untuk aturan umum penggunaanya adalah sebagai berikut:
* Gunakan let ketika variabel yang kita buat akan diinisialisasikan kembali nilainya. 
* Gunakan const ketika variabel yang kita buat tidak ingin diinisialisasikan kembali nilainya.

*/

// Penggunaan Let untuk mengubah nilai/value pada variabel
let name = 'John';
name = 'Doe';

console.log(name);

/* output:
Doe
*/

// Penggunaan const tidak bisa untuk mengubah nilai/value pada variabel
const name = 'John';
name = 'Doe';

console.log(name);

/* error:
TypeError: Assignment to constant variable.
*/

// Mengubah Array dan object mengunakan const
// Array
const fruits = ['apple', 'orange'];
fruits.push('banana'); // method push pada javascript berfungsi untuk menambahkan suatu element pada array

console.log(fruits);

/* output
[ 'apple', 'orange', 'banana' ] 
*/

// Object
const people = { name: 'John', age: 18 };

people.regency = 'Bandung';

console.log(people);

/* output
  { name: 'John', age: 18, regency: 'Bandung' }
*/

// how to run ? just write node deklarasi-variabel.js in your terminal
