# Challenge

Let’s play around with everything we’ve learned so far in this entire lesson.

You’re going build a project containing a single app. The app will contain three views – a homepage, an about page, and a contact page. Common to all pages will be a simple menu with links to each page. The menu will be created as a template and each view will be a child template to the menu. The home page will have a simple message telling the user what day it is. The contact page will display your first name, last name, and your telephone number and the about page will contain some information about your fictitious site.

To help you on your way, here’s a list of steps to get you there:

- Create a new Django project in Pycharm called MenuTest.
- Create an app called sitepages.
- Run your web server from inside your project root folder to test.
- Register your app with the project.
- Create a base template with your navigation menu.
- Create three views:
-- home()
-- about()
-- contact()
- Register the views with your URL’s file.