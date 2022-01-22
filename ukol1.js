
let jmeno = prompt('Jak se jmenuješ?');
let vekString = prompt('Kolik je ti let?');
let vek = Number(vekString);

if (vek >=18){
  console.log('Vaše jméno je ' + jmeno + ', váš věk je ' + vek + 'a můžete řídit auto.')
} else {
  console.log('Vaše jméno je ' + jmeno + ', váš věk je ' + vek +' a za ' + (18-vek) + 'let budete moct řídit auto.')
}
