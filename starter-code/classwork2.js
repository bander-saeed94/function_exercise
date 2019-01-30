function factorial(n){
    if(n < 0){
        return n
    }
    else if (n <= 1 ){
        return 1;
    }
    return n * factorial(n-1)
}

console.log(factorial(-2))


function countLetter(str){
    let strArr = str.split('')
    let output = {}
    strArr.forEach(function(char){
        if(!output[char] ){
            output[char] = 1 
        } else{
            output[char] += 1
        }
    })
    return output;
}

console.log(countLetter('apple'))

function uniqueArr(arr1, arr2){
    let output = []
    let distinct1 = arr1.filter(function(el){
        return arr2.indexOf(el) < 0
    })
    let distinct2 = arr2.filter(function(el){
        return arr1.indexOf(el) < 0
    })
    output = [...distinct1, ...distinct2 ]
    return output
}
console.log(uniqueArr([1, 2, 3], [2, 3, 4]))


function uniqueArr2(arr1, arr2){
    let output = []
    let similar = arr1.filter(function(el){
        return arr2.indexOf(el) >= 0
    })
    output = similar
    return output;
}
console.log(uniqueArr2([1, 2, 3], [2, 3, 4]))


function ch(arr1, arr2){
    let output = []
    arr1.forEach(function(el){
        let secIndex = arr2.indexOf(el) 
        if( secIndex >= 0){
            output.push(el)
            arr2.splice(secIndex,1)
        }
    })
    return output;
}
console.log(ch([1, 2, 2, 2, 3], [2, 2, 3, 4]))

function ch2(arr1, arr2){
    let tempArr1 = arr1
    let tempArr2 = arr2
    let output = []
    let distinct1 = []
    let distinct2 = []
    arr1.forEach(function(el){
        let secIndex = tempArr2.indexOf(el) 
        if( secIndex < 0){
            distinct1.push(el)
        } else {
            tempArr2.splice(secIndex,1)
        }
    })
    arr2.forEach(function(el){
        let secIndex = tempArr1.indexOf(el) 
        if( secIndex < 0){
            distinct2.push(el)
        } else {
            tempArr1.splice(secIndex,1)
        }
    })
    output = [...distinct1, ...distinct2 ]
    return output;
}
console.log(ch2([1, 2, 2, 2, 3], [2, 2, 3, 4]))
