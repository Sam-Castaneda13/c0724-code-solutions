# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console? So we can check if the code is running fine and see our outputs

- What is the purpose of events and event handling? so you can make things happen on the html website by using actions

- Are all possible parameters required to use a JavaScript method or function? for javascript no but for Typescript you must use every parameter.

- What method of element objects lets you set up a function to be called when a specific type of event occurs? the addEventListener

- What is a callback function? A callback function is a function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires? it is being sent the event object.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it? it is referring to the element that is responsible for firing the event

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick); This will run fine because the handleClick has not been called
  ```
  ```js
  element.addEventListener('click', handleClick()); This one will not run because the handleClick function is being called.
  ```

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
