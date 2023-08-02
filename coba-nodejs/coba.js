// Sync
// const getUserSync = (id) => {
    // let nama = '';
    // if (id === 1) {
    //     nama === "Fariz";
    // } else {
    //     nama === "Aditya";
    // }
//     const nama = id === 1 ? 'Fariz' : 'Aditya';
//     return {id, nama};
// };
// const userSatu = getUserSync(1);
// console.log(userSatu);
// const userDua = getUserSync(2);
// console.log(userDua);
// const halo = "Hello world";
// console.log(halo);

// Async
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=>{
        const meja = id === 1 ? 'Pesanan meja 1 sudah selesai!' : 'Pesanan meja 2 sudah selesai!';
        callback({id, meja});
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});
const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});
const halo = "Hello world";
console.log('Password wifi nya 123!');