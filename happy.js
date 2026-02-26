/*
    Project: The Reason I Smile
    Author: Edrick Muthamia
    Status: Forever Running ❤️
*/

class MyHeart {
  constructor() {
    this.owner = "Bynum 💙";
    this.loveLevel = Infinity;
    this.status = "Completely Yours";
  }

  celebrateBirthday() {
    const message = [
      "Happy Birthday, my beautiful girl 🎉",
      "Meeting you was my favorite plot twist.",
      "You didn’t just enter my life…",
      "you changed the whole program.",
      "May your day be filled with smiles,",
      "and your year filled with blessings.",
      "Forever grateful for you. ❤️",
    ];

    message.forEach((line) => console.log(line));
  }

  runForever() {
    while (true) {
      this.loveLevel++;
      this.status = "Still choosing you ❤️";
      break; // because one lifetime isn't enough
    }
  }
}

// Initialize
const edrickHeart = new MyHeart();
edrickHeart.celebrateBirthday();
edrickHeart.runForever();

console.log("— With all my love, Edrick 💙");
