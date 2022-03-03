// while loop

// var i = 1;

// while(i <= 5){
//     console.log('Loop ke '+i);
//     // increment
//     i++;
// }

// // for loop

// for(var x = 1; x <= 5; x++){
//     console.log('looping ke '+ x +'x');
// }

// latihan buah

var jmlOjk = 10;
var ojkBeroperasi = 9;
var iOjk = 1;
// beroperasi
while(iOjk <= ojkBeroperasi){
    console.log('Ojek No. '+iOjk+' beroperasi');
    iOjk++;
}
// belum ke bengkel
for (iOjk = ojkBeroperasi + 1; iOjk <= jmlOjk; iOjk++) {
    console.log('Ojek No. '+iOjk+' lagi rusak("belum ke bengkel")');
}
