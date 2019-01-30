let _ = require('underscore')
let morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
}

function encode(word){
    word = word.split('')
    let encoded = ''
    word.forEach(function(char){
        if(char == ' ') encoded += ' '
        else encoded += morse[char] + ' '
    })
    return encoded
}
console.log(encode("hello world"))

function decode(encoded){
    encoded = encoded.split('')
    let sentance = ''
    let word = ''
    encoded.forEach(function(char, index){
        word += char
        if(word == ' ') {
            sentance += ' '
            word = ''
        }
        else if(_.invert(morse)[word + encoded[index + 1]]){
            //do nothing
        }
        else if (_.invert(morse)[word]){
            sentance += _.invert(morse)[word]
            word = ''
        }
        
    })
    return sentance
}

console.log(decode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..'))