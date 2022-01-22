prompt('Jak se jmenuješ?');
prompt('Kolik je ti let?');
let jmeno = prompt('Jak se jmenuješ?');
let vekString = prompt('Kolik je ti let?');
let vek = Number(vekString);

if (vek>=18) {
  let povoleni = 'můžete'
} else {
  let povoleni = 'nemůžete'
}

console.log('Vaše jméno je '+jmeno+', váš věk je ' + vek + ' a ' + povoleni + 'řídit auto.')

//Vaše jméno je jmeno, váš věk je vek a ne/máte právo řídit auto
//console.log('Vaše jméno je ' + jmeno + ', váš věk je + 'vek' + ' a ' + povolení + 'řídit auto' + '.')