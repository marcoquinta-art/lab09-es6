import estudiantes, { curso } from "./datos.js";
import reporte, { promedio, estado } from "./calculos.js";

// Mostrar el curso
console.log(`Curso: ${curso}`);
document.querySelector("#curso").textContent = `Curso: ${curso}`;

// Spread de objeto: crear una copia con otro nombre
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Spread de arreglo: agregar el nuevo estudiante
const todos = [...estudiantes, nuevo];

// Mostrar los reportes
const lista = document.querySelector("#reportes");

todos.forEach((estudiante) => {
  const resultado = reporte(estudiante);

  console.log(resultado);

  const item = document.createElement("li");
  item.textContent = resultado;
  lista.appendChild(item);
});
