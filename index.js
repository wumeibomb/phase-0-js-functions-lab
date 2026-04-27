
function calculateTax(amount) {
    let tax = 0.10 * amount
    return tax
}

function convertToUpperCase(text){
   let string =  text.toUpperCase()
   return string
}

function findMaximum(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}

function isPalindrome(word){
   let pali = word.split("").reverse().join("");
   if(pali == word){
    return true
   }
   else{
   return false
}
}
//method that worked with an empty word param

function calculateDiscountedPrice(originalPrice,discountPercentage){
    let discountedPrice = originalPrice - (originalPrice * (discountPercentage/100))
    return discountedPrice
}

let flop = "Nothing compares to"
let separator = flop.split("compares")
console.log(separator)
//split separates a string using a given character 

console.log("Palindrome", isPalindrome("fart"))
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };