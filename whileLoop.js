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


// beroperasi
// while(iOjk <= ojkBeroperasi){
    //     console.log('Ojek No. '+iOjk+' beroperasi');
//     iOjk++;
// }
// belum ke bengkel
// for (iOjk = ojkBeroperasi + 1; iOjk <= jmlOjk; iOjk++) {
//     console.log('Ojek No. '+iOjk+' lagi rusak("belum ke bengkel")');
// }

// no 1 - 4 beroperasi
// no 5 - 7 lembur
// sisa rusak

var jmlOjk = 10;
var ojkBeroperasi = 4;

for(var iOjk = 1; iOjk <= 10; iOjk++){
    
    if(iOjk <= 4 ){
        console.log('OJK No. '+iOjk+ ' beroperasi');
    } else if(iOjk <= jmlOjk && iOjk !== 9 && iOjk !== 10){
        console.log('OJK No. '+iOjk+ ' lembur');    
    } else {
        console.log('OJK No. '+iOjk+ ' tidak beroperasi');
    }
    
}





















