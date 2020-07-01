const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const user = {};

rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you ${answer}, its nice to meet you.`);
  user['name'] = answer;
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Oh nice! I enjoy doing ${answer} as well.`);
    user['activity'] = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      // TODO: Log the answer in a database
      console.log(`Oh cool! I also enjoy listening to ${answer}.`);
      user['music'] = answer;
    
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`${answer} is the best meal!`);
        user['meal'] = answer;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          // TODO: Log the answer in a database
          console.log(`Yum! I like ${answer} as well.`);
          user['favFood'] = answer;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`That's awesome! I love playing ${answer} as well.`);
            user['sport'] = answer;

            rl.question('What is your superpower? Tell us what you are amazing at! ', (answer) => {
              // TODO: Log the answer in a database
              console.log(`Oh wow! Did you really say ${answer}?? That's crazy!`);
              user['superPower'] = answer;


              process.stdout.write(`${user.name} loves listening to ${user.music} while ${user.activity}, devouring ${user.favFood} for ${user.meal}, prefers ${user.sport} over any other sport, and is amazing at ${user.superPower}.`);

              process.stdout.write('\n');

  rl.close();
})})})})})})});
