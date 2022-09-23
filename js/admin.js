const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const tableEvent = document.querySelector(".table");


async function getEvent() {
  try {
    const response = await fetch((`${URL}`), {
      method: 'GET', //DELETE
      headers: {
        'Content-type': 'application/json'
      }
    });
    //console.log(response);

    const data = await response.json();
    console.log(data);

    
    

    data.forEach((event) => {

      const card = `<table class="table">

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

        </table>`;

      tableEvent.innerHTML += card;
    });

  } catch (error) {
    console.log(error);
  }
}

getEvent();