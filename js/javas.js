let saldoactual;
saldoactual = 500000;
let cantidad = 0;
let saldoadd;
let retsaldo;

/*===============================CONSULTAR SALDO============================================*/
function consultarsaldo() {
    document.getElementById('saldoconsultado').style.display = 'block';
    document.getElementById('saldoconsultado').innerHTML = "Tu saldo actual es: " + saldoactual;

    var boton = document.createElement("button");
    saldoconsultado.appendChild(boton);
    boton.innerHTML = "OK";
    boton.onclick = function() {
        ocultar('')
    };

}


/*=================================AGREGAR SALDO========================================*/
function agregarsaldo() {

    var cantidad = parseInt(document.getElementById('cantidad').value);
    if (cantidad >= 10000) {
        document.getElementById('saldoagregado').style.display = 'block';
        var proceso = cantidad + saldoactual;
        document.getElementById("proceso").value = saldoactual += cantidad;
        document.getElementById('saldoagregado').innerHTML = "Agregaste: " + cantidad + ". Saldo actual: " + saldoactual;

        var boton = document.createElement("button");
        saldoagregado.appendChild(boton);
        boton.innerHTML = "OK";
        boton.onclick = function() {
            ocultar('')
        };
        
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = "La cantidad que quiere agregar no es valida.";
        var boton = document.createElement("button");
        error.appendChild(boton);
        boton.innerHTML = "OK";
        boton.onclick = function() {
            ocultar('')
        };
    }
}

/*====================================RETIRAR SALDO=====================================*/
function retirarsaldo() {

    var cantidad = parseInt(document.getElementById('cantidad').value);
    if (cantidad == 10000 || cantidad == 20000 || cantidad == 50000 || cantidad == 100000) {
        document.getElementById('saldoret').style.display = 'block';

        var proceso = cantidad - saldoactual;
        document.getElementById("proceso").value = saldoactual -= cantidad;
        document.getElementById("saldoret").innerHTML = "Retiraste: " + cantidad + ". Saldo actual: " + saldoactual;

        var boton = document.createElement("button");
        saldoret.appendChild(boton);
        boton.innerHTML = "OK";
        boton.onclick = function() {
            ocultar('')
        };
        
        var boton = document.createElement("button");
        saldoret.appendChild(boton);
        boton.innerHTML = "Expulsar Dinero";
        boton.onclick = function() {
            retirar('')
        };
        
                
        
    }  else {

        document.getElementById('error').style.display = 'block';
        document.getElementById('error2').style.display = 'block';
        
        document.getElementById('error').innerHTML = "La cantidad solicitada no es valida.";
        document.getElementById('error2').innerHTML = "Solo se permiten cantidad de 10.000, 20.000, 50.000 y 100.000 COP";
        
        var boton = document.createElement("button");
        error2.appendChild(boton);
        boton.innerHTML = "OK";
        boton.onclick = function() {
            ocultar('')
        };
        
    }
}



function retirar() {
    
    
    var cantidad = parseInt(document.getElementById('cantidad').value);
    document.getElementById('drt').innerHTML = 'Dinero Retirado';
    if (cantidad == 10000) {
    document.getElementById('retirar').innerHTML = '<img src="img/B10K.png" alt="">';
    }
    if(cantidad == 20000){
    document.getElementById('retirar').innerHTML = '<img src="img/B20K.png" alt="">';
    }   
    if(cantidad == 50000){
    document.getElementById('retirar').innerHTML = '<img src="img/B50K.png" alt="">';
    }
    if(cantidad == 100000){
    document.getElementById('retirar').innerHTML = '<img src="img/B100K.png" alt="">';
    }
    

}


/*=================================FUNCION OCULTAR=========================================*/
function ocultar() {
    document.getElementById('saldoconsultado').style.display = 'none';
    document.getElementById('saldoret').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('error2').style.display = 'none';
    document.getElementById('saldoagregado').style.display = 'none';
    document.getElementById('drt').style.display = 'none';
    /*document.getElementById('retirar').style.display = 'none';*/
}

/*==========================FUNCION NUMEROS=================================*/
function borrar(){
  document.getElementById("cantidad").value="";
  cantidad = "";
}

function num0() {
            document.getElementById("cantidad").value = cantidad += "0";    
}
function num1() {
            document.getElementById("cantidad").value = cantidad += "1";              
}

function num2() {
            document.getElementById("cantidad").value = cantidad += "2";
}

function num3() {
            document.getElementById("cantidad").value = cantidad += "3";              
}
        
function num4() {
            document.getElementById("cantidad").value = cantidad += "4";              
}
function num5() {
            document.getElementById("cantidad").value = cantidad += "5";              
}
function num6() {
            document.getElementById("cantidad").value = cantidad += "6"; 
}
function num7() {
            document.getElementById("cantidad").value = cantidad += "7";
}
function num8() {
            document.getElementById("cantidad").value = cantidad += "8";              
}
function num9() {
            document.getElementById("cantidad").value = cantidad += "9";              
}


