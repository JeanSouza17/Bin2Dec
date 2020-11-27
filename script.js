$(document).ready(function () {
  //Exibe na tela o que for passado como parâmetro
  function display(value) {
    return $("#show").text(value);
  }

  //Verifica se o valor passado como parâmetro está entre 0 ou 1 e não excede o tamanho de 8 digitos
  function check(value) {
    if (value.length <= 8) {
      for (var i = 0; i < value; i++) {
        if (value.charAt(i) === "0" || value.charAt(i) === "1") {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  //Faz a conversão de binário para decimal, poderia ser usado a função parseInt()
  $("#convert").click(function () {
    var bin = $("#bin").val();
    var position = 0;
    var sum = 0;

    if (check(bin) === true) {
      for (var i = bin.length - 1; i >= 0; i--) {
        if (bin.charAt(i) === "1") {
          sum += Math.pow(2, position);
        }
        position++;
      }
      return display("O resultado é: " + sum);
    } else {
      return display(
        "Por favor informe uma combinação binária de até 8 digitos!"
      );
    }
  });
});
