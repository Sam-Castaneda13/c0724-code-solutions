# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`? interface is a reference to the object onto which the event was dispatched.

- What is the effect of setting an element to `display: none`? It will display nothing.

- What does the `element.matches()` method take as an argument and what does it return? it takes a element's class and it returns boolean

- How can you retrieve the value of an element's attribute? by using the className or textContent methods

- At what steps of the solution would it be helpful to log things to the console? When checking if your loop is comparing things correctly and if you are passing the correct information

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead? you would Have to crate a new addEventListener to change these new tab and view. Or by using the element.classList.add()

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead? if (element.view === $view[0]){$view[0].className = 'view', $view[1].className = 'view hidden', $view[2].className = 'view hidden'} Repeat this but changing the original $view and adding it up by one and changing the result to make the same $view is = to view.

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
