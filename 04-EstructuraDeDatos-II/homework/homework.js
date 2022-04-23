"use strict";
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let current = this.head;
  let node = new Node(value);
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  } else {
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
  }
};
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (current === null) {
    return null;
  } else if (current && !current.next) {
    let aux = current.value;
    this.head = null;
    this._length--;
    return aux;
  }
  while (current.next.next) {
    current = current.next;
  }
  let aux = current.next.value;
  current.next = null;
  this._length--;
  return aux;
};
LinkedList.prototype.search = function (argumento) {
  if (this.head === null) {
    return null;
  }
  let current = this.head;
  while (current !== null) {
    if (typeof argumento === "function") {
      if (argumento(current.value) === true) {
        return current.value;
      }
    } else if (argumento === current.value) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function (key) {
  let suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma += key.charCodeAt(i);
  }
  return suma % this.numBuckets;
};
HashTable.prototype.set = function (key, value) {
  if (typeof key != "string") {
    throw TypeError("this is a very different string");
  }
  let i = this.hash(key);
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
  // this buckets = []
  // i = 3
  // this buckets[3] =[,,,{}]
  // this buckets[3][key] = [,,,{key: value}]
};
HashTable.prototype.get = function (key) {
  let i = this.hash(key); // 3
  return this.buckets[i][key]; // this buckets[3][key] = [,,,{key: value}]
};
HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
