let resp =""
let total = 0;
let contador = 0;
let isfinished = false;

while(isfinished==false){

  let id = prompt('Ingrese el codigo del producto que quiera comprar: 1.Remera 2.Pantalones 3.Ropa interior 4.Zapatos');

  switch(id){
    case '1':
    total=total+1000;
    contador = contador+1;
    alert("compra existosa");
    break;

    case '2':
    total=total+1300;
    contador = contador+1;
    alert("compra existosa");
    break;

    case '3':
    total=total+500;
    contador = contador+1;
    alert("compra existosa");
    break;

    case '4':
    total=total+2000;
    contador = contador+1;
    alert("compra existosa");
    break;

    default:
    alert('Opcion no valida');
    break;
  }

  resp = prompt("Comprar otro producto?");
  if(resp == "No"|| resp =="NO" || resp =="no"){
    isfinished=true;
  }
}


function calculardesc(){
total=total*0.70;
}

if(contador>=3){
  alert("Debido a que compro mas de 3 productos se le aplicara un descuento del 30%!");
  calculardesc(total);
  alert("Su precio final es:"+" "+total);
}
else{
  alert("Su precio final es:"+" "+total);
}