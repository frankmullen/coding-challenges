# Overriding Bootstrap

The bootstrap navbar has a border-radius applied to it. Let’s override this and set it to 0. We first need to find which class is applying the property and then override it in our css file. Do an inspect on the navbar to find the appropriate class.

**Bootstrap Themes:**

There are a number of bootstrap themes that are out there that can be used to enhance the look and feel of your application over and above the default settings.  See some themes and customization options at http://getbootstrap.com/getting-started/#examples.

Themes work in one of two ways:

- They overwrite the **bootstrap.css** file, i.e. create a new bootstrap.css file, with changes and additions made to core bootstrap.css
- They create a new css file, which is included after the core bootstrap.css file with new classes and any overrides.

Lets look at an example:

- Navigate to http://startbootstrap.com/template-overviews/creative/.
- Click the “View source on Git” and download the zip file from git (button bottom right).
- Extract zipped file to a new project folder.
- Bring up **index.html** in chrome.
- Do a right-click “inspect element” on the screen.

Spend some time looking at each of the elements of the html. You will notice that there is a css file called ‘**creative.css**’ which is the bootstrap theme. It overrides the core bootstrap css and adds some additional classes of its own.

Click on ‘**creative.css**’ in the left hand window and take some time looking at the code.

Find where the ‘**creative.css**’ file is loaded in the head of the html. What color (if any) is the navigation menu ? How can you determine this ?

Comment out the '**creative.css**' file in the head of the html, then reload the web page in chrome. What happens ?

