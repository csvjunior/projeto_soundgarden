const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const postEvent = document.querySelector("#post-event");

//GET de todos os eventos
async function TodosEventos() {
  try {

    const response = await fetch(URL, {
        method: 'GET'
    });
    //console.log(response);

    const data = await response.json();
    //console.log(data);

    data.forEach((event) => {

        const card = `
            <article class="evento card p-5 m-3">
            <h2>${event.name}- ${event.scheduled}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <a href="#" class="btn btn-primary">reservar ingresso</a>
            </article>
        `

      postEvent.innerHTML += card;
    });

  } catch (error) {
    console.log(error);
  }
}

TodosEventos();