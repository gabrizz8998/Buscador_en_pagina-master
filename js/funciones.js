var cajas=document.querySelectorAll("#caja1 div");
var word=document.getElementById("palabra_introducir");

/*FUNCIONA
function BuscarPalabra(){
    var palabra=word.value;
    for(i=0;i<cajas.length;i++){
        var informacion=cajas[i].innerHTML;
        var texto=informacion;
        for (n = 0; n < cajas[i].innerHTML.length; n++) {
            if (cajas[i].innerHTML.indexOf(palabra, n) != -1) {
                let pos = cajas[i].innerHTML.indexOf(palabra, n);
                alert(pos);
                cajas[i].innerHTML = cajas[i].innerHTML.substring(0,pos)+"<b style='color:red'>"+palabra+"</b>"+cajas[i].innerHTML.substring(pos+palabra.length,cajas[i].innerHTML.length);
                alert(cajas[i].innerHTML);
                n = pos+palabra.length+25;
            }else{
                alert("no");
                break;
            }     
        }
    }*/
    function BuscarPalabra(){
        azul();
        var cajas=document.querySelectorAll("#caja1 div");
    for(i=0;i<cajas.length;i++){
        var caja=cajas[i].innerHTML;
        var result=caja.replaceAll(word.value,"<b style='color:red'>" +word.value +"</b>");
        cajas[i].innerHTML=result; 
    }
}

function azul(){
    for(i=0;i<cajas.length;i++){
        var caja=cajas[i].innerHTML;
        var result=caja.replaceAll("red","blue");
        cajas[i].innerHTML=result; 
    }
}