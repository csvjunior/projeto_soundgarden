const URL = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const mainReserve = document.querySelector(".bd-example");

const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get("id");
console.log(idParams);


async function getReserve() {
  try {
    const response = await fetch((`${URL}/${idParams}`), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });
    console.log(response);

    const data = await response.json();
    console.log(data);



    data.forEach((event) => {
      const card = `
      <div class="bd-example">
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Data</th>
                      <th scope="col">Titulo</th>
                      <th scope="col">Atrações</th>
                      <th scope="col">Ações</th>
                  </tr>
              </thead>

              <tbody>
              <tr>
                  <th scope="row">${event._id}</th>
                  <td>${event.scheduled}</td>
                  <td>${event.name}</td>
                  <td>${event.attractions}</td>
                  <td>
                      <a href="reservas.html?id=${event._id}" class="btn btn-dark">ver reservas</a>
                      <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                      <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
                  </td>
              </tr>
                  
          </tbody>
          
          </table>
      </div>` 

      mainReserve.innerHTML += card;
    });

  } catch (error) {
    console.log(error);
  }
}

getReserve();