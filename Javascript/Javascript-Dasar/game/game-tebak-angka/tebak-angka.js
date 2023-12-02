let lagi = true;

while (lagi) {
  // pilihan player
  let player = prompt("Masukkan angka 1-10 \ndan Anda mempunyai kesempatan 3 kali");

  // pilihan computer dan membangkitkan angka random
  let computer = Math.floor(Math.random() * 10) + 1;
  console.log(computer);

  // Alur Permainan
  let hasil = "";

  for (let kesempatan = 3; kesempatan >= 1; kesempatan--) {
    if (player == computer) {
      hasil = "BENAR";
      alert("Tebakan anda " + hasil);
    } else if (player !== computer && kesempatan > 1) {
      hasil = player < computer ? "TERLALU RENDAH" : "TERLALU TINGGI";

      player = prompt("Angka anda " + hasil + "\nCoba Lagi");
    } else if (player !== computer && kesempatan == 1) {
      hasil = "ANDA GAGAL";

      alert(hasil + "\nseharusnya " + computer + "\nKesempatan anda sudah habis. Silahkan coba lagi!!!");
    } else {
      hasil = "Anda tidak membaca perintah 😒";
    }
  }

  lagi = confirm("Mau Lagi???? 😁");
}

alert("Terima Kasih sudah bermain👍");
