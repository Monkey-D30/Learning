
// objeck literal
var binatang = {

	nama : " kaput ",
	alamat : " talang ",
	hobi : " maling ",
	umur : " masih mude ",

}

// function declaration 
function BuatObjMhs(nama , nim , jurusan){
	var mhs = {};
	mhs.nama = nama ;
	mhs.nim = nim ;
	mhs.jurusan = jurusan ;
	return mhs ;
}


var mhs3 = BuatObjMhs ("udin ","001100","infomatika" )


//construktor 
function Identitas(nama , notelpon , status ){

	this.nama =nama ;
	this.notelpon = notelpon;
	this.status = status ;

}

var iden = new Identitas("cao cao " , " 4556644 ", " janda");