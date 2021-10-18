console.log("Merhaba");

//var dolarDun=9.2
//var dolarBugun=9.3
//var keyword ü tip güvenli değil. değeri tanımlanmamışsa undefined alabilir.
//{
//    var dolarDun=9.1
//}

//let ecma script den geldi.
//ama javascript type safety değil
let dolarDun = 9.2;
let dolarBugun = 9.3;
{
  let dolarDun = 9.1;
}
//parantez içi ayrı bir dünya olduğu için göstermez
console.log(dolarDun);

const euroDun = 11.2; //const ile tanımlandığında sabittir. başka birşey atanamaz.

//euroDun = 11; //bunu yapamıyoruz

console.log(euroDun);

//array

let konutKredileri = ["Konut", "Emlak", "Kamu Konut", "Bireysel"];

console.log(konutKredileri);

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
