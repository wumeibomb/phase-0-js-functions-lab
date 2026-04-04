function calculateTax(amount) {
    let tax = 0.10 * amount;
    return tax;
}

function convertToUpperCase(text) {
    let string = text.toUpperCase();
    return string;
}

function findMaximum(num1,num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

function isPalindrome(word){
    let pali = "";
    for (let i = word.length - 1; i >= 0; i--) {
        pali += word[i]
    }
    if (pali == word) {
        return true
    }
    else {
        return false;
    }
}
let pali1 = "racecar"
let pali2 = "deed"
let pali3 = "flop"

console.log("Palindrome1: ", isPalindrome(pali1));
console.log("Palindrome2: ", isPalindrome(pali2));
console.log("Palindrome3: ", isPalindrome(pali3));


function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountedPrice = originalPrice - (originalPrice * discountPercentage/100) 
    return discountedPrice;
}

console.log ("Discounted Price:", calculateDiscountedPrice(100, 20));
console.log ("This is the maximum:",findMaximum(5,10))
console.log ("Tax Amount:", calculateTax(60));
console.log ("UpperCase Text:", convertToUpperCase("yeahiletgo"))


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

