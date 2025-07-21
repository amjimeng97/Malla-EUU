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
  "Segundo año": {
    "3º Semestre": [
      "Fisiología general",
      "Salud pública y epidemiologia",
      "Habilidades comunicacionales en enfermería",
      "Enfermería y comunidad",
      "Educación y promoción en la salud",
      "Fundamentos de enfermería básica",
      "Inglés ll"
    ],
    "4º Semestre": [
      "Bioestadistica",
      "Farmacología",
      "Fisiopatologia",
      "Enfermería y comunidad ll",
      "Enfermería básica aplicada",
      "Inglés lll",
      "Formación de líderes del mañana"
    ]
  },
  "Tercer año": {
    "5º Semestre": [
      "Enfermería y comunidad lll",
      "Enfermería en salud mental y psiquiatría",
      "Enfermería en médico quirúrgico",
      "Enfermería en medicinas complementarias y prácticas de bienestar en la salud",
      "Ética en enfermería",
      "Metodología de la investigación",
      "Análisis y resolución de conflictos"
    ],
    "6º Semestre": [
      "Gestión del cuidado enfermero en la comunidad",
      "Gestión del cuidado del enfermero en salud mental y psiquiatría",
      "Gestión del cuidado en médico quirúrgico",
      "Enfermería gerontogeriatrica",
      "Gestión en enfermería l",
      "Metodología de la investigación ll",
      "Electivo de formación general"
    ]
  },
  "Cuarto año": {
    "7º Semestre": [
      "Enfermería pediatría y neonatologia",
      "Enfermería de la mujer",
      "Enfermería en urgencia e intensivo",
      "Gestión del cuidado enfermero en gerontogeriatria",
      "Gestión en enfermería ll",
      "Seminario de tesis l",
      "Proyectos de responsabilidad social y emprendimiento"
    ],
    "8º Semestre": [
      "Gestión del cuidado enfermero en pediatría",
      "Legislación en salud",
      "Gestión del cuidado en urgencias",
      "Bioetica en enfermería",
      "Electivo formación profesional",
      "Seminario de tesis ll",
      "Aplicación de proyectos"
    ]
  },
  "Quinto año": {
    "9º Semestre": ["Internado comunitario"],
    "10º Semestre": ["Internado intrahospitalario"]
  }
};
const prerrequisitos = {
  "Bioquímica": ["Química general y orgánica"],
  "Integrado en microbiología y parasitologia": ["Biología e histologia"],
  "Enfermería en el ciclo vital": ["Introducción a la enfermería", "Anatomía general"],
  "Comunicación y tecnología": ["Introducción a la vida universitaria"],
  "Fisiopatologia": ["Fisiología general"],
  "Salud pública y epidemiologia": ["Bases socioculturales"],
  "Habilidades comunicacionales en enfermería": ["Comunicación y tecnología"],
  "Enfermería y comunidad": ["Enfermería en el ciclo vital"],
  "Educación y promoción en la salud": ["Bases socioculturales", "Psicología general y del desarrollo"],
  "Fundamentos de enfermería básica": ["Enfermería en el ciclo vital", "Integrado en microbiología y parasitologia"],
  "Inglés ll": ["Inglés l"],
  "Bioestadistica": ["Estrategias de resolución de problemas"],
  "Farmacología": ["Integrado en microbiología y parasitologia", "Fisiología general"],
  "Enfermería y comunidad ll": ["Enfermería y comunidad", "Educación y promoción en la salud"],
  "Enfermería básica aplicada": [
    "Fundamentos de enfermería básica",
    "Habilidades comunicacionales en enfermería",
    "Fisiología general",
    "Salud pública y epidemiologia"
  ],
  "Inglés lll": ["Inglés ll"],
  "Enfermería y comunidad lll": ["Enfermería y comunidad ll"],
  "Enfermería en salud mental y psiquiatría": ["Enfermería básica aplicada", "Farmacología"],
  "Enfermería en médico quirúrgico": ["Enfermería básica aplicada", "Fisiopatologia", "Farmacología"],
  "Enfermería en medicinas complementarias y prácticas de bienestar en la salud": ["Enfermería básica aplicada", "Farmacología"],
  "Ética en enfermería": ["Enfermería básica aplicada", "Formación de líderes del mañana"],
  "Metodología de la investigación": ["Bioestadistica"],
  "Análisis y resolución de conflictos": ["Formación de líderes del mañana"],
  "Gestión del cuidado enfermero en la comunidad": ["Enfermería en médico quirúrgico", "Enfermería y comunidad lll"],
  "Gestión del cuidado del enfermero en salud mental y psiquiatría": [
    "Ética en enfermería",
    "Enfermería en salud mental y psiquiatría",
    "Enfermería y comunidad lll"
  ],
  "Gestión del cuidado en médico quirúrgico": [
    "Ética en enfermería",
    "Enfermería en médico quirúrgico",
    "Enfermería y comunidad lll"
  ],
  "Enfermería gerontogeriatrica": [
    "Ética en enfermería",
    "Enfermería en médico quirúrgico",
    "Enfermería y comunidad lll"
  ],
  "Gestión en enfermería l": [
    "Enfermería básica aplicada",
    "Bioestadistica",
    "Formación de líderes del mañana"
  ],
  "Metodología de la investigación ll": ["Metodología de la investigación"],
  "Enfermería pediatría y neonatologia": [
    "Gestión del cuidado enfermero en la comunidad",
    "Gestión del cuidado en médico quirúrgico"
  ],
  "Enfermería de la mujer": [
    "Gestión del cuidado enfermero en la comunidad",
    "Gestión del cuidado en médico quirúrgico"
  ],
  "Enfermería en urgencia e intensivo": [
    "Gestión del cuidado en médico quirúrgico",
    "Enfermería gerontogeriatrica"
  ],
  "Gestión del cuidado enfermero en gerontogeriatria": [
    "Gestión del cuidado enfermero en la comunidad",
    "Gestión del cuidado en médico quirúrgico",
    "Enfermería gerontogeriatrica"
  ],
  "Gestión en enfermería ll": ["Gestión en enfermería l", "Análisis y resolución de conflictos"],
  "Seminario de tesis l": ["Metodología de la investigación ll"],
  "Proyectos de responsabilidad social y emprendimiento": ["Análisis y resolución de conflictos"],
  "Gestión del cuidado enfermero en pediatría": [
    "Enfermería pediatría y neonatologia",
    "Enfermería de la mujer"
  ],
  "Legislación en salud": [
    "Ética en enfermería",
    "Gestión en enfermería l",
    "Gestión en enfermería ll"
  ],
  "Gestión del cuidado en urgencias": [
    "Enfermería pediatría y neonatologia",
    "Enfermería de la mujer",
    "Gestión del cuidado en médico quirúrgico",
    "Enfermería gerontogeriatrica",
    "Gestión en enfermería l",
    "Seminario de tesis l",
    "Proyectos de responsabilidad social y emprendimiento"
  ],
  "Bioetica en enfermería": ["Enfermería en urgencia e intensivo"],
  "Electivo de formación general": ["Ética en enfermería"],
  "Seminario de tesis ll": ["Seminario de tesis l"],
  "Aplicación de proyectos": ["Proyectos de responsabilidad social y emprendimiento"],
  "Internado comunitario": [
    "Electivo formación profesional",
    "Legislación en salud",
    "Bioetica en enfermería",
    "Gestión del cuidado en urgencias",
    "Gestión del cuidado enfermero en pediatría",
    "Seminario de tesis ll",
    "Aplicación de proyectos"
  ],
  "Internado intrahospitalario": [
    "Electivo formación profesional",
    "Legislación en salud",
    "Bioetica en enfermería",
    "Gestión del cuidado en urgencias",
    "Gestión del cuidado enfermero en pediatría",
    "Seminario de tesis ll",
    "Aplicación de proyectos"
  ]
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
          crearMalla(); // recarga visual
        });

        divSemestre.appendChild(divRamo);
      });

      contenedor.appendChild(divSemestre);
    });
  });
}

window.onload = crearMalla;
