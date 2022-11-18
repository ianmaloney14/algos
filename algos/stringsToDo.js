// Remove Blanks
function removeBlanks(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr
}
console.log(removeBlanks("Pl ayTha tF u nkyM usi c "))

// Get Digits
function getDigits(str) {
    let newStr = ''
    for (let char in str) {
        if(!isNaN(str[char])) {
            newStr += str[char]
        }
    }
    return Number(newStr)
}
console.log(getDigits("abc8c0d1ngd0j0!8"))

// Acronyms 
function acronyms(str) {
    let newStr = ''
    let wordArr = str.split(' ')

    for (let word in wordArr) {
        if(wordArr[word].length > 0) {
            newStr += wordArr[word][0].toUpperCase()
        }
    }
    return newStr
}

console.log(acronyms(" there's no free lunch - gotta pay yer way. "))

// Count Non Spaces
function countNonSpaces(str) {
    let count = 0
    for (let char in str) {
        if (str[char] != ' ') {
            count++
        }
    }
    return count
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"))

// Remove Shoter Strings
function removeShorterStrings(arr, len) {
    let newArr = []
    for (let value in arr) {
        if (len <= arr[value].length) {
            newArr.push(arr[value])
        }
    }
    return newArr
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))