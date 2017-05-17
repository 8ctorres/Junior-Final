const readline = require('readline');
const equations = require('./physics')

function getLang(){
  let lang = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  lang.question("Please select a language... (English / Español / Galego) ", function (str){
    console.log(equations.selectlanguage(str));
    lang.close();
    getInput();
  });
}

function getInput(){
    let physics = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        physics.question(equations.lang_typeofproblem(), function(str){
          if (str.toLowerCase()==equations.lang_motion()) {
            physics.question(equations.lang_unknownvalue(), function(str){
              if (str.toLowerCase()==equations.lang_distance()) {
                physics.question(equations.lang_whatisyourtime(), function(str){
                  let t = str;
                    physics.question(equations.lang_whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(equations.lang_isthereacceleration(), function(str){
                          if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                            let a = 0;
                            console.log(equations.motion_distance(t,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()){
                            physics.question(equations.lang_whatisyouracceleration(), function(str){
                              let a = str;
                              console.log(equations.motion_distance_wa(t,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(equations.lang_notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                      });
                });
              }
              else if (str.toLowerCase()==equations.lang_speed() || str.toLowerCase()==equations.lang_velocity()) {
                physics.question(equations.lang_whatisyourtime(), function(str){
                  let t = str;
                  physics.question(equations.lang_whatisyourdistance(), function(str){
                    let d = str;
                    physics.question(equations.lang_isthereacceleration(), function(str){
                      if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                        let a = 0;
                        console.log(equations.motion_velocity(t,d));
                        physics.close();
                      }
                      else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()) {
                        physics.question(equations.lang_whatisyouracceleration(),function (str){
                          let a = str;
                          console.log(equations.motion_velocity_wa(t,d,a));
                          physics.close();
                        }) ;
                      }
                      else {
                        console.log(equations.lang_notrecognized());
                        physics.close();
                        getInput();
                      }
                    });
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_time()) {
                physics.question(equations.lang_whatisyourdistance(), function(str){
                  let d = str;
                    physics.question(equations.lang_whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(equations.lang_isthereacceleration(),function(str){
                          if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                            let a = 0;
                            console.log(equations.motion_time(d,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()) {
                            physics.question(equations.lang_whatisyouracceleration(),function(str){
                              let a = str;
                              console.log(equations.motion_time_wa(d,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(equations.lang_notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                });
                });
              }
              else if (str.toLowerCase()==equations.lang_acceleration()) {
                physics.question(equations.lang_whatisyourdistance(), function(str){
                  let d = str;
                  physics.question(equations.lang_whatisyourvelocity(), function(str){
                    let v = str;
                    physics.question(equations.lang_whatisyourtime(), function(str){
                      let t = str;
                      console.log(equations.motion_acceleration(d,v,t));
                      physics.close();
                    });
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized())
                physics.close();
                getInput();
              }
          });
          }

          else if (str.toLowerCase()==equations.lang_force()) {
            physics.question(equations.lang_unknownvalue(), function(str){
              if (str.toLowerCase()==equations.force()) {
                physics.question(equations.lang_whatisyourmass(), function(str){
                  let m = str;
                  physics.question(equations.lang_whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_force(m,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_mass()) {
                physics.question(equations.lang_whatisyourforce(), function(str){
                  let f = str;
                  physics.question(equations.lang_whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_mass(f,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_acceleration()) {
                physics.question(equations.lang_whatisyourforce(), function(str){
                  let f = str;
                  physics.question(equations.whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.force_acceleration(f,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()=="momentum") {
            physics.question("What is your unknown value? ", function(str){
              if (str.toLowerCase()=="momentum") {
                physics.question("What is your mass in kilograms? ", function(str){
                  let m = str;
                  physics.question("What is your initial speed in m/s? ", function(str){
                    let vi = str;
                    physics.question("What is your final speed in m/s? ", function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_momentum(m,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your momentum? ",function(str){
                  let p = str;
                  physics.question("What is your initial speed in m/s? ", function(str){
                    let vi = str;
                    physics.question("What is your final speed in m/s? ", function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_mass(p,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your momentum? ",function(str){
                  let p = str;
                  physics.question("What your mass in kilograms? ", function(str){
                    let m = str;
                    console.log(equations.momentum_velocity(p,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log("Value not recognized. Please try again");
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()=="energy" || str.toLowerCase()=="kinetic energy") {
            if (str.toLowerCase()=="energy"){
              console.log("ATTENTION. This program ONLY calculates KINETIC ENERGY, not potential or any others")
            }
            physics.question("What is your unknown value? ",function(str){
              if (str.toLowerCase()=="energy" || str.toLowerCase()=="kinetic energy") {
                physics.question("What is your mass in kilograms? ", function(str){
                  let m = str;
                  physics.question("What is your velocity in m/s? ", function(str){
                    let v = str;
                    console.log(equations.energy_energy(m,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your KINETIC energy in joules? ", function(str){
                  let ec = str;
                  physics.question("What is your velocity in m/s? ", function(str){
                    let v = str;
                    console.log(equations.energy_mass(ec,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your KINETIC energy in joules? ", function(str){
                  let ec = str;
                  physics.question("What is your mass in kilograms?", function(str){
                    let m = str;
                    console.log(equations.energy_velocity(ec,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log("Value not recognized. Please try again");
                physics.close();
                getInput();
              }
            });
          }
          else {
            console.log("Problem not recognized. Please try again")
            physics.close();
            getInput();
          }
        });
}

let z = "Manuel, estás ahi??";
if (z=="Qué che parese?") {
  console.log("Justouche, eh??");
}

getLang();

//github 8ctorres
