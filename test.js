// No:1 isim har yazganda  sonundan bir haryp azaltyp yazmak:
// NO:2 birincisini tarsi:
// No:3 deger isimleri dizi oluştur ve oraya isimler koy ve her isim seçenegini belirlediginde output harıf olarak yazdır :
// No:4 bir birinden büyük sayılar dizisini oluştur ve oradan en büyük sayını bul ve onu en küçük degere küçült:
let dizi = 'Azizbek';
for (let i=dizi.length;i>0;i--){
  console.log(dizi.slice(0,i)); 
  
}

dizi="azizbek";
for(let i=0;i<dizi.length; i++)
{
    console.log(dizi.slice(i));
}   



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("SecimYap: ", function(sec) {

    let a = ['Bazarway','Gülistan','Azizbek'];

    if (sec == '1') {
        for (let i = 0; i < a[0].length; i++) {
            console.log(a[0][i]);
        }
    }

    else if (sec == '2') {
        let yaz = "";
        for (let i = 0; i < a[1].length; i++) {
            console.log(a[1][i]);
        }
        console.log(yaz);
    }

    else if (sec == '3') {
        for (let i =0;i<a[2].length;i++) {
            console.log(a[2][i]);
        }
    }

    else {
        console.log("yanlis secim");
    }

    rl.close();
});

const dizi2=[1,3434,56,87,34,65,235,5];
let maxNumber=Math.max(...dizi2);
let minNumber=Math.min(...dizi2);
let big_Number=maxNumber;
while(maxNumber>=2){
    maxNumber=maxNumber/2.0;

}
console.log("dizi değerleri");
console.log(dizi2);
console.log("dizideki en büyük sayının minimum küçülmesi:>");
console.log(maxNumber);
console.log("dizideki en büyük sayi:>");
console.log(big_Number);
console.log("dizideki minimum sayi:>");
console.log(minNumber); 


//         (:  MİSSİON ACCOMPLİSHET   :)