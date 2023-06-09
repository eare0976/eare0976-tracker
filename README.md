# eare0976-tracker
https://github.com/eare0976/eare0976-tracker

This simple one page website collects recipe data from users as a convenient recipe tracking application marketed for the niche target audience of bakers. Users are greeted with a simple display which has the header, a large button and the section 'Your bakery.' In this section, paragraph text below states the bakery is empty and to click the button to add an item. When the user clicks the button a drop down form appears with 6 different user input fields. This includes name, category, prep time, bake time, recipe and ingredients. All input fields are required for a successful submission. When the user submits the drop down form automatically closes showing that the 'empty bakery' text has disappeared and their bakery item has appeared in the bakery section. 

A lot of the code has been adapted from previous tutorial classes regarding forms and javascript. Otherwise most of the code was original or somewhat sourced or influenced from online resources such as W3Schools, replit, mozilla and chatgpt. 

Desktop designed for 1920x1080px and iPhone 14 Plus at 428x926px, code has been tested for smaller sizes but works best for iPhone 14 Plus size across all pages.

To view the display designed for the iPhone 14 Plus, make the chrome tab as short width ways as possible and change the zoom to 125%. *This was only tested on chrome, not sure if other browsers have different min widths*

There are other comments throughout index.html, script.js and style.css for more clarification on what each section does.

To run:
Put in terminal "npm run dev" and access at http://localhost:1234

Some Features
- Users can toggle open the form with a button which has an animation effect, which has 6 different fields for them to fill out. 
- the Recipe and Ingredients are stored as arrays, which are seperated by each new line "/n" and therefore requires users to put each step on a seperate line for it to work. This instruction is included as a placeholder in the recipe and ingredient sections
- the Recipe steps are numbered and the ingredients are unnumbered
- The image displayed on the bakery section cooresponds to the category input
- the form automatically toggles view off when the form is submitted correctly 
- the text in the bakery section only appears when the task list array is empty 
- Users can delete their recipes, data is also removed from the array and display will disappear 
