# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`? it is a property of an event object that refers to the element that triggered the event

- Why is it possible to listen for events on one element that actually happen its descendent elements? Because you are changing its parent so it changes the children

- What DOM element property tells you what type of element it is? it would be tagName element

- What does the `element.closest()` method take as its argument and what does it return? it takes the interface of the element and traverses the element and it's parents

- How can you remove an element from the DOM? you must use the remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually? using the element.appendChild().

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
