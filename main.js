//dat cuoc
var datCuoc = document.querySelector('.plateABet')
var conBau= document.querySelector('.plateAbet__bau')
var conNai = document.querySelector('.plateAbet__nai')
var conGa = document.querySelector('.plateAbet__ga')
var conCa = document.querySelector('.plateAbet__ca')
var conCua = document.querySelector('.plateAbet__cua')
var conTep = document.querySelector('.plateAbet__tep')
var plateABetButton = document.querySelector('.plateABetButton')

var SoTienCuocConBau = document.querySelector('.plateAbet__bau--totalMoneyBet')
var SoTienCuocConNai = document.querySelector('.plateAbet__nai--totalMoneyBet')
var SoTienCuocConGa = document.querySelector('.plateAbet__ga--totalMoneyBet')
var SoTienCuocConCua = document.querySelector('.plateAbet__cua--totalMoneyBet')
var SoTienCuocConCa = document.querySelector('.plateAbet__ca--totalMoneyBet')
var SoTienCuocConTep = document.querySelector('.plateAbet__tep--totalMoneyBet')

var close = document.querySelector('.plateABet--close')

var datCuoc10k = document.querySelector('.plateAbet--Money__10k')
var datCuoc20k = document.querySelector('.plateAbet--Money__20k')
var datCuoc50k = document.querySelector('.plateAbet--Money__50k')


var chot = document.querySelector('.plateAbet--accept')
var boTienCuoc = document.querySelector('.plateAbet--cancelBet')

var conDangChon = 0;

var totalMoneyNai = 0;
var totalMoneyBau = 0;
var totalMoneyGa = 0;
var totalMoneyCa = 0;
var totalMoneyCua = 0;
var totalMoneyTep = 0;


conNai.onclick = () => {
   conDangChon = 1;
   conNai.style.boxShadow = "0 0 10px red"
   conCa.style.boxShadow = "0 0 0 red"
   conBau.style.boxShadow = "0 0 0 red"
   conGa.style.boxShadow = "0 0 0 red"
   conCua.style.boxShadow = "0 0 0 red"
   conTep.style.boxShadow = "0 0 0 red"
   

}

conBau.onclick = ()=> {
    conDangChon=2;
    conBau.style.boxShadow = "0 0 10px red"
    conCa.style.boxShadow = "0 0 0 red"
    conNai.style.boxShadow = "0 0 0 red"
    conGa.style.boxShadow = "0 0 0 red"
    conCua.style.boxShadow = "0 0 0 red"
    conTep.style.boxShadow = "0 0 0 red"
}

conGa.onclick = ()=> {
    conDangChon=3;
    conGa.style.boxShadow = "0 0 10px red"
    conBau.style.boxShadow = "0 0 0 red"
    conNai.style.boxShadow = "0 0 0 red"
    conCa.style.boxShadow = "0 0 0 red"
    conCua.style.boxShadow = "0 0 0 red"
    conTep.style.boxShadow = "0 0 0 red"
}
conCa.onclick = ()=> {
    conDangChon=4;
    conCa.style.boxShadow = "0 0 10px red"
    conBau.style.boxShadow = "0 0 0 red"
    conGa.style.boxShadow = "0 0 0 red"
    conNai.style.boxShadow = "0 0 0 red"
    conCua.style.boxShadow = "0 0 0 red"
    conTep.style.boxShadow = "0 0 0 red"
}
conCua.onclick = ()=> {
    conDangChon=5;
    conCua.style.boxShadow = "0 0 10px red"
    conBau.style.boxShadow = "0 0 0 red"
    conGa.style.boxShadow = "0 0 0 red"
    conCa.style.boxShadow = "0 0 0 red"
    conNai.style.boxShadow = "0 0 0 red"
    conTep.style.boxShadow = "0 0 0 red"
}
conTep.onclick = ()=> {
    conDangChon=6;
    conTep.style.boxShadow = "0 0 10px red"
    conBau.style.boxShadow = "0 0 0 red"
    conGa.style.boxShadow = "0 0 0 red"
    conCa.style.boxShadow = "0 0 0 red"
    conNai.style.boxShadow = "0 0 0 red"
    conCua.style.boxShadow = "0 0 0 red"
}
close.onclick = () => {
    datCuoc.style.visibility = 'hidden'
}

plateABetButton.onclick = () => {
    datCuoc.style.visibility = 'visible'
    caiNap.style.display = 'block'
soTienThang = 0
soTienThua = 0
}

