function LetterCapitalize(str) {
  // code goes here
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

// keep this function call here
console.log(LetterCapitalize("I am mehmet"));
