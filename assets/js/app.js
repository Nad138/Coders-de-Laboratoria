var select = document.getElementById("select");
var imagen = document.getElementsByTagName("img");
var cuarta = document.getElementsByClassName("4-chile");
var quinta = document.getElementsByClassName("5-lima");
var sexta = document.getElementsByClassName("6-lima");


select.onchange = function(){
  if(select.value == "cuarta"){
    mostrar(cuarta,quinta,sexta);
    ocultar(cuarta,quinta,sexta);
        console.log("xxx")
  }
  else if (select.value == "quinta"){
    mostrar(quinta,sexta,cuarta);
    ocultar(cuarta,quinta,sexta);
    console.log("falta poco")
      }
  else if (select.value == "sexta") {
    mostrar(sexta,cuarta,quinta);
    ocultar(cuarta,quinta,sexta);
     console.log("ya casi")
      }
  }


function mostrar(a,b,c){
      for(var i=0;i<a.length;i++){
          a[i].style.display="block-inline";
          }
      for(var j=0;j<b.length;j++){
          b[j].style.display="none";
          }
      for(var x=0;x<c.length;x++){
           c[x].style.display="none";
          }
  };

function ocultar(uno,dos,tres){
    for(var a=0;a<uno.length;a++){
        var ver = uno[a].style.display;
        if(ver=="block-inline"){
          ver="none";
            }
        else{
              ver="block-inline";
            }
      }
    };
