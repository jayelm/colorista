# randomColorStyle

A tiny script to randomly change the color of HTML elements.

## Usage

...is very, very simple:

    randomColorStyle(colors, spec)

 - `colors` is an Array of hex codes. Specify your own, or programmatically
     choose some: [randomColor](https://github.com/davidmerfield/randomColor)
     (of which the name of the script is inspired) plays nicely. If left blank,
     `colors` will default to a completely random rgb selection.
 - `spec` is an Object consisting of selector keys paired with values that are
     Arrays of properties. As an example:

        spec = {
            '.className': ['color'],
            '#id': ['background-color'],
            'element1, element2': ['border-bottom-color', 'border-left-color']
        }

    The script calls
    [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll)
    to retrieve elements, so selectors simply have to work with that method.
    The Array must be comprised of valid CSS properties, and will overwrite
    those properties.

### Placement

Load `randomColorStyle.js` anywhere in the HTML, (or just copy+paste), but it
is important that the actual function `randomColorStyle()` be called either
after jQuery's `$(document).ready` or at the end of the HTML file, when
everything has loaded; otherwise, the script won't find any HTML elements to
change!

## Bugs, Contributing, Etc.

Feel free! This script is so small, it's barely deserving of a git repo in the
first place.
