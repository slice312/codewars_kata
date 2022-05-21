const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alph = Array.from(alphabet);
"1234567890,. "

const al = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ";

const sumPowersOfTwo = (num) => {
    let res = 0;
    for (let i = 0; i < num; i++) {
        res += 2 ** i;
    }

    return res;
};

const encode = (srcPosition, alphabetPosition) => {
    const offset = alphabetPosition - 1;
    const twoPowerOfPosition = sumPowersOfTwo(srcPosition);
    const decodedAlphabetPosition = alphabetPosition * twoPowerOfPosition + 1 + offset;
    return alphabet[decodedAlphabetPosition - 1];
};

const encodeStr = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // debugger
        // if (i === 2)
            // debugger
        const ch = str[i];
        const alphabetPosition = (alph.findIndex(x => x === ch) + 1) % 27;
        const srcPosition = i + 1;
        result += encode(srcPosition, alphabetPosition);
    }

    return result;
};


const device = {
    encode: encodeStr
};


console.log (device.encode ('A'));
console.log (device.encode ('B'));

console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode (a) ;
}).join ('')) 


// console.log (device.encode ('aa')) ;
// console.log (device.encode ('aaa')) ;
// console.log (device.encode ('aaaa')) ;


// console.log("--------------")

// console.log (device.encode ('b')) ;
// console.log (device.encode ('bb')) ;
// console.log (device.encode ('bbb')) ;

// console.log("--------------")



// console.log (device.encode ('c')) ;
// console.log (device.encode ('cc')) ;
// console.log (device.encode ('ccc')) ;

// console.log("--------------")

// console.log (device.encode ('d')) ;
// console.log (device.encode ('dd')) ;
// console.log (device.encode ('ddd')) ;



console.log(device.encode("The"))