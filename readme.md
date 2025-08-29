### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
(
  getElementById = we use getElementById to select an item with ID.. It should be unique.. 
  getElementsByClassName = we use getElementsByClassName to select an item with classname.. classname can be used in different items..
  querySelector / querySelectorAll = to select a lot of items along with classes, we can use querySelector / querySelectorAll..
)

2. How do you **create and insert a new element into the DOM**?
(
  ans= we can use document.createElement('').. And then insert using methods like appendChild()..
)

3. What is **Event Bubbling** and how does it work?
(
  ans= Event Bubbling is a way to get items from the same div or section to get parents of the items.. something like this-(child → parent → grandparent → document)
)

4. What is **Event Delegation** in JavaScript? Why is it useful?
(
  ans= Event Delegation is a technique where you attach a single event listener to a parent and handle it there using event.target..
)

5. What is the difference between **preventDefault() and stopPropagation()** methods?
(
  preventDefault() = preventDefault stops browser’s default action for an event..
  stopPropagation() = stopPropagation stops the event from bubbling up to parent elements..
)