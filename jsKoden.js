// Nedan funktioner för beräkningar
function summera(input1, input2) {
  return parseInt(input1)+parseInt(input2);
}

function subtrahera() {
  return 0;
}

// Nedan funktioner för interaktion
function presenteraResultat(resultat) {
  let list = document.getElementById("myList");
  let li = document.createElement('li');
  li.innerText = resultat;
  list.appendChild(li);
}

function hanteraSummeraKlick(input1, input2) {
  try
  {
    presenteraResultat(summera(input1, input2));
  }
  catch (e)
  {
    console.log(e);
  }
}

// Exportera moduler för npm (node.js) jest testning
module.exports = { subtrahera, summera };