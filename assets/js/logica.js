count1 = 0;
count2 = 6;
count3 = 11;

//BLOQUE 1
document.getElementById("populares").addEventListener("mouseenter", () => {
  if (count1 < 5) {
    count1++;
    getpersoPopulares(count1);
  }
});

const getpersoPopulares = (id) => {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => mostrarpersoPopulares(data));
};

const mostrarpersoPopulares = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const persoPopulares = document.getElementById("persoPopulares");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color1"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  persoPopulares.appendChild(nuevoPersonaje);
};

//BLOQUE 2

document.getElementById('importantes').addEventListener("mouseenter", () => {
  if (count2 < 11) {
    count2++;
    getpersoImportantes(count2);
  }
})

const getpersoImportantes = (id) => {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => mostrarpersoImportantes(data));
}

const mostrarpersoImportantes = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const persoImportantes = document.getElementById("persoImportantes");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color2"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  persoImportantes.appendChild(nuevoPersonaje);
}

//BLOQUE 3

document.getElementById('significativos').addEventListener("mouseenter", () => {
  if (count3 < 16) {
    count3++;
    getpersoSignificativos(count3);
  }
})

const getpersoSignificativos = (id) => {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => mostrarpersoSignificativos(data));
}

const mostrarpersoSignificativos = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const persoSignificativos = document.getElementById("persoSignificativos");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color3"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  persoSignificativos.appendChild(nuevoPersonaje);
}