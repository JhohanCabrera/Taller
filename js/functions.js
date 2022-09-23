class Empeado{
    constructor(nom,ape,gen,fna,fin,sal){
        this.nom=nom;
        this.ape=ape;
        this.gen=gen;
        this.fna=fna;
        this.fin=fin;
        this.sal=sal;
        
    }
    darNom(){
        return this.nom;
    }
    darApe(){
        return this.ape;
    }
    darGen(){
        return this.gen;
    }
    darFna(){
        return this.fna;
    }
    darFin(){
        return this.fin;
    }
    darSal(){
        return this.sal;
    }
    actualizarSal(sal){
        this.sal=sal;
    }
    actualizarDat(nom){
        this.nom=nom;
    }
  

}
let emp1= new Empeado("Leonel","Messi","M","24-6-1987","5-4-2000",1500000);
document.getElementById('nombre').innerHTML = emp1.darNom();
document.getElementById('ape').innerHTML = emp1.darApe();
document.getElementById('sex').innerHTML = emp1.darGen();
document.getElementById('fna').innerHTML = emp1.darFna();
document.getElementById('fing').innerHTML = emp1.darFin();
document.getElementById('salario').innerHTML = ""+emp1.darSal();

function calcularEdad() {

    document.getElementById('edad').innerHTML = ""+calcularYeards(emp1.fna);
}

function calcularAnt() {
    document.getElementById('ant').innerHTML = ""+calcularYeards(emp1.fin);
}

function calcularYeards( fecha ){
    // Si la fecha es correcta, calculamos la edad
   var values = fecha.split("-");

   var yeard = values[2];

   // cogemos los valores actuales
   var fecha_hoy = new Date();
   var ahora_yeard = fecha_hoy.getYear();
  
   // realizamos el calculo
   var edad = (ahora_yeard + 1900) - yeard;
   
   return edad;

}

function prestaciones(){
    let pres = (calcularYeards(emp1.fin)*emp1.sal)/12;
    document.getElementById('pres').innerHTML = ""+pres;
}

function nuevoSal(){
	let cant = prompt("Introduzca Nuevo Salario");
	//Convertir txt a entero
	let c = parseInt(cant);
	emp1.actualizarSal(c);
	document.getElementById('salario').innerHTML = ""+emp1.darSal();
}


function boton1(){
    let cant1 = document.getElementById('ant').innerHTML = ""+calcularYeards(emp1.fin);
    let dias = cant1 * 365;
    alert("El empleado lleva " + dias + " dias en la empresa") 
}

function boton2(){
    
    let nombre = document.getElementById('nombre').innerHTML = emp1.darNom();
    let apellido = document.getElementById('ape').innerHTML = emp1.darApe();
    let sexo = document.getElementById('sex').innerHTML = emp1.darGen();
    let fecha1 = document.getElementById('fna').innerHTML = emp1.darFna();
    let fecha2 = document.getElementById('fing').innerHTML = emp1.darFin();
    let salario = document.getElementById('salario').innerHTML = ""+emp1.darSal();
    
    alert("\n Señor: " + nombre + " " + apellido +
          "\n SU INFORMACION HA SIDO GUARDADA CON EXITO");
}


