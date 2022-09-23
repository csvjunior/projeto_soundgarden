let botaoCriarEvento = document.getElementById("botao-criar-evento"); 
let formulario = document.getElementById("formulario-cadastro-evento"); 

 function cadastrarEvento() {
      console.log(formulario[4].value)
     const body = { 
         name: formulario[0].value,
         poster: formulario[1].value,
         attractions: formulario[2].value.split(","), 
         description: formulario[3].value,
         scheduled: formulario[4].value, 
         number_tickets:formulario[5].value,
     }
  
    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {  
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      console.log(response);
      alert("Evento cadastrado com sucesso");
      window.location.replace("./admin.html");
    })
    .catch(err => {
      console.error(err);
      alert("Falha no cadastro!");
    });
  }

 botaoCriarEvento.addEventListener("click", cadastrarEvento, false); 