function kiemTraVaGanSoTienCuocChoTungCon(indexChild,amountOfMoney) {

  if (indexChild == 1 ) {
    
   
    
    totalMoneyNai = Number(amountOfMoney)
    console.log(totalMoneyNai)
    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConNai.innerText = amountOfMoney
  SoTienCuocConNai.style.marginLeft='-20px'
  }


  else if (indexChild == 2 ) {
    
    totalMoneyBau = Number(amountOfMoney)

    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConBau.innerText = amountOfMoney
  SoTienCuocConBau.style.marginLeft='-20px'
    
  }
  else if (indexChild == 3 ) {
    totalMoneyGa = Number(amountOfMoney)
    
    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConGa.innerText = amountOfMoney
  SoTienCuocConGa.style.marginLeft='-20px'
  }
  else if (indexChild == 4 ) {
    totalMoneyCa = Number(amountOfMoney)
    
    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConCa.innerText = amountOfMoney
  SoTienCuocConCa.style.marginLeft='-20px'
  }
  else  if (indexChild == 5 ) {
    totalMoneyCua = Number(amountOfMoney)
    
    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConCua.innerText = amountOfMoney
  SoTienCuocConCua.style.marginLeft='-20px'
  }
  else  {
    totalMoneyTep = Number(amountOfMoney)
    
    if (amountOfMoney == 10000) {
      amountOfMoney = '10.000Đ'
  }
  else if (amountOfMoney == 20000) {
    amountOfMoney = '20.000Đ'
  }
  else {
    amountOfMoney = '50.000Đ'
  }
  SoTienCuocConTep.innerText = amountOfMoney
  SoTienCuocConTep.style.marginLeft='-20px'
  }

}

datCuoc10k.onclick= () =>{
    kiemTraVaGanSoTienCuocChoTungCon(conDangChon,'10000')
}
datCuoc20k.onclick= () =>{
    kiemTraVaGanSoTienCuocChoTungCon(conDangChon,'20000')
}
datCuoc50k.onclick= () =>{
    kiemTraVaGanSoTienCuocChoTungCon(conDangChon,'50000')
}

chot.onclick = () => {
    datCuoc.style.visibility = 'hidden'
}

function kiemTraVaBoTienCuoc (indexChild) {
  if (indexChild == 1 ) {
    SoTienCuocConNai.innerText = '0Đ'
    SoTienCuocConNai.style.marginLeft='0px'
  }
  else  if (indexChild == 2 ) {
    SoTienCuocConBau.innerText =  '0Đ'
    SoTienCuocConBau.style.marginLeft='0px'
  }
  else  if (indexChild == 3 ) {
    SoTienCuocConGa.innerText =  '0Đ'
    SoTienCuocConGa.style.marginLeft='0px'
  }
  else  if (indexChild == 4 ) {
    SoTienCuocConCa.innerText =  '0Đ'
    SoTienCuocConCa.style.marginLeft='0px'
  }
  else if (indexChild == 5 ) {
    SoTienCuocConCua.innerText =  '0Đ'
    SoTienCuocConCua.style.marginLeft='0px'
  }
  else {
    SoTienCuocConTep.innerText =  '0Đ'
    SoTienCuocConTep.style.marginLeft='0px'
  }
}

boTienCuoc.onclick = () => {
  kiemTraVaBoTienCuoc(conDangChon);
}



//xoc
 
var xoc = document.querySelector('.discShock')
var con1 = document.querySelector('.plate-child1__img')
var con2 = document.querySelector('.plate-child2__img')
var con3 = document.querySelector('.plate-child3__img')

function kiemTraVaGanKetQuaRandom(randomConThu1,randomConThu2,randomConThu3) {
  if (randomConThu1 == 1 ){
    con1.src='./img/conNai.png'
  }
  else if (randomConThu1 == 2){
    con1.src='./img/conBau.png'
  }
  else if (randomConThu1 == 3){
    con1.src="./img/conGA.png"
  }
  else if (randomConThu1 == 4){
    con1.src="./img/conCa.png" 
  }
  else if (randomConThu1 == 5){
    con1.src="./img/conCUa.png"
  }
  else {
    con1.src="./img/conTep.png"
  }

  if (randomConThu2 == 1 ){
    con2.src='./img/conNai.png'
  }
  else if (randomConThu2 == 2){
    con2.src='./img/conBau.png'
  }
  else if (randomConThu2 == 3){
    con2.src="./img/conGA.png"
  }
  else if (randomConThu2 == 4){
    con2.src="./img/conCa.png" 
  }
  else if (randomConThu2 == 5){
    con2.src="./img/conCUa.png"
  }
  else {
    con2.src="./img/conTep.png"
  }

  if (randomConThu3 == 1 ){
    con3.src='./img/conNai.png'
  }
  else if (randomConThu3 == 2){
    con3.src='./img/conBau.png'
  }
  else if (randomConThu3 == 3){
    con3.src="./img/conGA.png"
  }
  else if (randomConThu3 == 4){
    con3.src="./img/conCa.png" 
  }
  else if (randomConThu3 == 5){
    con3.src="./img/conCUa.png"
  }
  else {
    con3.src="./img/conTep.png"
  }
  
}

