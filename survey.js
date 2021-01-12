const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable? :", (answer) => {
  rl.question("What's an activity you like doing? :", (answer1) => {
    rl.question("What do you listen to while doing that? :", (answer2) => {
      rl.question('Which meal is your favourite? :', (answer3) =>{
        console.log(`Thank you for your valuable feedback: ${answer} ${answer1} ${answer2} ${answer3} `);
        rl.close();
      })      
    })
  })
});


