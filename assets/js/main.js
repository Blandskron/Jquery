    function sumar() {
      const n1 = Number(document.getElementById("num1").value);
      const n2 = Number(document.getElementById("num2").value);
      const suma = n1 + n2;
      document.getElementById("resultado").textContent = "Resultado: " + suma;
    }