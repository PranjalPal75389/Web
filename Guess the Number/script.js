function start(){
  let attempt = 0;
  let running = true;
  random = Math.floor(Math.random() * 100) + 1;
  console.log(random);
  input = window.prompt("Guess the number between 1 to 100");
  while (running) {
    attempt++;
    if (random == input) {
      window.alert(
        `congratution 🎊🎉🎉 you guess the number in ${attempt} attempt`
      );
      if (attempt == 1) {
        window.alert(
          ` you scored the highest score. only 3 % people👯 have this record🏆`
        );
      }

      running = false;
    } else if (input > random) {
      input = window.prompt("Your guess is to big guess a smaller number");
    } else if (input < random) {
      input = window.prompt("Your guess is to small guess a bigger number");
    }
  }
}