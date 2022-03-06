import RopeNode from './RopeNode';

export default class Rope {
  constructor(str) {
    this.str = str;
    this.left = null;
    this.right = null;
    this.weight = str.length; // length of contents to the left
  }

  insert(i, otherNode) {
    // returns new node
  }

  index(i) {
    // returns char
  }

  concat(otherNode) {
    // concats otherNode to this node, returns new node
  }

  split(i) {
    // returns two new nodes in an array [n1, n2]
  }

  delete(i, j) {
    // returns new node
  }

  report(i, j) {
    // returns string, basically a stubstring method.
  }
}
