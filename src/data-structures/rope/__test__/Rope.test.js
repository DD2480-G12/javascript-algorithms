import Rope from '../Rope';

function getBasicRope() {
  let node1 = new Rope("");
  let node2 = new Rope("");
  let leaf1 = new Rope("ab");
  let leaf2 = new Rope("cd");
  let leaf3 = new Rope("ef");
  node1.left = node2;
  node1.right = leaf3;
  node1.weight = 4;
  node2.left = leaf1;
  node2.right = leaf2;
  node2.weight = 2;
  return node1;
}

function compareBasicRope(rope) {
  if (rope.left === null || rope.right === null ||
    rope.left.left === null || rope.left.right === null) {
    return false;
  }

  return rope.weight === 4 && rope.left.weight === 2 &&
    rope.left.left.str === "ab" &&
    rope.left.right.str === "cd" &&
    rope.right.str === "ef";
}

describe('Rope', () => {
  it('should calculate the length correctly', () => {
    let rope = getBasicRope();

    expect(rope.length()).toBe(6);
  });

  it('should insert a new node', () => {
    let rope1 = new Rope("abef");
    let rope2 = new Rope("cd");

    let rope3 = rope1.insert(2, rope2);

    expect(compareBasicRope(rope3)).toBe(true);
  });

  it('should index a character', () => {
    let rope = getBasicRope();

    expect(rope.index(0)).toBe("a");
    expect(rope.index(1)).toBe("b");
    expect(rope.index(2)).toBe("c");
    expect(rope.index(3)).toBe("d");
    expect(rope.index(4)).toBe("e");
    expect(rope.index(5)).toBe("f");
  });

  it('should concat the nodes', () => {
    let leaf1 = new Rope("ab");
    let leaf2 = new Rope("cd");
    let leaf3 = new Rope("ef");

    let node1 = leaf1.concat(leaf2);
    let node2 = node1.concat(leaf3);

    expect(compareBasicRope(node2)).toBe(true);
  });

  it('should report the nodes', () => {
    let rope = getBasicRope();
    expect(rope.report(1, 2)).toBe("bcd");
  });
});
