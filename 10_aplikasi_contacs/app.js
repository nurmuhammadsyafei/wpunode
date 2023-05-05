const fs = require('fs');

// console.log(fs)


// ------ syncronus, menusliskan string ke File
// try {
//     fs.writeFileSync("data/e/text.txt", "hasule")
// } catch (error) {
//     console.log(error)
// }


// ------ asyncronus, menusliskan string ke File
// fs.writeFile('data/test.txt', "Halo dunia secara assyncronus", (err) => {
//     console.log(err);
// })




// ------ Membaca Isi File secara syncronus
// const app = fs.readFileSync("data/test.txt");
// console.log(app.toString());




// ------ Membaca Isi File secara assyncronus

fs.readFile("data/test.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})