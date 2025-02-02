```html
<div id="1">
  <h1 id="2">Hello, <em id="3">World</em></h1>
  <p id="4">
    Welcome to wonderland. This is an
    <span id="5">awesome</span> place.
  </p>
  <a href="#" id="6"><strong id="7">Enter</strong></a>
  <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
</div>
```

| ID  | Direct | Indirect |
| --- | ------ | -------- |
| 1   |  9     |  12      |
| 2   |  2     |  1       |
| 3   |  1     |  0       |
| 4   |  3     |  1       |
| 5   |  1     |  0       |
| 6   |  1     |  1       |
| 7   |  1     |  0       |
| 8   |  1     |  2       |
| 9   |  1     |  1       |
| 10  |  1     |  0       |

Further Exploration

```js
function childNodes(id) {
  function countChildren(parent) {
    let count = parent.childNodes.length;

    for (let child of parent.childNodes) {
      count += countChildren(child);
    }

    return count;
  }

  const parent = document.getElementById(String(id));
  const direct = parent.childNodes.length;
  const indirect = countChildren(parent) - direct;

  return [direct, indirect];
}
```