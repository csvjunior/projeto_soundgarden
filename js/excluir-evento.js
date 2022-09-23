const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const formDelete = document.querySelector("#formulario-excluir-evento");
 
const nome = document.querySelector("#nome");
const textNome = nome.value;

const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get("id");

async function getIdEvent() {
    try {
        
        const response = await fetch((`${URL}/${idParams}`), {
            method: 'GET',
        });

        const data = await response.json();

        const form = `
        <form id="formulario-excluir-evento" class="col-6">
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${data.name}">
        </div>
        <div class="mb-3">
            <label for="poster" class="form-label">Poster</label>
            <input type="text" class="form-control" id="poster" aria-describedby="poster" value="${data.poster}">
        </div>
        <div class="mb-3">
            <label for="atracoes" class="form-label">Atrações</label>
            <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes" value="${data.attractions}">
            <small>insira o nome dos artistas separados por vírgula</small>
        </div>
        <div class="mb-3">
            <label for="descricao" class="form-label">Descrição</label>
            <textarea name="descricao" id="descricao" class="form-control" rows="5">${data.description}</textarea>
        </div>
        <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <input type="datetime" name="data" id="data" class="form-control" value="${data.scheduled}">
        </div>
        <div class="mb-3">
            <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
            <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao" value="${data.number_tickets}">
        </div>
        <button id="botao-excluir-evento" type="button" class="btn btn-primary">Excluir para sempre</button>
        </form>`

        formDelete.innerHTML = form;

 const botaoExcluirEvento = document.getElementById("botao-excluir-evento");
 
 function excluirEvento() {
      console.log(formDelete[4].value)
     const body = { 
         name: formDelete[0].value,
         poster: formDelete[1].value,
         attractions: formDelete[2].value.split(","), 
         description: formDelete[3].value,
         scheduled: formDelete[4].value, 
         number_tickets:formDelete[5].value,
     }
  
    fetch((`${URL}/${idParams}`), {  
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      console.log(response);
      alert("Evento excluido com sucesso");
      window.location.replace("./admin.html");
    })
    .catch(err => {
      console.error(err);
      alert("Falha no cadastro!");
    });
  }

 botaoExcluirEvento.addEventListener("click", excluirEvento, false);

    } catch (error) {
        console.log(error);
    }
}

getIdEvent();