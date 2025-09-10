/* 
 Penalty Points Calculator
In the file passwordPenalty.js you have to implement a second function called penaltyPoints. This function receives a password code and returns the penalty points awarded to that password.

Penalty rules: Sequences of characters are awarded penalty points in the following order:

Sequence of 2 characters/numbers are awarded 1 penalty point
Sequences of 3 or more characters/numbers are awarded 2 penalty points Examples:
The password 2hT62g33u7 has 1 penalty point for the sequence of 3's;
The password yh53GGf7h6 has 1 penalty point for the sequence of G's;
The password hg6666WT5s has 2 penalty points for the sequence of 6's;
The password hg6WTTT5ms has 2 penalty points for the sequence of T's;*/

function penaltyPoints(password = "") {
  let penalty = 0;
  let count = 1;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      count++;
    } else {
      if (count === 2) penalty += 1;
      else if (count >= 3) penalty += 2;
      count = 1;
    }
  }

  if (count === 2) penalty += 1;
  else if (count >= 3) penalty += 2;

  return penalty;
}
console.log(penaltyPoints("2hT62g33u7")); // expected 1
console.log(penaltyPoints("yh53GGf7h6")); // expected 1
console.log(penaltyPoints("hg6666WT5s")); // expected 2
console.log(penaltyPoints("hg6WTTT5ms")); // expected 2
console.log(penaltyPoints("aabbcc")); // expected 3
