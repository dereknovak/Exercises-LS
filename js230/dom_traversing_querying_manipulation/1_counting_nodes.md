Example 1
```html
<div>
  <p>Then press the <em>Draw</em> button</p> 
</div>
```

Example 2
```html
<div><p>Then press the <em>Draw</em> button.</p></div>
```

Example 1 will have 11 nodes. Example 2 will have 9 nodes.

Both:
1. html
2. head
3. body
4. div
5. p
6. text (p)
7. em
8. text (em)
9. text (p)

Div1:
10. text (div - whitespace before)
11. text (div - whitespace after)

Because of the newline within the first example, a whitespace text node is created.