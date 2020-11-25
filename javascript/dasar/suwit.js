// inputan dari user 

//var bool ;

var tanya = true ;

while (tanya) {

var p = prompt('pilih : gajah , semut , orang');

// pilihan komputer 

var comp = Math.random();

if ( comp < 0.33){
	comp = "gajah" ;
}

else if ( comp >= 0.33 && comp < 0.50 ){
	comp = 'orang';
}
else {
	comp =' semut ';
}

//console.log(comp);

// menetukan rules 

var hasil = '';
if ( p === comp ){
	hasil = 'serii';
}

else if ( p =='gajah' ){
	/*if(comp=='orang '){
		hasil = 'menang!!';
	}
	else {
		hasil = ' kalah!! ';
	}*/

	hasil = (comp == 'orang') ? 'menang' : 'kalah';

}

else if ( p =='orang' ){
	/* if(comp=='gajah '){
		hasil = 'kalah!!';
	}
	else {
		hasil = ' menang!! ';
	}*/

	hasil = (comp == 'gajah') ? 'menang' : 'kalah';

}

else if ( p =='semut' ){
	/* if(comp=='gajah '){
		hasil = 'menang!!';
	}
	else {
		hasil = ' kalah!! ';
	} */

	hasil = (comp == 'gajah') ? 'menang' : 'kalah';

}

else { 
	hasil = " pilihan anda tidak ada!! " ; 
}

//tampilkan hasil 
alert ('kamu pilih '+ p + ' komputer memilih ' + comp + ' hasilnya '
+ hasil );



tanya = confirm(' main lagi ? ');


}

alert ( 'terima kasihhh bangsatt')