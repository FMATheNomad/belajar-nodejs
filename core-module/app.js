const fs = require('fs');
const readline = require('readline');

// filesystem / fs

// membuat file menggunakan file system core module secara Synchronous
// try {
//     fs.writeFileSync('data/nama-file.txt', 'Hallo mas secara synchronous!');
// } catch (e) {
//     console.log(e);
// }

// membuat file menggunakan file system core module secara Async
// fs.writeFile('data/nama-file.txt', 'Hello mas! secara Async!', (err) => {
//     console.log(err);
// });

// membaca isi file menggunakan file system secara Sync
// try {
//     const data = fs.readFileSync('data/nama-file.txt', 'binary');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// membaca isi file menggunakan file system secara Async
// fs.readFile('data/nama-file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// })

// readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askRandomQuestion() {
    const questionNumber = getRandomNumber(1, 5);

    switch (questionNumber) {
        case 1:
            rl.question('What is your favorite color? ', (answer) => {
                console.log(`Your favorite color is: ${answer}`);
                askNextRandomQuestion();
            });
            break;
        case 2:
            rl.question('What is your favorite food? ', (answer) => {
                console.log(`Your favorite food is: ${answer}`);
                askNextRandomQuestion();
            });
            break;
        case 3:
            rl.question('Where is your dream travel destination? ', (answer) => {
                console.log(`Your dream travel destination is: ${answer}`);
                askNextRandomQuestion();
            });
            break;
        case 4:
            rl.question('What is your hobby? ', (answer) => {
                console.log(`Your hobby is: ${answer}`);
                askNextRandomQuestion();
            });
            break;
        case 5:
            rl.question('What is your favorite book? ', (answer) => {
                console.log(`Your favorite book is: ${answer}`);
                askNextRandomQuestion();
            });
            break;
        default:
            // In case of any issues with random number generation, just close the interface
            rl.close();
            break;
    }
}

let questionCounter = 0;
const totalQuestions = 5;

function askNextRandomQuestion() {
    questionCounter++;
    if (questionCounter < totalQuestions) {
        askRandomQuestion();
    } else {
        console.log('Thank you for answering all the questions!');
        rl.close();
    }
}

rl.question('Masukkan nama anda? ', (nama) => {
    console.log(`Thanks! ${nama}`);

    rl.question('Masukkan nomor hp anda! ', (nomorHP) => {
        console.log(`Thanks for providing your phone number: ${nomorHP}`);

        askRandomQuestion();
    });
});