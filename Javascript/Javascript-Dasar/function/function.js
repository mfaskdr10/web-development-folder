// Funtcion Dasar
function kali(a, b) {
  return a * b;
}

console.log(kali(2, 3));

// Parameter dan Argument
function tambah() {
  let hasil = 0;

  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

let coba = tambah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(coba);

// 