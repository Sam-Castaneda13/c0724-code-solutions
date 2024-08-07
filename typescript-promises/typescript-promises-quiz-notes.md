# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises? Promises in JavaScript follow an Event Queue Model where callback functions associated with asynchronous operations are placed into a queue when the operation completes.

- What are the three states a Promise can be in? Pending, Fulfilled, Rejected

- How do you handle the fulfillment of a Promise? The fulfillment of a Promise is managed by attaching a .then() method to the Promise. The .then() method takes a callback function that will be called when the Promise is resolved.

- How do you handle the rejection of a Promise? The rejection of a Promise is managed by attaching a .catch() method. The .catch() method is used to define a callback that will be executed if the Promise is rejected.

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
