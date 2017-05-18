# Sophomore/Junior Final
## The Fysics Phinal

For this program you will be creating a terminal program that will ask the user a series of questions.  After the user has answered all of the questions, your program will select and evaluate the correct physics equations and return the answer to the user.

This program will be comprised of three files.
  -  physicsGUI.js
  -  physics.js
  -  language.js
  
### physics.
You should have motion, force, energy and momentum equations.
  -  d = distance
  -  v = velocity
  -  a = acceleration
  -  t = time 
  -  p = momentum
  -  ec = Kinetic Energy
  -  f = force

### energy.js
You should have one Kinetic energy equation, one mass equation, and one velocity equation.
  -  ke = kinetic energy
  -  m = mass
  -  v = velocity

### physicsGUI.js
You will set up a series of questions inside questions, inside questions to figure out which physics function to use.  Remember that your physics functions are stored in two objects: named motion and energy.  You will also use a series of conditional statements to decide which function to use.

###### Example
  -  "What type of equation would you like to choose?" (options: motion or energy)
    -  if motion
      +  which variable are you solving for? (options: d, v, t, or a)
    -  else if energy
      +  which variable are you solving for? (options: ke, m, or v)
    -  else
      +  I'm sorry I don't know how to calculate that yet...
https://www.youtube.com/watch?v=mkggXE5e2yk
