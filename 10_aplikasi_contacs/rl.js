const yargs = require("yargs")
const { simpanContact, listContact, detailContact, deleteContact } = require("./contact")
// console.log(yargs.argv)

// yargs.command(
//     'add',
//     'Menambahkan kontak baru',
//     () => { }, (argv) => {
//         console.log(argv.nama)
//     });

// yargs.parse()


yargs.command({
    command: "add",
    describe: "untuk menambahkan kontak baru",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: 'string'
        },
        hp: {
            describe: "No telp",
            demandOption: true,
            type: "String"
        }
    },
    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     hp: argv.hp
        // }
        // console.log(contact)
        simpanContact(argv.nama, argv.email, argv.hp)
    }
}).demandCommand()


// menampilkan semua nama & no hp concact
yargs.command({
    command: 'list',
    describe: "menampilkan semua nama & no HP contact",
    handler() {
        listContact();
    }
})

yargs.command({
    command: 'detail',
    describe: "menampilkan detail sebuah kontak",
    builder: {
        nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        detailContact(argv.nama)
    }
})

yargs.command({
    command: 'delete',
    describe: "Menghapus kontak berdasarkan nama",
    builder: {
        nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        deleteContact(argv.nama)
    }
})

yargs.parse()



// =+=+=++=+==+==++==+++==++====++++=====++++===+=====+=+=++=+==+==++==+++==++====++++=========++++===+====
// const contact = require('./contact')
// const main = async () => {
//     const nama = await contact.tulisPertanyaan("Masukkan nama anda")
//     const email = await contact.tulisPertanyaan("Masukkan email anda")
//     const hp = await contact.tulisPertanyaan("Masukkan hp anda")
//     contact.simpanContact(nama, email, hp)
// }
// main();