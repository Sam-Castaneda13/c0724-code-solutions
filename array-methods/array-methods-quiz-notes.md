# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do? creates a new array as it grabs the items from another array while following the index and array inputted
  - What should the callback function do? it is used tp execute oon each element, taking up to three arguments
  - What is `Array.forEach` useful for? it always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
- `Array.map`:
  - What does `Array.map` do? creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return? It grabs every element that is called form array
  - What is `Array.map` useful for? It is good to get a new array with the values without having to edit
- `Array.find`:
  - What does `Array.find` do? returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  - What should the callback function return? execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  - What is `Array.find` useful for? It is useful to search a array and find all of the truthy values and but then into the array while saying everything else is undefined.
- `Array.filter`:
  - What does `Array.filter` do? creates a new array with all elements that pass the test implemented by the provided function.
  - What should the callback function return? test each element of the array. Function returns true to keep the element, false otherwise.
  - What is `Array.filter` useful for? It is very useful to check an array and only keep the true elements form the array.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
