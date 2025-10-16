

    function sortear(){

  console.log("clicou");

  const min = Math.ceil(Number(document.querySelector(".input-min").value));
  const max = Math.floor(Number(document.querySelector(".input-max").value));
  const out = document.getElementById("resultado");

  if (Number.isNaN(min) || Number.isNaN(max)) {
 
    if (out) out.textContent = "Preencha os dois campos com números.";
    return;
  }

  if (min <= max){
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (out) out.textContent = `Número sorteado: ${result}`;
  } else {
    
    if (out) out.textContent = "O valor mínimo deve ser menor que o valor máximo.";
  }
}