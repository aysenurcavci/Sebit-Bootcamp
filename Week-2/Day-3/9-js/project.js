//console.log("merhaba")

/*
var ; 
let ; update , iki defa tanımlamaya izin vermiyor
const ; sabit bir degişkendir degiştirilemez
*/

let gun = 12;
let ay = 9;
let yıl = 1997;

gun=19

console.log(gun,ay,yıl);
console.log("Ahmet Kerem Kantarcı "+ gun+"/"+ay+"/"+yıl+" tarihinde doğmuştur.")

const ikincielAraba = 200000;

//ikincielAraba = 130000; const degerleri güncellenemez!

console.log(ikincielAraba);

var a=5;
var a=3;

console.log(a);

var c=5;

console.log("C değeri dışarda:",c)
{
    var c=3
    console.log("C değeri içerde:",c)

}
console.log("C değeri dışarda:",c)

let d=5;
console.log("D değeri dışarda:",d)
{
    let d=3
    console.log("D değeri içerde:",d)
}
console.log("D değeri dışarda:",d)


//let ile döngü gibi iç içe durumlarda içerde tanımlanan degişken değeri sadece içerde geçerli iken
// var ile tanımlanan degişkenle yukarıdaki durumlarda yeni değeri kabul eder dıştaki değeride degiştirir.