// for(var i = 1; i <=5; i++){
//     console.log('looping ke-'+i);
// }

// updet ojek tidak beroperasi 4 -5
var jmlOjek = 5;
var ojkBeroperasi = 3;
var noOjek = 1;

while (noOjek <= ojkBeroperasi){
    console.log('Ojek No. '+ noOjek + ' sedang narik');
    noOjek++;
}

for(var noOjek = ojkBeroperasi +1; noOjek <= jmlOjek; noOjek++){
    console.log('Ojek No. '+ noOjek + ' sedang tidak narik');
}