# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page? No it just creates an element but the element has never been pushed into the HTML file yet

- How do you add an element as a child to another element? .appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method? a property like src or id or other things. Then you input the text you want it to be ex. element.setAttribute(id, 'What')

- What steps do you need to take in order to insert a new element into the page? You create the element then append it ot a already made element

- What is the `textContent` property of an element object for? It is the text inside of something like the text inside the paragraph and you can use textContent to change the text

- Name two ways to set the `class` attribute of a DOM element. By using setAttribute or using className

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)? It is good so it only runs when told to and doesn't run every time.

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
