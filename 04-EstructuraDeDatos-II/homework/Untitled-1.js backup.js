const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
//console.log(
//  insertion_Sort([
//  2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7,
//  483, 9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21,
// ])
//);

/*function bubbleSort(array = [5, 1, 4, 2, 8]) {
  var n, i, k, aux;
  n = array.length;
  console.log(array); // Mostramos, por consola, la lista desordenada
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      console.log(array[i] + "--" + array[i + 1]);
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  return array;
}
console.log(bubbleSort());*/

/*function mergeSort(array) {
  var datos = [];
  if (array.length <= 1) return array;

  let mitad = parseInt(array.length / 2);
  let izquierda = array.slice(0, mitad);
  mergeSort(izquierda);
  let derecha = array.slice(mitad, array.length);
  mergeSort(derecha);

  let merge = function (izquierda, derecha) {
    while (izquierda.length > 0 && derecha.length > 0) {
      datos.push(
        izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift()
      );
      return datos.concat(izquierda).concat(derecha);
    }
  };
  return merge(izquierda, derecha);
}

let numeros = [11, 13, 18, 5, 87, 1, 15, 47, 25, 9, 4];
console.log(numeros);
mergeSort(numeros);
console.log(numeros);*/

/*function BinarySearchTree() {
  this.root = null;
  this._length = 0;
}
function Node(value) {
  this.value = value;
  this.left = null;
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
  let current = this.root;
  if (value === current.value) return true;

  if (value > current.right) {
    // busco a la derecha
    if (current.right === null) return false;
    else return current.right.contains(value);
  }
  if (value < current.left) {
    // busco a la izquierda
    if (current.left === null) return false;
    else return current.left.contains(value);
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
let Bst = new BinarySearchTree();
Bst.insert(12);
Bst.insert(75);
Bst.insert(16);
Bst.insert(71);
Bst.insert(112);
Bst.insert(222);

Bst.contains(16);

Bst.size();
console.log(Bst._length); */
