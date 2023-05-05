// READLINE

const fs = require('fs');
const { stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contact.json jika belum ada 
const dataPath = "./data/contact.json";

if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};
// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question("Masukkan Email anda :", (email) => {
//             resolve(email);
//         });
//     });
// };


const main = async () => {
    const nama = await tulisPertanyaan("Masukkan nama anda")
    const email = await tulisPertanyaan("Masukkan email anda")
    const hp = await tulisPertanyaan("Masukkan hp anda")
    // const email = await pertanyaan2()
    const contact = { nama, email, hp };
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync(dataPath, JSON.stringify(contacts), 'utf-8');
    console.log(contact);
    rl.close();
}


main();
// rl.question("masukan no hp anda: ", (hp) => {

// })


// rl.question("masukan no hp anda: ", (hp) => {
//     rl.question("Masukkan nama anda : ", (nama) => {
//         const contact = { nama, hp };
//         const file = fs.readFileSync(dataPath, 'utf-8');
//         const contacts = JSON.parse(file);
//         contacts.push(contact);

//         fs.writeFileSync(dataPath, JSON.stringify(contacts), 'utf-8');
//         console.log(contact);
//         rl.close();
//     })
// })