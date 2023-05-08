const fs = require('fs');
const { stdout } = require("process");
const validator = require("validator");
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contact.json jika belum ada 
const dataPath = "./data/contact.json";

if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };

const loadContact = () => {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama, email, hp) => {
    const contact = { nama, email, hp };
    // const file = fs.readFileSync(dataPath, 'utf-8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact();
    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log("Contact sudah terdaftar, gunakan nama lain!")
        return false;
    }

    // cek require
    if (email) {
        if (!validator.isEmail(email)) {
            console.log("Email tidak valid!")
            return false;
        }
    } else {
        console.log("Email wajib di isi!")
        return false;
    }

    // cek hp
    if (!validator.isMobilePhone(hp, 'id-ID')) {
        console.log("No Hp tidak valid!")
        return false;
    }
    contacts.push(contact);

    fs.writeFileSync(dataPath, JSON.stringify(contacts), 'utf-8');
    console.log(contact, "Terimakasih");
    // rl.close();
}


const listContact = () => {
    const contacts = loadContact();
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.hp}`)
    })
}


const detailContact = (nama) => {
    const kontaks = loadContact();
    const kontak = kontaks.find(
        (kontak) => kontak.nama.toLowerCase() === nama.toLowerCase()
    )
    if (!kontak) {
        console.log("Kontak tidak ditemukan")
    } else {
        console.log(kontak)
    }


}

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );
    if (contacts.length === newContacts.length) {
        console.log(`${nama} tidak ditemukan!`)
        return false
    }
    else {
        fs.writeFileSync('data/contact.json', JSON.stringify(newContacts))
        console.log(`data kontak ${nama} berhasil di hapus`)
    }
}

module.exports = { simpanContact, listContact, detailContact, deleteContact };