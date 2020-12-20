Etch-a-Sketch
Created as part of The Odin Project curriculum.

Live page (https://jameslo599.github.io/etch-a-sketch/)

Functionality
- Clicking inside the grid will toggle the pen function, which fills every cell when the mouse pointer enters it.

- Added a slider for ease in modifying number of squares desired.

- Incrementally Darken will darken each cell so that it should take exactly 10 almost equal passes for each individual cell to get to black. Since sometimes the calculation of each cell's individual increment will be a decimal value, sometimes the new RGBA values will get rounded.

- When the Incrementally Darken radio button is clicked, the darkening step value resets, so it will again take 10 almost equal passes for each cell to turn black.

Thoughts
Prior to this project, I had been primarily using Flexbox to organize my elements so there was an initial learning curve when implementing it. I originally began generating the grid squares by using a for loop but this resulted in difficulties later when trying to add mouseenter event listeners as only the first square in the grid would be affected. However, once I figured out how to properly utilize Grid, it came together within a short time. 

The problem I spent the most time figuring out was the darken function. I wanted to have exactly 10 equal steps between each cell's current color and black, starting when the darken radio button was clicked. It was difficult to find a method to fulfill this, but I ended up figuring it out by utilizing the slice method to slice out the previous darkening step's opacity value and add it to the current step's.

I spent some time getting more familiar with various html inputs and figuring out which DOM events seemed to work best for different input types.

I also spent time practicing new css techniques such as webkit transitions and transforming elements into different shapes to make my design look more appealing. 

- James Lo