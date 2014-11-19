# Colorista

A tiny script to easily and programmatically change HTML element colors *en
masse*. Also supports random color choices. Add some spontaneity to you and
your website's life.

## Usage

...is very, very simple:

    colorista(colors, spec)

 - `colors` is an *Array* of valid css colors (hex codes, rgba, known colors,
     etc.). If given more than one color, a random color will be chosen. If
     given an empty Array, a completely random rgb color will be chosen.
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

    The function returns the color chosen as a String, which can be useful if
    you intend to use it further.

### Placement

Load `colorista.js` anywhere in the HTML, (or just copy+paste), but it is
important that the actual function `colorista()` be called either on document
ready/load or at the end of the HTML file; otherwise, the script won't find any
HTML elements to change!

To change multiple colors at once, programmatically call the function multiple
times. A more concise way of doing this may be in the works.

### Example

    colorista(['red', 'green', 'blue'], {
        'body': ['background-color']
    });

Also see the small example HTML included in this repository.

## Bugs, Contributing, Etc.

Feel free! This script is so small, it's barely deserving of a git repo in the
first place.
