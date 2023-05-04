// READLINE


const { stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan no hp anda: ", (hp) => {
    rl.question("Masukkan nama anda : ", (nama) => {
        console.log(`Terimakasih ${nama}, ${hp}`);
        rl.close();
    })
})