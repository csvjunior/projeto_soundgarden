const URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const postEvent = document.querySelector("#cont");
const sectionBanner = document.querySelector("#banner");

//GET de todos os eventos
async function evento() {
  try {

    const response = await fetch(URL, {
      method: 'GET'
    });

    const banner = `<section id="banner" class="full d-flex justify-content-center align-items-center"
      style="background-color: #F8BBD0; color: #fff">
      <div class="text-center">
      <img src="https://64.media.tumblr.com/44f6dcc5e54913410d4c3c7e882e2dfe/367d3330cc345b45-a8/s1280x1920/8133e8fba8dabffecc72fa4a3d3e86f4b7d8834c.png" alt="Minha Figura">
      </div>
      </section>`

      sectionBanner.innerHTML = banner;

    const data = await response.json();
    console.log(data);

    data.forEach((event) => {

      const card = `
          <div id="cont" class="container d-flex justify-content-center align-items-center">
            <article class="evento card p-5 m-3">
                <h2>${event.name}- ${event.scheduled}</h2>
                <h4>${event.attractions}</h4>
                <p>${event.description}</p>
                <a href="#" class="btn btn-primary">reservar ingresso</a>
            </article>
        </div>`

      postEvent.innerHTML += card;
    });

    data.forEach((event) => {

      const card = `
        <section class="full">

        <div id="cont" class="container d-flex justify-content-center align-items-center">
          <article class="evento card p-5 m-3">
              <h2>${event.name}- ${event.scheduled}</h2>
              <h4>${event.attractions}</h4>
              <p>${event.description}</p>
              <a href="reservas.html" class="btn btn-primary">reservar ingresso</a>
          </article>
          <article class="evento card p-5 m-3">
          <h2>${event.name}- ${event.scheduled}</h2>
          <h4>${event.attractions}</h4>
          <p>${event.description}</p>
              <a href="reservas.html" class="btn btn-primary">reservar ingresso</a>
          </article>
          <article class="evento card p-5 m-3">
          <h2>${event.name}- ${event.scheduled}</h2>
          <h4>${event.attractions}</h4>
          <p>${event.description}</p>
              <a href="reservas.html" class="btn btn-primary">reservar ingresso</a>
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
