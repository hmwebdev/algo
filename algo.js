// Exos algorithme de base
// Aucun output autre que le console log
// Baser sur les exercices algorithmique freecodecamp.org

// Inverser string
function reverseString(str) {
    for(var reverse = "", i = str.length - 1; i >= 0; i--) {
          reverse += str[i];
    }
    return reverse;
}
  
console.log(reverseString("hello"));
  
  // Décomposer un nombre en facteur
function factorialize(num) {
    for(var produit = 1; num > 0; num--) {
      produit *= num;
    }
      return produit; 
}
  
console.log(factorialize(10));
  
  // Trouver le mot le plus long dans une phrase
function findLongestWordLength(str) {
    var words = str.split(" ");
    var number = [];
    for(var i = 0; i < words.length; i++) {
      number.push(words[i].length);
    } 
    return Math.max(...number);
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Reçoit 4 nombres et retourne le plus grand des 4
function largestOfFour(arr) {
    var results = [];
    for(var n = 0; n < arr.length; n++) {
        var biggest = arr[n][0];
        for(var sb = 1; sb < arr[n].length; sb++) {
            if(arr[n][sb] > biggest) {
              biggest = arr[n][sb];
            }
        } 
        results[n] = biggest;
    }
    return results;
}
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Véfifie si le target corespond à la fin du mot (Approche déclarative)
function confirmEnding(str, target) {
  
    return str.slice(str.length - target.length) === target;
}
  
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "sage"))

  // Faire répéter un mot ou une phrase le nombre de fois voulu (Approche récursive)
  function repeatStringNumTimes(str, num) {
    var repeat = num - 1;
    var word = "";
    if(repeat >= 0) {
      word = str + repeatStringNumTimes(str, repeat);
    }
    return word;
}
  
console.log(repeatStringNumTimes("abc", 3));
