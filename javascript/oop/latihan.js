function Angkot ( sopir, trayek , penumpang , kas ) { 

	this.sopir = sopir;
	this.trayek = trayek;
	this. penumpang = penumpang;
	this.kas = kas ;


	this.penumpangNaik = function ( namaPenumpang ){

		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function ( namaPenumpang , ongkos){
		if(this.penumpang === 0 ){

			alert ('angkot sedang kosong ');
			return false ;

		}

		for ( var i = 0 ; i < this.penumpang.length ; i++){

			if (this.penumpang[i] == namaPenumpang ){
				this.penumpang[i] = undefined ;
				this.kas += ongkos ;
				return this.penumpang ;
			}
		}	


	}

}

var angkot1 = new Angkot("budi",['manga dua' , 'mangga tiga'],[],0);

