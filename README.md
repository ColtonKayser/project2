# Welcome to the 8-bit Backlog!
8-bit Backlog is a full-stack CRUD app that let's you keep a log of videogames you'd like to play.  It utilizes the seven [Restful Routes](https://gist.github.com/alexpchin/09939db6f81d654af06b), and also features back-end database support from Mongo DB. It is my second project from my Web Development Immersive course at [General Assembly](https://generalassemb.ly/). Here is a [live-link](https://coltonlog.herokuapp.com/) to the app.

# Approach Taken
I wanted the user to have a visual grid of cards that each represented a game stored within the database. I also wanted to keep the site visually simple, and allow users to add games to the log, edit existing games, and remove games. I wanted the games to have some descriptive elements, so I came up with five points of description. 

They are:
* Name
* Year
* Image of the Game
* Notes 
* Genre

When a user creates or edits a game, they are manipulating these data points. 

Lastly, I wanted the user to be able to log in and log out, so I intergrated that feature into the site. 

# Seven Restful Routes
The seven [Restful Routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) were used for all the heavy lifting when it came to the data creation and manipulation on this app.

# Technology Used
## Mongo DB and Express
While designing this app, I used express to make my computer a local server. I used Mongoose to map the created objects in the app's data between Node.JS and Mongo DB. 

## EJS and Partials
I used embedded javaScript for the index page of the app specifically, where I ran a for loop to create the cards on the index page. This let's users add or remove cards to the index page. We recently learned about partials in class, so I utilized them in the head section of all of my pages to keep my styling cohesive on the app. 

## Materialize
This app was my first experience using Materialize for my styling framework, and it gave the design some unity. The buttons, checkboxes, and forms all have similar stlying, and make the app look cohesive. It didn't always agree with what I wanted the elements to do layout-wise, but it was very useful in creating and positoning cards. 

## BCrpyt 
Part of the project included following the MVC (models, views, controllers) file structure, and as such, I wanted to make sure the user had the ability to sign up, and log in. I used to BCrypt to encrypt all passwords.

## Future Features
I'd like to add the ability to sort the games by genre on the index page of the app. I just ran out of time before the project was due to progam that. My initial thoughts are using buttons and jQuery to hide and show cards based on genre. I may come back to add this feature once I complete the course. 
