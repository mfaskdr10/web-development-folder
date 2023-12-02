let tanya = true;

while (tanya) {
  // menangkap pilihan player
  let p = prompt("Pilih: gajah, semut, orang");

  // menangkap pilihan computer
  // menangkap angka random untuk menentukan pilihan
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan aturan bermain
  let hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "semut" ? "KALAH" : "MENANG";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
  } else {
    hasil = "memasukkan kondisi yang salah";
  }

  // tampilkan hasilnya
  let tampilkan = alert("Kamu memilih " + p + "\n" + "dan komputer memilih " + comp + "\n" + "maka kamu " + hasil);

  // Apakah mau mengulang

  tanya = confirm("Mau main lagi???!!!");
}

alert("Terima Kasih sudah bermain");
