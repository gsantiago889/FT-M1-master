"use strict";
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.root = null;
  this._length = 0;
}
function Node(value) {
  this.value = value;
  this.lefth = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function (value, node = this.root) {
  if (!node) {
    this.root = new Node(value);
    return;
  }
  if (value < node.value) {
    if (node.left) {
      return this.insert(value, node.left);
    }
    node.left = new Node(value);
    return;
  } else {
    // vamos hacia la derecha
    if (node.right) {
      return this.insert(value, node.right);
    }
    node.right = new Node(value);
  }
  this._length = this.size();
  return this._length;
};
BinarySearchTree.prototype.contains = function (value, node = this.root) {
  // busco true
  if (value === node.value) return true;

  if (node.value < value) {
    // busco a la derecha
    return this.contains(value, node.right);
  }
  if (value < node.value) {
    // busco a la izquierda
    return this.contains(value, node.left);
  }
};
BinarySearchTree.prototype.size = function (node = this.root) {
  if (node.right === null && node.left === null) return 1;
  if (node.right !== null && node.left !== null)
    return 1 + this.size(node.right) + this.size(node.left);
  if (node.right !== null && node.left === null)
    return 1 + this.size(node.right);
  if (node.right === null && node.left !== null)
    return 1 + this.size(node.left);
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //order = in order
  //order = pre order
  // order = post order
  if (order === "pre-order") {
    // root - izq - der
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
  } else if (order === "post-order") {
    //izq - der- root
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    if (order === "in-order") {
      // izq - root - der
      if (this.left !== null) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, order);
    }
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left !== null) {
    array.push(this.left);
  }
  if (this.right !== null) {
    array.push(this.right);
  }
  cb(this.value);

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
