Let’s continue from the previous exercise and explore fixed positioning. We will change the position of the header to fixed.

- First, we will setup the document. Create more content (another sidebar & content), otherwise it will be difficult to see the effect of the fixed positioning as we need some scrolling to take place.

![](imgs/unit-324.png)

- We need to tidy up our code a little here, we just copied and pasted divs which have ids. Id names must be unique or they will cause all sorts of problems down the line. Because there is now more that one sidebar and content, let’s make them classes rather than ids. That should solve the issue.

- Give the header border an id and change its position to fixed.

![](imgs/unit-325.png)

- This will cause some nasty layout problems! As the header is out of normal flow, the divs will move up covering it.

- We can push the divs down to make room. Add a padding-top to the container to give space to the header.

- There is one more issue. When we scroll, the content divs move on top of the header. We want the header on top.

![](imgs/unit-326.png)

- To do this we must change the order of the elements in the 3D space. We will not go into too much detail here but suffice is to say that the z-index controls that order.

![](imgs/unit-327.png)

- Let’s give the header a high z-index, e.g. 100.
z-index: 100;

![](imgs/unit-328.png)

- Save your work at this point. We will be continuing with this challenge in the next lesson.