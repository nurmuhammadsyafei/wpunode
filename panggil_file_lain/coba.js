// console.log("ini file coba")


function cetakNama(nama) {
    return `Halo, nama aku ${nama}`;
}


// console.log(cetakNama("fei"))

function perkalian(param1, param2) {
    return param1 * param2;
}

const ayam = "ayame";

const sales = {
    nama: "Ririnta Febriliani",
    cabang: "Bangko",
    sayHi() {
        return `Hi perkenalkan saya ${this.nama}, dari cabang ${this.cabang}`
    }
}

class Orang {
    constructor() {
        console.log("bjek orang telah dibuat")
    }
}

// cara export modul satu satu
module.exports.cetakNama = cetakNama;
module.exports.perkalian = perkalian;
module.exports.ayam = ayam;
module.exports.sales = sales;
module.exports.Orang = Orang;

// cara export modul secara bareng2
module.exports = {
    cetakNama: cetakNama,
    perkalian: perkalian,
    ayam: ayam,
    sales: sales,
    Orang: Orang
}

// cara yang lebih simpel
module.exports = { cetakNama, perkalian, ayam, sales, Orang }

