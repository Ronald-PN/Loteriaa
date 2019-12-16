function loteria() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var num3 = document.getElementById("numero3").value;
  var prim = document.getElementById("primer").innerHTML = Math.floor(Math.random() * 100);
  var segun = document.getElementById("segundo").innerHTML = Math.floor(Math.random() * 100);
  var terc = document.getElementById("tercero").innerHTML = Math.floor(Math.random() * 100);


  if (num1 == prim) {
      document.getElementById("mensaje").innerHTML = "Primer numero acertado";
  }
  if (num1 == segun || num1 == terc) {
      document.getElementById("mensaje").innerHTML = "Segundo numero acertado";
  }
  if (num1 == terc) {
      document.getElementById("mensaje").innerHTML = "tercer numero acertado";
  }

  if (num2 == prim) {
      document.getElementById("mensaje").innerHTML = "Segundo numero acertado";
  }
  if (num2 == segun || num1 == terc) {
      document.getElementById("mensaje").innerHTML = "Segundo numero acertado";
  }
  if (num2 == terc) {
      document.getElementById("mensaje").innerHTML = "Tercer numero acertado";
  }
  if (num2 == prim) {
      document.getElementById("mensaje").innerHTML = "Tercer numero acertado";
  }
  if (num2 == segun || num1 == terc) {
      document.getElementById("mensaje").innerHTML = "Segundo numero acertado";
  }
  if (num3 == terc) {
      document.getElementById("mensaje").innerHTML = "Tercer numero acertado";
  } else {
      document.getElementById("mensaje").innerHTML = "¡numeros no acertados!   vuelva a jugar";
  }
}

     

    
    
  
   
   
   
   