

var lstQuan = document.getElementById("qun");
var totPrc = document.getElementById("ttl");
var unitPrice = document.getElementById("prc-unit");


var p1 = document.getElementById("im1-price").value;
var p2 = document.getElementById("im2-price").value;
var p3 = document.getElementById("im3-price").value;
var p4 = document.getElementById("im4-price").value;

var subTtl = document.getElementById("subTtl");
var crtImg = document.getElementById("crt-img");
var itm = document.getElementById("itm");
var itmP = document.getElementById("price");
var mul = document.getElementById("mul");
var mul2 = document.getElementById("mul2");

var EcoT = document.getElementById("EcoT");
var Vat = document.getElementById("Vat");
var ttlOut = document.getElementById("ttl-out");



function qun(){
    if(itmP.value <= 0){
        alert("Please Select an item first")

    }
    else{
    lstQuan.value++;
    itm.value++;
    subTtl.value = lstQuan.value* unitPrice.value;
    mul.value++;
    EcoT.value =(subTtl.value * 0.02);
    Vat.value = Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value)) * 1;
    ttlOut.value = ( parseInt(subTtl.value) + parseInt(EcoT.value) + parseInt(Vat.value));
    totPrc.value = ttlOut.value
    itmP.value =  ttlOut.value;
}
}

function rem(){
    if(lstQuan.value <= 0){
        alert("You haven't selected anything")
    }
    else{
    lstQuan.value--;
    mul.value--;
    itm.value--;
    subTtl.value = lstQuan.value* unitPrice.value;
    EcoT.value  = (subTtl.value * 0.02) ;
    Vat.value = Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value)) * 1;
    ttlOut.value = parseInt( subTtl.value) + parseInt( EcoT.value) + parseInt(Vat.value);
    totPrc.value = ttlOut.value
    itmP.value =  ttlOut.value;
    }

}

function addCrt(ele){


    if(ele.id =="add1"){
        crtImg.src="./Images/1.jpg"
        itm.value=lstQuan.value;
        mul.value=lstQuan.value;
       // itmP.value=p1;
        mul2.value=p1;
        subTtl.value = p1;
        EcoT.value =(subTtl.value * 0.02);
        Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value));
        ttlOut.value = ( parseInt(subTtl.value) + parseInt(EcoT.value) + parseInt(Vat.value));
        totPrc.value = ttlOut.value;
        itmP.value = ttlOut.value;


    }
    else if(ele.id == "add2"){
        crtImg.src="./Images/2.jpeg"
        itm.value=lstQuan.value;
        mul.value=lstQuan.value;
        //itmP.value=p2;
        mul2.value=p2;
        subTtl.value = p2;
        EcoT.value =(subTtl.value * 0.02);
        Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value));
        ttlOut.value = ( parseInt(subTtl.value) + parseInt(EcoT.value) + parseInt(Vat.value));
        totPrc.value = ttlOut.value;

    }
    else if(ele.id == "add3"){
        crtImg.src="./Images/3.jpg"
        itm.value=lstQuan.value;
        mul.value=lstQuan.value; 
        //itmP.value=p3;
        mul2.value=p3;
        subTtl.value = p3;
        EcoT.value =(subTtl.value * 0.02);
        Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value));
        ttlOut.value = ( parseInt(subTtl.value) + parseInt(EcoT.value) + parseInt(Vat.value));
        totPrc.value = ttlOut.value;
        itmP.value = ttlOut.value;


    }
    else if(ele.id == "add4"){
        crtImg.src="./Images/4.jpeg"
        itm.value=lstQuan.value;
        mul.value=lstQuan.value;
       // itmP.value=p4;
        mul2.value=p4;
        subTtl.value = p4;
        EcoT.value =(subTtl.value * 0.02);
        Vat.value = Math.floor( parseInt(subTtl.value) / (1 + 0.2) * -1 + parseInt(subTtl.value));
        ttlOut.value = ( parseInt(subTtl.value) + parseInt(EcoT.value) + parseInt(Vat.value));
        totPrc.value = ttlOut.value
        itmP.value = ttlOut.value;;



    }

}


function addToCart(elem){
    var lstImg = document.getElementById("lst-img");
 


    if( elem.id == "add1"){
        lstImg.src="./Images/1.jpg"
        lstQuan.value = 1;
        unitPrice.value = p1;
        }
    else if( elem.id == "add2"){
        lstImg.src="./Images/2.jpeg"
        lstQuan.value = 1;
        unitPrice.value = p2;
    }
    else if( elem.id == "add3"){
        lstImg.src="./Images/3.jpg"
        lstQuan.value = 1;
        unitPrice.value = p3;
    }
    else if( elem.id == "add4"){
        lstImg.src="./Images/4.jpeg"
        lstQuan.value = 1;
        unitPrice.value = p4;
    }

}
