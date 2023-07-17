# Barb

*Barb* is a toolkit of Javascript snippets that can be usefull but are not required in a project.

## Snippets

### Stare at mouse

Stare at mouse is a snippet to make an element oriented face to the mouse.

```javascript
import StareAtMouse from "https://cdn.jsdelivr.net/gh/louis-parent/Barb@latest/scripts/StareAtMouse.js";

StareAtMouse.watch(element, deg, pulling);
```

**Params** :

- *element* : the element to animate
- *deg* : the optional max degree angle
- *pulling* : the optional boolean to make a pulling movement if true, or a pushing mouvement else
