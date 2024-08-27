# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React? Hooks are special functions that allow components to have access to state and other React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory)) The function name mus start with use followed by an uppercase letter ex useState and useCallBack, Hooks can only be called by React components and other hooks, All hooks in a component must always be called at the top level of a component, and in the same order

- What is the purpose of state in React? state allows React to store any values that will need to persist between component re-renders, and lets React know when it needs to schedule a component re-render.

- Why can't we just maintain state in a local variable? Because local variables don't get change or persist through renders

- What two actions happen when you call a `state setter` function? it can update the state variable and trigger React to render the component again

- When does the local `state variable` get updated with the new value? based on which thing is set like onclick and it has the state setter update the value.

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
