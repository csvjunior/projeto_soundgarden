const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const formEdit = document.querySelector(".col-6");

const nome = document.querySelector("#nome");
const textNome = nome.value;
//console.log(textNome);

const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get("id");

async function getIdEvent() {
    try {
        const response = await fetch((`${URL}/${idParams}`), {
            method: 'GET',

        });
        //console.log(response);

        const data = await response.json();
        //console.log(data);


        const form = `<form class="col-6">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${data.name}">
            </div>
            <div class="mb-3">
                <label for="banner" class="form-label">Banner</label>
                <input type="text" class="form-control" id="banner" aria-describedby="banner" value="${data.poster}">
                <small>adicione o link da imagem</small>
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
                <input type="datetime" name="data" id="data" class="form-control" 
                    placeholder="00/00/00 00:00" value="${data.scheduled}">
            </div>
            <div class="mb-3">
                <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
                <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao" value="${data.number_tickets}">
            </div>
            <button type="submit" class="btn btn-primary">enviar</button>
        </form>`

        formEdit.innerHTML = form;

        const valuefrom = document.querySelectorAll("#nome", "#banner", "#atracoes");
        console.log(valuefrom);
        const textNome = nome.value;
        console.log(textNome);

        // const banner = document.querySelector("#banner");
        // const textbanner = banner.value;

        // const atracoes = document.querySelector("#atracoes");
        // const textatracoes = atracoes.value;





        const responseEdit = await fetch((`${URL}/${idParams}`), {
            method: 'PUT',
            // body: {
            //     "_id": idParams,
            //     "name": textNome,
            //     "poster": "link da imagem",
            //     "attractions": [
            //         "Cantor 1"
            //     ],
            //     "description": "Evento incrivel",
            //     "scheduled": "2022-03-24T00:57:37.761Z",
            //     "number_tickets": 10,
            //     "created_at": "2022-03-24T00:58:59.646Z",
            //     "updated_at": "2022-03-26T03:04:25.615Z",
            //     "__v": 0
            // }
        });


    } catch (error) {
        console.log(error);
    }
}

getIdEvent();