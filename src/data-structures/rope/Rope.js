export default class Rope {
  /**
   * Construct a rope from a string.
   *
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
    this.left = null;
    this.right = null;
    this.weight = str.length; // length of contents to the left
  }

  /**
   * Calculates the length of the string this node and its children
   * represent.
   *
   * @return {number}
   */
  length() {
    if (this.left === null && this.right === null) {
      return this.str.length;
    } else if (this.left !== null && this.right === null) {
      return this.weight;
    } else if (this.left === null && this.right !== null) {
      return this.right.length();
    } else {
      return this.weight + this.right.length();
    }
  }

  /**
   * Insert a node at position i, return resulting node.
   *
   * @param {number} i
   * @param {Rope} otherNode
   * @return {Rope}
   */
  insert(i, otherNode) {
    [n1, n2] = this.split(i);
    return n1.concat(otherNode).concat(n2);
  }

  /**
   * Get the character at position i.
   *
   * @param {number} i
   * @return {string}
   */
  index(i) {
    if (this.weight <= i && this.right !== null) {
      return this.right.index(i - this.weight);
    } else if (this.left !== null) {
      return this.left.index(i);
    } else {
      return this.str[i]
    }
  }

  /**
   * Concatenate otherNode to this node, return resulting node.
   *
   * @param {Rope} otherNode
   * @return {Rope}
   */
  concat(otherNode) {
    let newRope = new Rope("");
    newRope.str = null;
    newRope.left = this;
    newRope.right = otherNode;
    newRope.weight = newRope.left.length();
    return newRope;
  }

  split(i) {
    // returns two new nodes in an array [n1, n2]
    if (this.left == null) {
      let nodes = [new Rope(""), new Rope("")];
      if (i == 0) {
        nodes[0] = null;
        nodes[1] = this;
      } else if (i = this.weight) {
        nodes[0] = this;
        nodes[1] = null;
      } else {
        nodes[0] = new Rope(this.str.substring(0, i));
        nodes[1] = new Rope(this.str.substring(i, this.weight));
      }
      return nodes;
    }
    else if (i = this.weight) {
      return [new Rope(this.left), new Rope(this.right)];
    } else if (i < this.weight) {
      let pair = this.split(i);
      return [new Rope(pair[0]), this.right.concat(pair[1])];
    } else {
      let pair = this.right.split(i - this.weight);
      return [this.left.concat(pair[0]), pair[1]];
    }
  }

  delete(i, j) {
    // returns new node
    let pair1 = this.split(i);
    let pair2 = pair1[1].split(j);
    return pair1[0].concat(pair2[1]);
  }

  report(i, j) {
    // returns string, basically a stubstring method.
    if (this.left == null && this.right == null) {
      return this.str.substring(i, j);
    } else if (this.left == null && this.right != null) {
      return this.right.report(i, j);
    } else if (this.left != null && this.right == null) {
      return this.left.report(i, j);
    } else {
      return this.left.report(i, this.weight) + this.right.report(0, j - this.weight);
    }
  }
}