var randomConThu1 = Math.floor(Math.random() *6)+1
var randomConThu2 = Math.floor(Math.random() *6)+1
var randomConThu3 = Math.floor(Math.random() *6)+1
var arrayResultRanDom = [0,0,0]
xoc.onclick = () => {
 randomConThu1 = Math.floor(Math.random() *6)+1
 randomConThu2 = Math.floor(Math.random() *6)+1
 randomConThu3 = Math.floor(Math.random() *6)+1
 arrayResultRanDom = [randomConThu1,randomConThu2,randomConThu3]
  kiemTraVaGanKetQuaRandom(randomConThu1,randomConThu2,randomConThu3);
  soTienThang = 0
  soTienThua = 0
}


// mo

var mo = document.querySelector('.openLid')



var caiNap = document.querySelector('.lidImg')

caiNap.onclick = () => {
  caiNap.style.display='none'
  for (var index = 0; index<=2;index++) {
    checkResultTrue(arrayResultRanDom[index])
      
     }
    
     checkResultFalse(arrayResultRanDom)
     console.log(soTienThua)
     soTienHienCo +=(soTienThang- soTienThua)
     
     soTienAn.innerText = `Số tiền thắng: ${soTienThang}Đ`
     soTienThuaElement.innerText = `Số tiền thua: ${soTienThua}Đ`
     soTienDangCoElement.innerText = ` Số tiền đang có: ${soTienHienCo}Đ`
    //  tien ben profile
    totalMoney.innerText = `Số tiền:${soTienHienCo}Đ`
}

var soTienAn = document.querySelector('.SoTienAn')
var soTienThuaElement = document.querySelector('.SoTienThua')
var soTienDangCoElement = document.querySelector('.SoTienHienCo')

// tien ben profile
var totalMoney = document.querySelector('.totalMoney')

var soTienThang = 0;
var soTienThua = 0;
var soTienHienCo = 1000000000;

function checkResultTrue (indexChild) {
     if(indexChild == 1) {
    soTienThang += totalMoneyNai
    console.log(totalMoneyNai)
     }
     else  if (indexChild == 2){
     soTienThang += totalMoneyBau
     }
     else if (indexChild==3) {
     soTienThang += totalMoneyGa
     }
     else if (indexChild==4) {
     soTienThang +=totalMoneyCa
     }
     else if (indexChild == 5) {
     soTienThang+=totalMoneyCua
     }
     else {
     soTienThang+= totalMoneyTep
     }

     console.log(soTienThang)
} 


function checkResultFalse (arrayResultRanDom) {
  
   for ( var indexSoSanh =1; indexSoSanh<=6;indexSoSanh++) {
    let check = true
    for(var KetQua =0 ; KetQua <=2; KetQua++) {
      if(indexSoSanh == arrayResultRanDom[KetQua]){
        check = false
        KetQua = 3;
      }

    }
    if(check == true){
      if(indexSoSanh == 1) {
        soTienThua += totalMoneyNai
        console.log(totalMoneyNai)
       }
       else  if (indexSoSanh == 2){
        soTienThua += totalMoneyBau
        console.log(totalMoneyBau)
       }
       else if (indexSoSanh==3) {
        soTienThua += totalMoneyGa
        console.log(totalMoneyGa)
       }
       else if (indexSoSanh==4) {
        soTienThua +=totalMoneyCa
        console.log(totalMoneyCa)
  
       }
       else if (indexSoSanh == 5) {
        
        soTienThua+=totalMoneyCua
        console.log(totalMoneyCua) 
      }
       else {
        soTienThua+= totalMoneyTep
        console.log(totalMoneyTep)
       }
    }
   
   }
} 



mo.onclick = () => {
 caiNap.style.display = 'none'
 for (var index = 0; index<=2;index++) {
checkResultTrue(arrayResultRanDom[index])
  
 }

 checkResultFalse(arrayResultRanDom)
 console.log(soTienThua)
 soTienHienCo +=(soTienThang- soTienThua)
 
 soTienAn.innerText = `Số tiền thắng: ${soTienThang}Đ`
 soTienThuaElement.innerText = `Số tiền thua: ${soTienThua}Đ`
 soTienDangCoElement.innerText = ` Số tiền đang có: ${soTienHienCo}Đ`
//  tien ben profile
totalMoney.innerText = `Số tiền:${soTienHienCo}Đ`
}


