const malla = {
  "Primer año": {
    "1º Semestre": [
      "Anatomía general",
      "Biología e histologia",
      "Química general y orgánica",
      "Introducción a la enfermería",
      "Bases socioculturales",
      "Introducción a la vida universitaria",
      "Estrategias de resolución de problemas"
    ],
    "2º Semestre": [
      "Primeros auxilios",
      "Bioquímica",
      "Psicología general y del desarrollo",
      "Integrado en microbiología y parasitologia",
      "Enfermería en el ciclo vital",
      "Inglés l",
      "Comunicación y tecnología"
    ]
  },
  // ... continúa con los otros años/semestres según tu malla completa
};

const prerrequisitos = {
  "Bioquímica": ["Química general y orgánica"],
  "Integrado en microbiología y parasitologia": ["Biología e histologia"],
  "Enfermería en el ciclo vital": ["Introducción a la enfermería", "Anatomía general"],
  "Comunicación y tecnología": ["Introducción a la vida universitaria"],
  // Agrega todos los demás prerrequisitos
};

const estadoAprobados = JSON.parse(localStorage.getItem("estadoAprobados")) || {};

function crearMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  Object.entries(malla).forEach(([año, semestres]) => {
    Object.entries(semestres).forEach(([semestre, ramos]) => {
      const divSemestre = document.createElement("div");
      divSemestre.className = "semestre";
      const h2 = document.createElement("h2");
      h2.textContent = `${año} - ${semestre}`;
      divSemestre.appendChild(h2);

      ramos.forEach((ramo) => {
        const divRamo = document.createElement("div");
        divRamo.className = "ramo";
        divRamo.textContent = ramo;

        const prereq = prerrequisitos[ramo];
        const cumplido = !prereq || prereq.every(r => estadoAprobados[r]);

        if (!cumplido) {
          divRamo.classList.add("bloqueado");
        } else if (estadoAprobados[ramo]) {
          divRamo.classList.add("aprobado");
        }

        divRamo.addEventListener("click", () => {
          if (divRamo.classList.contains("bloqueado")) return;

          estadoAprobados[ramo] = !estadoAprobados[ramo];
          localStorage.setItem("estadoAprobados", JSON.stringify(estadoAprobados));
          crearMalla(); // recargar para actualizar dependientes
        });

        divSemestre.appendChild(divRamo);
      });

      contenedor.appendChild(divSemestre);
    });
  });
}

window.onload = crearMalla;
