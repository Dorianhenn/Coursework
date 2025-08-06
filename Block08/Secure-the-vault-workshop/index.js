let code1;
code1 = 7 * 3 - 11;

let code2;
code2 = (100 - 20) / 2;

let code3;
code3 = 117 % 78;

let message = "The vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;

let codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
