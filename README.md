# randomColorStyle

A tiny script to randomly change the color of HTML elements on page load.  Add
some spontaneity to you and your website's life.

## Usage

...is very, very simple:

    randomColorStyle(colors, spec)

 - `colors` is an Array of valid css colors (hex codes, rgba, known colors,
     etc.). Specify your own, or programmatically
     choose some: [randomColor](https://github.com/davidmerfield/randomColor)
     (of which the name of this script is inspired) plays nicely. If left
     blank, `colors` will default to a completely random rgb selection.
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

    The function returns the randomly selected color chosen as a String, which
    can be useful if you intend to use it further.

### Placement

Load `randomColorStyle.js` anywhere in the HTML, (or just copy+paste), but it
is important that the actual function `randomColorStyle()` be called either
on jQuery's `$(document).ready` or at the end of the HTML file, when everything
has loaded; otherwise, the script won't find any HTML elements to change!

It's also possible, of course, to programmatically call the function multiple
times, to change elements and properties independently with respect to the
random color choice. A more concise way of doing this may be in the works.

### Example

    randomColorStyle(['red', 'green', 'blue'], {
        'body': ['background-color']
    });

Also see the small example HTML included in this repository.

## Bugs, Contributing, Etc.

Feel free! This script is so small, it's barely deserving of a git repo in the
first place.
