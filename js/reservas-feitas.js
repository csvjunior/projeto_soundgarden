const URL = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const tableEvent = document.querySelector(".table");

const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get("id");


async function getEvent() {
  try {
    const response = await fetch((`${URL}/${idParams}`), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);

    let cont = 0;

    const clear = `<table class="table">

                    </table>`;

    tableEvent.innerHTML = clear;

    data.forEach((event) => {

      cont++;

      const card = `<table class="table">

          <tbody>
              <tr>
                  <th scope="row">${cont}</th>
                  <td>${event.event.scheduled}</td>
                  <td>${event.owner_name}</td>
                  <td>${event.owner_email}</td>
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