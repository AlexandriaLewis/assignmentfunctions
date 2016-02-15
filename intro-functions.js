/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
  if (a, b) {
    if (a >= b) {
      return a;
    } else if (a <= b) {
      return b;
    } else {
      return a;
    }
  } else if (typeof a === "string" && typeof b === "string")  {
    return NaN;
  } else if (typeof a === "string") {
    return 0;
  } else {
    return 0;
  }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    // YOUR CODE HERE
    if (typeof a === "string") {
      return 0;

    } else if (typeof b === "string") {
      return 0;

    } else if (typeof c === "string") {
      return 0;

    } else if (typeof a === "string" && typeof b === "string" && typeof c === "string"){
      return NaN;
    } else {
      if (a >= b && a >= c) {
      return a;
      } else if (b >= a && b >= c) {
        return b;
      } else if (c >= a && c >= b) {
        return c;
      }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    // YOUR CODE HERE
    if (typeof char === "string") {

              lesschar = char.toLowerCase();

              if (lesschar === "a"){
                return true;
              } else if (lesschar === "e"){
                return true;
              } else if (lesschar === "i"){
                return true;
              } else if (lesschar === "o"){
                return true;
              } else if (lesschar === "u"){
                return true;
              } else {
                return false;
              }

    } else {
      return false;
    }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){
    // YOUR CODE HERE
if (typeof text === "string") {
    var newStr = "";
    for (var i = 0; i < text.length; i++) {
      if (!isVowel(text[i]) && text[i] !== " ") {
        newStr += text[i] + "o" + text[i];
      } else {
        newStr += text[i];
      }
    }
    return newStr;
} else {
  return "0";
}

}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    // YOUR CODE HERE
    var revStr = "";
    for (var i = str.length - 1; i > 0; i--){
      revStr += str[i];
    }
    return revStr;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
    var longestWord = "";

}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
