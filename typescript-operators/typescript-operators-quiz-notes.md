# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements? able to log truthy messages and also can assign default values to variables.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`? Evaluation stops as soon as value of expression is known. Evaluations is from left to right.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`? The ?? checks for null or undefined while the OR operator calls everything that is falsy

- What is the `?:` (ternary) operator? How does it differ from `if/else`? The ternary operator will be applied for concise conditional expressions it is useful in making a small if/else statement.

- What is the `?.` (optional chaining) operator? When would you use it? You will apply this operator to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties. You would want to use it deeply nested properties.

- What is `...` (spread) syntax? How do you use it with arrays and objects? This will be used to clone or merge objects and arrays, which is extremely useful in state management scenarios, like managing local component state in frameworks like React. Can combine objects or arrays into a single array or object

- What data types can be spread into an array? Into an object? Arrays: string, numbers, booleans, and characters, and objects. Objects: numbers, strings, booleans, null, undefined, symbols.

- How does spread syntax differ from rest syntax? Spread syntax expands an array into its elements while rest syntax collects multiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
