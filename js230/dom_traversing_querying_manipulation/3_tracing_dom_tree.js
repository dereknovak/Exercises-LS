/*

Solved w/out hints

I: ID
O: 2d Array

Recursion
- Work your way up until body
- Determine all of the siblings
    - Should all be included in array
- Once all siblings in array, traverse to parent

22

[[a], [strong], [span, span], [p, p], [section, section], [header, main, footer], [article]]

Guard Clause
    - If parent === body
        - Return
Recursive Defintion
    - The 2D tree is a given node and its siblings plus its parent and siblings

APPLICATION
[a + siblings] + parentofA
[strong + siblings] + parent of strong
....

*/

function groupSiblings(node, tree = []) {
  const parent = node.parentNode;
  const siblings = [...parent.children].map(child => child.tagName);

  tree.push(siblings);

  if (parent.tagName === 'BODY') return tree;
  return groupSiblings(parent, tree);
}

function drawTree(id) {
  const node = document.getElementById(id);
  return groupSiblings(node);
}
