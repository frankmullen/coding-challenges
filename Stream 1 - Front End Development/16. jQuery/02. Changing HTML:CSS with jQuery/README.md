**Challenge A:**

From the example we have been working on :

- Try changing the content of all the paragraphs on the page in one go.

**Challenge B:**

Continuing from Challenge A:

- Append a paragraph to every paragraph already on the page. (Some lorem ipsum text will be fine)
- Remove all links from the page.
- Empty all cards

**Challenge C:**

We can also use the console to temporarily enable jQuery on pages that don’t already have it loaded. Run the following three commands in the console, to manually add jQuery to the page’s DOM:

```js
var script = document.createElement('script');
script.src = "//code.jquery.com/jquery-latest.min.js";
document.head.appendChild(script);
```
Go to http://www.eir.ie

Load jQuery and use it to:

- find out the font-family used for paragraphs
- find out the font family used for  `<h1>`s
- change the text of each `<h2>` to your name

Go to [Wikipedia](http://www.wikipedia.org):

Load jQuery and use it to change the following:

- background color
- font family for paragraph