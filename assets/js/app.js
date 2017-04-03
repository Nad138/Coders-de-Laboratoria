var select = document.getElementById("select");
var imagen = document.getElementsByTagName("img");
var cuarta = document.getElementsByClassName("chile4");
var quinta = document.getElementsByClassName("lima5");
var sexta = document.getElementsByClassName("lima6");


select.onchange = function(){
  if(select.value == "cuarta"){
    filtrar(cuarta,quinta,sexta);
    console.log("xxx")
  }
  else if (select.value == "quinta"){
    filtrar(quinta,sexta,cuarta);
    console.log("falta poco")
      }
  else if (select.value == "sexta") {
    filtrar(sexta,quinta,cuarta);
    console.log("ya casi")
      }
  }


function filtrar(a,b,c){
      for(var i=0;i<a.length;i++){
        a[i].style.display = 'inline-block';
        }
      for(var j=0;j<b.length;j++){
          b[j].style.display="none";
        }
      for(var x=0;x<c.length;x++){
           c[x].style.display="none";
         }
  };

/*function ocultar(uno){
    for(var a=0;a<uno.length;a++){
        var ver = uno[a].style.display;
        if(ver=="inline-block"){
          ver=="none";
          console.log("no")
            }
            }
    };*/

    /*function filtrar(imagen){
    for(var i=0;i<imagen.length;i++){
      imagen[i].classList.add("chile4");
      imagen[i].classList.remove("lima5");
      imagen[i].classList.remove("lima6");
    }
    }*/
