var penumpang = ['udin','inul','bakri'];


 var tambahpenumpang = function( nama , penumpang ){

// jika penumpang kosong 
if (penumpang.length == 0 ){
	// tambah penumpang di awal array 

	penumpang.push(nama);
//kembalikan isi array dan keluar dari function 
return penumpang ;

}

else {

	// telusuri kursi dari awal 

	for ( var i = 0 ; i < penumpang.length ; i++ ){

		if ( penumpang [i] == undefined ){
			//tambah penumpang kursi tersebut 
			penumpang [i] = nama;
			//kembalikan isi array dan keluar dari fungsi
			return penumpang ;

		}

		//jika sudah ada nama yang sama 
		else if (penumpang[i]== nama ){
			//tampilkan kesalahan 
			console.log( " nama "+ nama +" sudah ada!!");
			//kembalikan isi array dan keluar dari fungsi 
			return penumpang;

		}



		// jika seluruh kursi penuh 
		else if ( i == penumpang.length - 1 ){
			penumpang.push(nama);
			return penumpang;
		}

	//for
		}
	//else	
		}


}



var penumpangturun = function( nama , penumpang ){

	//jika angkot kosong 

	if ( penumpang.length == 0 ){
		console.log('Angkot sedang kosong');
		return penumpang;
	}

	else {

		for (var i = 0 ; i < penumpang.length ; i++ ){
			if (penumpang[i]== nama){
				penumpang[i]= undefined;
				return penumpang;
			}else if ( i == penumpang.length-1){
				console.log('nama penumpang tidak ditemukan');
				return penumpang;
			}
		}
	}
}






//}