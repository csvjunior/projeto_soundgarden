const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const formDelete = document.querySelector(".col-6");
const btnDelete = document.querySelector(".btn btn-danger");

const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get("id");

async function getIdEvent() {
    try {
        const response = await fetch((`${URL}/${idParams}`), {
            method: 'GET'
        });
        //console.log(response);

            const responseDelete = await fetch ((`${URL}/${idParams}`), {
                method: 'DELETE',
            });
            //alert("excluido!");
        

        const data = await response.json();
        //console.log(data);


            const form = `<form class="col-6">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${data.name}"
                    disabled>
            </div>
            <div class="mb-3">
                <label for="banner" class="form-label">Banner</label>
                <input type="text" class="form-control" id="banner" aria-describedby="banner"
                    value="${data.poster}" disabled>
                <small>adicione o link da imagem</small>
            </div>
            <div class="mb-3">
                <label for="atracoes" class="form-label">Atrações</label>
                <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes"
                    value="${data.attractions}" disabled>
                <small>insira o nome dos artistas separados por vírgula</small>
            </div>
            <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <textarea name="descricao" id="descricao" class="form-control" rows="5" disabled>${data.description}
                </textarea>
            </div>
            <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input type="datetime" name="data" id="data" class="form-control"
                    placeholder="00/00/00 00:00" value="${data.scheduled}" disabled>
            </div>
            <div class="mb-3">
                <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
                <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao"
                    value="${data.number_tickets}" disabled>
            </div>
            <button type="submit" onclick="responseDelete();" class="btn btn-danger">excluir pra sempre</button>
        </form>`

        formDelete.innerHTML = form;
        

    } catch (error) {
        console.log(error);
    }
}

getIdEvent();