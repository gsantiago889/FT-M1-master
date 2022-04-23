"use strict";

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let izq = []; //menores a pivot
  let der = []; //mayores a pivot
  let equals = []; // iguales a pivot

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else if (array[i] > pivot) {
      der.push(array[i]);
    } else {
      equals.push(array[i]);
    }
  }
  return quickSort(izq).concat(equals).concat(quickSort(der));
}

function dividir(array) {
  let mitad = Math.floor(array.length / 2);
  let izquierda = array.slice(0, mitad);
  let derecha = array.slice(mitad, array.length);

  return [izquierda, derecha];
}

function unir(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let dividido = dividir(array);
  let left = dividido[0];
  let right = dividido[1];
  return unir(mergeSort(left), mergeSort(right));

  /* if (array.length === 1) return array;

  let merge = function (izquierda, derecha) {
    let datos = [];
    while (izquierda.length > 0 && derecha.length > 0) {
      datos.push(
        izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift()
      );
      return datos.concat(izquierda).concat(derecha);
    }
    return merge(izquierda, derecha);
  };*/
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
