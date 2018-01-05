// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //'s'--stop
  const arr = [root, 's'];
  const counters = [0];

  while(arr.length > 1) {
    const node = arr.shift()
    //碰到s。加一个counters[0],s放到结尾
    if(node === 's') {
      counters.push(0)
      arr.push('s')
    } else {
      //碰到node，添加子，counter最后+1
      arr.push(...node.children);
      counters[counters.length - 1] ++
    }
  }

  return counters
}

module.exports = levelWidth;
