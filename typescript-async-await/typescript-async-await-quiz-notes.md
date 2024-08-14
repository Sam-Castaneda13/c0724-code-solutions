# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for? Responding to errors, reporting errors, writing understandable code logic, organizing code

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`? THe async and await code is read squentially and will run once the asynchronous function is completed

- When do you use `async`? By putting it in front of the newly defined function

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?) By putting in front of a callback function. You shouldn't use it when the code is synchronous or if there is no sequential execution.

- How do you handle errors with `await`? By using the try and catch block.

- What do `try`, `catch` and `throw` do? When do you use them? try is used to test the code inside of the async function and catch is used to throw an error when it catches something that is false or falsy, while throw is used to throw the message so the code or user knows there was an error and where the error was.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection? You will get a uncaught Promise error.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why? Async/await because it is neater and simpler to read while also doing the same job that promise.then does more efficiently.

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
