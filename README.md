# Sophomore/Junior Final
## The Fysics Phinal

For this program I will be creating a terminal program that will ask the user a series of questions.  After the user has answered all of the questions, yourthe program will select and evaluate the correct physics equations and return the answer to the user.

This program will be comprised of three files.
  -  physicsGUI.js
  -  physics.js
  -  language.js
  
### physics.js
The program will have motion, force, energy and momentum equations.
  -  d = distance
  -  v = velocity
  -  a = acceleration
  -  t = time 
  -  p = momentum
  -  ec = Kinetic Energy
  -  f = force

### language.js
This file contains all the neccesary information for the program to work in differente languages
  -  English
  -  Spanish
  -  Galician

### physicsGUI.js
The program has a series of questions inside questions, inside questions to figure out which physics function to use. The physics functions are stored in another objects: named equations. It also uses a series of conditional statements to decide which function to use.

###### Example
  -  "What type of equation would you like to choose?" (options: motion or energy)
    -  if motion
      +  which variable are you solving for? (options: d, v, t, or a)
    -  else if energy
      +  which variable are you solving for? (options: ke, m, or v)
    -  else
      +  I'm sorry I don't know how to calculate that yet...
      
