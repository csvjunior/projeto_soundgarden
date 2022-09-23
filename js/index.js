const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const postEvent = document.querySelector("#cont");
const banner = document.querySelector(".text-center");

//GET de todos os eventos
async function evento() {
  try {

    const response = await fetch(URL, {
        method: 'GET'
    });
    //console.log(response);

    const data = await response.json();
    console.log(data);

    //const inserirBanner = 

    data.forEach((event) => {

        const card = `
        <section class="full">

        <div id="cont" class="container d-flex justify-content-center align-items-center">
          <article class="evento card p-5 m-3">
              <h2>${event.name}- ${event.scheduled}</h2>
              <h4>${event.attractions}</h4>
              <p>${event.description}</p>
              <a href="#" class="btn btn-primary">reservar ingresso</a>
          </article>
          <article class="evento card p-5 m-3">
          <h2>${event.name}- ${event.scheduled}</h2>
          <h4>${event.attractions}</h4>
          <p>${event.description}</p>
              <a href="#" class="btn btn-primary">reservar ingresso</a>
          </article>
          <article class="evento card p-5 m-3">
          <h2>${event.name}- ${event.scheduled}</h2>
          <h4>${event.attractions}</h4>
          <p>${event.description}</p>
              <a href="#" class="btn btn-primary">reservar ingresso</a>
          </article>
      </div>
  </section>`

      postEvent.innerHTML = card;
    });

  } catch (error) {
    console.log(error);
  }
}

evento();
