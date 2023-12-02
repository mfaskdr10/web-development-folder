// buat varible penumpang berisi array
let penumpang = [];

// membuat function tambahPenumpang
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika ada nama penumpang yang sama
      else if (penumpang[i] == namaPenumpang) {
        // menampilkan pesan kesalahan
        console.log(`${namaPenumpang} sudah ada didalam angkot`);
        // kembalikan array dan keluar dari function
        return penumpang;
      }
      // jika seluruh kursi sudah terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong
    console.log(`angkot kosong`);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  }
  // else
  else {
    // telusuri seluruh kursi dari awal
    for (i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus dari array penumpang dengan memberi nilai undefined
        penumpang[i] = undefined;
        // kembalikan isi array dan keluar dari function
        return penumpang;
        // jika tidak ada nama penumpang yang sesuai
      } else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahannya
        console.log(`${namaPenumpang} tidak ada di dalam angkot`);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};
