var gamma ={
    encryption : function (text, key, N) {

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var text = text.split("");
var key = key.split("");
var textKey = [];
var keyKey = [];

for (let i = 0; i < text.length; i++){
textKey.push(alphabet.indexOf(text[i]));

}

for (let i = 0; i < key.length; i++){
keyKey.push(alphabet.indexOf(key[i]));

}

let res = [];
let keyNumber = 0;

for (let i = 0; i < text.length; i++){

res.push((textKey[i] + keyKey[keyNumber]) % N);

if (keyNumber === keyKey.length - 1)
	keyNumber = 0;
else 
	keyNumber++;

}

for (let i=0; i < res.length; i++)
	res[i] = String.fromCharCode(res[i] + 97);

return res.join('');

    },
    decryption : function (text, key,N) {



var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var text = text.split("");
var key = key.split("");
var textKey = [];
var keyKey = [];

for (let i = 0; i < text.length; i++){
textKey.push(alphabet.indexOf(text[i]));

}

for (let i = 0; i < key.length; i++){
keyKey.push(alphabet.indexOf(key[i]));

}

let res = [];
let keyNumber = 0;

for (let i = 0; i < text.length; i++){

res.push((parseInt(textKey[i]) + parseInt(N) - parseInt(keyKey[keyNumber])) % parseInt(N));

console.log(textKey[i])
console.log(N)
console.log(keyKey[keyNumber])
console.log("---------------")


if (keyNumber === keyKey.length - 1)
	keyNumber = 0;
else 
	keyNumber++;

}


for (let i=0; i < res.length; i++)
	res[i] = String.fromCharCode(res[i] + 97);
return res.join("");



      
    }
};
