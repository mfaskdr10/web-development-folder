// Manipulasi Array

// 1. Menambah isi Array
let arrPlus = ["Fadhil", "Alvan", "Syah"];
console.log(arrPlus);
console.log(arrPlus[1]);

let arrPlus1 = [];
arrPlus1[0] = "Kucing";
arrPlus1[1] = "Sapi";
arrPlus1[2] = "Kambing";
arrPlus1[3] = "Gajah";
arrPlus1[5] = "Bebek";
console.log(arrPlus1);

// 2. Menghapus Array
let arrDel = ["Fadhil", "Alvan", "Syah"];
arrDel[1] = undefined;
console.log(arrDel);

// 3. Menampilkan isi Array
let arrShow = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];

for (i = 0; i < arrShow.length; i++) {
  console.log("Siswa ke " + (i + 1) + ": " + arrShow[i]);
}

console.log(arrShow.join(" - "));

// Macam-macam method array:
// 1. join() => mengubah array menjadi string
let arrJoin = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
console.log(arrJoin.join(" - "));

// 2. push() => menambahkan data di akhir
let arrPush = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
arrPush.push("Kholis", "Endiwawan");

console.log(arrPush.join(" - "));

// 3. pop() => menghapus data di akhir
let arrPop = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
arrPop.pop();

console.log(arrPop.join(" - "));

// 4. unshift() => menambahkan data di awal
let arrUnshift = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
arrUnshift.unshift("mfaskdr10");

console.log(arrUnshift.join(" - "));

// 5. shift() => menghapus data di awal
let arrShift = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
arrShift.shift();

console.log(arrShift.join(" - "));

// 6. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
let arrSplice = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];
arrSplice.splice(3, 0, "Fadhil Alvan");

console.log(arrSplice.join(" - "));

arrSplice.splice(4, 2, "Doddy", "Fitri");
console.log(arrSplice.join(" - "));

// 7. slice
// slice(nilaiAwal, (nilaiAkhir-1))
let arrSlice = ["Fadhil", "Alvan", "Syah", "mfaskdr10", "Lita", "Lestari"];

let sliceNew = arrSlice.slice(2, 4);
console.log(sliceNew.join(" - "));

// 8. foreach mengembalikan nilai
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

angka.forEach(function (e) {
  console.log(e);
});

let nama = ["Muhammad", "Fadhil", "Alvan", "Syah"];

nama.forEach(function (e, i) {
  console.log(`Siswa ke ${i + 1} : ${e}`);
});

let namaHewan = ["Kucing", "Sapi", "Gajah"];

namaHewan.forEach(function (e, i) {
  console.log(`Hewan ke ${i + 1} : ${e}`);
});

// 9. map mengembalikan sebuah array
let angkaMap = [1, 4, 5, 7, 6];

let angka1 = angkaMap.map(function (e) {
  return e * 2;
});

console.log(angka1.join(" - "));

// 10. sort mengembalikan sebuah array
let angkaAcak = [1, 7, 4, 6, 3, 2, 9, 8, 5];
angkaAcak.sort();

console.log(angkaAcak.join(" - "));

let angkaAcak1 = [1, 7, 4, 6, 3, 2, 9, 8, 5, 10, 15, 30, 20, 45, 32];
angkaAcak1.sort(function (a, b) {
  return a - b;
});
console.log(angkaAcak1.join(" - "));

// 11. filter menghasilkan array baru dan ditampung ke variable baru
let angkaFilter = [1, 7, 4, 6, 3, 2, 9, 8, 5, 10, 15, 30, 20, 45, 32];
let filterAngka = angkaFilter.filter(function (x) {
  return x > 8;
});
console.log(filterAngka.join(" - "));

// 12. find menghasilkan satu nilai baru dan ditampung ke variable baru
let angkaFind = [1, 7, 4, 6, 3, 2, 9, 8, 5, 10, 15, 30, 20, 45, 32];
let findAngka = angkaFind.find(function (e) {
  return e > 5;
});

console.log(findAngka);
