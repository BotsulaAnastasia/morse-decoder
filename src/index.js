const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i+=10) {
        let symbolCode = expr.slice(i, i+10);
        let morse = '';
        for (let k = 0; k < symbolCode.length; k+=2) {
            let twoNum = symbolCode.slice(k, k+2);
            if (twoNum === '10') morse += '.';
            if (twoNum === '11') morse += '-';
        }
        if (symbolCode === '**********') {
            result += ' ';
        } else {
            result += MORSE_TABLE[morse];
        }       
    }
    return result;
}

module.exports = {
    decode
}