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
    let pali = ""
    for(let w = word.length-1; w >= 0; w--){
        pali += word[1]
    }
    if(pali == word){
        return true
    }
    else {
        return false
    }

}

function calculateDiscountedPrice(originalPrice,discountPercentage){
    let discountedPrice = originalPrice - (originalPrice * (discountPercentage/100))
    return discountedPrice
}

console.log("Tax Calculation:",calculateTax(100))
console.log("Uppercase conversion:",convertToUpperCase("flop"))
console.log("Maximum number:",findMaximum(9,3))
console.log("Palindrome boolean:",isPalindrome("rotator"))
console.log("The dicounted price:",calculateDiscountedPrice(100,20))