class Salutation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hello World...</h1>`;
        this.style.color = "red";
    }
}


customElements.define('salutation-element', Salutation);

// 3 kyu 

 const alphabet =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ";
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alph = Array.from(alphabet);
"1234567890,. "

const device = {}

const dict = Array.from("bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa");
const lastIndex = dict.length - 1;

device.decode = (str) => {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (dict.indexOf(char) > -1) {
            res += char;
            continue;
        }
        const ix = (dict.indexOf(char) + lastIndex - i) % dict.length;
        if (!dict[ix]) debugger
        res += dict[ix];
    }
    return res;
}

console.log(device.decode("bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa"));
// const al = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ";

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
    let mod = (decodedAlphabetPosition - 1); // TODO: rename
    if (mod >= alph.length)
        mod = mod % alph.length - 1
        //67 % alph.length - 1
    return alphabet[mod];
};

const encodeStr = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // debugger
        // if (i === 2) debugger
        const ch = str[i];
        const alphabetPosition = (alph.findIndex(x => x === ch) + 1);
        const srcPosition = i + 1;
        result += encode(srcPosition, alphabetPosition);
    }

    return result;
};


device.encode = encodeStr

const test1 = "abcdefghijklmnopqrstuvwxyz".split ("").map (function (a) {
  return device.encode (a) ;
}).join ("");

// console.log (test1, test1 === "bdfhjlnprtvxzBDFHJLNPRTVXZ");

// console.log (device.encode ("AAAAA")) ;
// console.log (device.encode ("BBBBB")) ;
// console.log (device.encode ("C")) ;
// console.log (device.encode ("D")) ;
// console.log (device.encode ("E")) ;
// console.log (device.encode ("F")) ;
// console.log (device.encode ("G")) ;
// console.log (device.encode ("H")) ;
// console.log (device.encode ("I")) ;
// console.log (device.encode ("J")) ;
// console.log (device.encode ("K")) ;
// console.log (device.encode ("L")) ;


// console.log (device.encode ("aa")) ;
// console.log (device.encode ("aaa")) ;
// console.log (device.encode ("aaaa")) ;


// console.log("--------------")

// console.log (device.encode ("b")) ;
// console.log (device.encode ("bb")) ;
// console.log (device.encode ("bbb")) ;

// console.log("--------------")



// console.log (device.encode ("c")) ;
// console.log (device.encode ("cc")) ;
// console.log (device.encode ("ccc")) ;

// console.log("--------------")

// console.log (device.encode ("d")) ;
// console.log (device.encode ("dd")) ;
// console.log (device.encode ("ddd")) ;



// console.log(device.encode("The"))






// const pow = (number, power) => {
//     if (power === 0)
//         return 1;
//     if (power === 1)
//         return number;
//     for (let i = 0; i < power; i++) {
//         number = (number ** number) % 10
//     }
//     return number
// }

// console.log(pow(4, 0));
// console.log(pow(4, 1));

// console.log(pow(4, 2));
// console.log(pow(9, 7));









//----------------------------------------------------
// 5 kyu Last digit of a large number

const lastDigit = (number, power) => {
      if (power === 0)
        return 1;
    if (power === 1)
        return number;
    for (let i = 0; i < power; i++) {
        number = (number ** number) % 10
    }
    return number
}




//----------------------------------------------------
// 6 kuy Decode the Morse code


console.log("MORSE")

const MORSE_CODE_DICT = { "A":".-", "B":"-...",
                    "C":"-.-.", "D":"-..", "E":".",
                    "F":"..-.", "G":"--.", "H":"....",
                    "I":"..", "J":".---", "K":"-.-",
                    "L":".-..", "M":"--", "N":"-.",
                    "O":"---", "P":".--.", "Q":"--.-",
                    "R":".-.", "S":"...", "T":"-",
                    "U":"..-", "V":"...-", "W":".--",
                    "X":"-..-", "Y":"-.--", "Z":"--..",
                    "1":".----", "2":"..---", "3":"...--",
                    "4":"....-", "5":".....", "6":"-....",
                    "7":"--...", "8":"---..", "9":"----.",
                    "0":"-----", ", ":"--..--", ".":".-.-.-",
                    "?":"..--..", "/":"-..-.", "-":"-....-",
                    "(":"-.--.", ")":"-.--.-"};

const MORSE_DECODE_DICT = {".-" : "A", "-..." : "B",
                    "-.-." : "C", "-.." : "D", "." : "E",
                    "..-." : "F", "--." : "G", "...." : "H",
                    "..": "I", ".---": "J", "-.-": "K",
                    ".-.." : "L", "--" : "M", "-." : "N",
                    "---" : "O", ".--." : "P", "--.-" : "Q",
                    ".-." : "R", "..." : "S", "-" : "T",
                    "..-" : "U", "...-" : "V", ".--" : "W",
                    "-..-" : "X", "-.--" : "Y", "--.." : "Z",
                    ".----" : "1", "..---" : "2", "...--" : "3",
                    "....-": "4", "....." : "5", "-...." : "6",
                    "--..." : "7", "---.." : "8", "----." : "9",
                    "-----" : "0", ", ":"--..--", ".-.-.-" :".",
                    "..--.." : "?", "-..-." : "/", "-....-" : "-",
                    "-.--." : "(", "-.--.-" : ")"
                };
let morse = ".... . -.--   .--- ..- -.. .";
morse = "... --- ..."

const decodeMorse = (input) => {
    const words = input.trim()
        .split("   ");


    // debugger
    const result = words.map(x => x.split(" ")
            .map(x => MORSE_DECODE_DICT[x]) // ?????? ?? ???????????? ???????? ?????? ???????????????????? ????????????????????????
            .join("")
        ).join(" ");
    return result;
};

// console.log(decodeMorse(morse));



//----------------------------------------------------
// 4 kuy Decode the Morse code, advanced
// Code in binary format

let bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
bits = "10111"
bits = "111"
//morse = ".... . -.--   .--- ..- -.. .";

const decodeBits = (input) => {
    console.log(input)
    input = input.replace(/^0+|0+$/g, "");
    return input.split("00000000000000")
        .map(word => {
            // debugger
            return word.split(/0{3,6}/)
                .map(letter => {
                  return letter.split(/0{1,2}/)
                        .filter(x => x)
                        .map(t => {
                            if (t === "11")
                                return "."
                            if (t === "111")
                                return "-"
                            if (t === "111111")
                                return "-"
                            else
                                return "."
                        })
                        .join("")
                })
                .join(" ")
        })
    .join("   ");
};



console.log((decodeBits(bits)));
console.log(decodeMorse(decodeBits(bits)));

// const decodeBits = (input) => {
//     input = input.replaceAll("00000000000000", "   ");
//     input = input.replaceAll("000000", " ");
//     return input.split(" ")
//         .filter(x => x)
//         .map(x => {
//             return x.split("00")
//                 .map(t => (t === "11") ? "." : "-")
//                 .join("")
//         });

//     return input;
// };
